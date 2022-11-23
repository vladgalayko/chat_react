import React, {useState, useEffect, useMemo, useRef, useContext} from "react";
import defaultContacts from "../mokdata/defaultContacts";
import tempMessages from "../mokdata/Messeges"
import { getItemFromLocalStorage, setItemToLocalStorage  } from "../helpers";
import ContactsSection from "../components/ContactsSection/ContactsSection";
import MessageSection from "../components/MessageSection/MessageSection";
import checked from "../components/ContactsSection/checked.png";
import { getChukNorrisResponce } from "../services/ChukNorris";
import toast, { Toaster } from 'react-hot-toast';
import './Messenger.css'
import { Context } from "..";
import {useAuthState} from 'react-firebase-hooks/auth'
import {useCollectionData} from 'react-firebase-hooks/firestore'


const notify = (message) => toast(message);

const Messenger = () => {
    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)
    const [message, loading] = useCollectionData(
        firestore.collection('message').orderBy('createdAt')
    )
    const [contacts, setContacts] = useState([]);
    const [messages, setMessages] = useState([]);
    const [selectedContactId, setSelectedContactId] = useState(null);
    const [search, setNewSearch] = useState("");

    // setContacts(contacts.sort((a,b) => a.timestamp - b.timestamp));

    let time = new Date().getTime();
    let date = new Date(time);

    const handleSearchChange = (e) => {
        setNewSearch(e.target.value);
      };

    const filtered = !search
    ? contacts
    : contacts.filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase())
    );

    const currentContact = useMemo(
            () => contacts.filter(el => el.id === selectedContactId)[0],
            [selectedContactId, contacts]
            )

    useEffect(() => {
        const savedContacts = getItemFromLocalStorage('contacts')
        const savedContactId = getItemFromLocalStorage('contactId')
        const savedMessages = getItemFromLocalStorage('messages')

        let newContacts;
        let newSelectedContactId;
        if (savedContacts) {
            newContacts = savedContacts;
            // SetContacts(savedContacts);
        } else {
            newContacts = defaultContacts;
            setItemToLocalStorage('contacts', defaultContacts);
        }
        if (savedContactId) {
            newSelectedContactId = savedContactId
        } else {
            newSelectedContactId = newContacts[0].id
        }
        setSelectedContactId(newSelectedContactId)
        setContacts(newContacts);
        if (savedMessages) {
            setMessages(savedMessages[newSelectedContactId])
        } else {
            setMessages(tempMessages[newSelectedContactId])
            setItemToLocalStorage('messages', tempMessages)
        }
    },[])
    
   
    const handleSelectContact = (id, photo) => {
            setSelectedContactId(id)
            setItemToLocalStorage('contactId', id)
            const savedMessages = getItemFromLocalStorage('messages')
            setMessages(savedMessages[id])
    }
    const handleSendMessage = async (message) => {
        if (message.trim().length !== 0) {
            const messageData = {
                isUserMessage: true,
                uid: user.uid,
                photoURL: user.photoURL,
                needResponce: true,
                message: message,
                timestamp: date.toString().slice(0, 24)
            }
            firestore.collection('message').add(messageData)
    
            const newMessages = [...messages, messageData]
            setMessages(newMessages)
            const savedMessages = getItemFromLocalStorage('messages')
            setItemToLocalStorage('messages', {
                ...savedMessages, 
                [selectedContactId]: newMessages
            })
            setTimeout(async () => {
                const resMessage = await getChukNorrisResponce()
                const responceMessageData = {
                    isUserMessage: false,
                    id: Math.round(Math.random() * 10000),
                    message: resMessage,
                    timestamp: date.toString().slice(0, 24)
                }
                const messagesWithRes = [...newMessages, responceMessageData]
                setMessages(messagesWithRes)
                const savedMessages = getItemFromLocalStorage('messages')
                setItemToLocalStorage('messages', {
                    ...savedMessages,
                    [selectedContactId]: messagesWithRes
                })
                notify(resMessage)
            },5000)
        } 
        // Get responce from API and save this responce message
        
    }

    return (
        <div className="wrapper">
            <ContactsSection
            checked={checked}
            search={search}
            filtered={filtered}
            handleSearchChange={handleSearchChange}
            contacts={contacts} 
            handleSelectContact={handleSelectContact} 
            selectedContactId={selectedContactId}/>
            <MessageSection
            checked={checked}
            messages={messages}
            currentContact={currentContact}
            handleSendMessage={handleSendMessage}/>
            <Toaster/>
        </div>
        
    )
}

export default Messenger;