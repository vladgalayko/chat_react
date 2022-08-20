import React from "react";

import './MessageSection.css'
import MessageFooter from "./MessageFooter";
import MessageHeader from "./MessageHeader";

const MessageSection = ({messages, currentContact, handleSendMessage, checked}) => {
    return (
        <div className="message-list">
            <MessageHeader 
            checked={checked}
            currentContact={currentContact}/>
             {messages.map((message, index) => (
             <div
                className="message"
                key={message.id}>
                    <img 
                    src={currentContact.photo} 
                    alt="person" 
                    className="person-photo"/>
                <div className="message-text">
                {message.message}
                </div>
            </div>))}
            <MessageFooter handleSendMessage = {handleSendMessage}/>
        </div>
    )
}

export default MessageSection;