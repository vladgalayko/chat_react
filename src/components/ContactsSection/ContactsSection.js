import React from "react";
import SearchPanel from "../SearchPanel/SearchPanel";
import './ContactsSection.css';
import pic from './myAvatar.png';

const ContactsSection = ({handleSelectContact, search, handleSearchChange, filtered, checked}) => {
    return (
        <div className="contacts-section-wrapper">
            <div>
                <div className="seacrh-section">
                    <img 
                    src={pic} 
                    alt="myAvatar"
                    className="contact-photo" />
                    <img 
                    src={checked} 
                    alt="checked"
                    className="checked-header" />
                </div>
            <SearchPanel
            handleSearchChange={handleSearchChange}
            search={search}/>
            <h2 className="chats">
                Chats
            </h2>
            </div>
            {filtered.map((contact, index) => (
            <div key={contact.id}
                 className="list-contact-item"
                 onClick={() => handleSelectContact(contact.id)}>
                <img 
                src={contact.photo} 
                alt="person" 
                className="contact-photo"/>
                <img 
                    src={checked} 
                    alt="checked"
                    className="checked" />
                <div className="contact-item">
                    <h1 className="contact-name">
                        {contact.name}
                        <div>
                        {contact.date}
                        </div>
                    </h1>
                    <p className="contact-message">
                        {contact.text}
                    </p>
                </div>
            </div>))}
        </div>
    )
}

export default ContactsSection;