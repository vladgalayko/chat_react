import React, {useState, useEffect, useMemo, useRef} from "react";
import defaultContacts from "../mokdata/defaultContacts";
import tempMessages from "../mokdata/Messeges"
import { getItemFromLocalStorage, setItemToLocalStorage  } from "../helpers";
import ContactsSection from "../components/ContactsSection/ContactsSection";
import MessageSection from "../components/MessageSection/MessageSection";
import checked from "../components/ContactsSection/checked.png";
import { getChukNorrisResponce } from "../services/ChukNorris";
import './Messenger.css'

const Messenger = () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        left: 0,
        behavior: 'smooth'
      });
    const [contacts, setContacts] = useState([]);
    const [messages, setMessages] = useState([]);
    const [selectedContactId, setSelectedContactId] = useState(null);
    const [search, setNewSearch] = useState("");

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
                id: Math.round(Math.random() * 1000),
                // author: 'apple',
                message: message,
                timestamp: date.toString().slice(0, 24)
            }
    
            const newMessages = [...messages, messageData]
            setMessages(newMessages)
            const savedMessages = getItemFromLocalStorage('messages')
            setItemToLocalStorage('messages', {
                ...savedMessages, 
                [selectedContactId]: newMessages
            })

            
            // await setTimeout(async () => {
            //     const resMessage = await getChukNorrisResponce()
            //     console.log(resMessage)
            //     const responceMessageData = {
            //         isUserMessage: false,
            //         id: Math.round(Math.random() * 10000),
            //         message: resMessage,
            //         timestamp: date.toString().slice(0, 24)
            //     }
            //     const messagesWithRes = [...newMessages, responceMessageData]
            //     setMessages(messagesWithRes)
            //     const savedMessages = getItemFromLocalStorage('messages')
            //     setItemToLocalStorage('messages', {
            //         ...savedMessages,
            //         [selectedContactId]: messagesWithRes
            //     })
            // }, 2000)
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
        </div>
        
    )
}

export default Messenger;