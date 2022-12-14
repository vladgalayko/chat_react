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
             <div className="messages-list-wrapper">
             {messages.map((message, index) => (
             <div
                // className={"message usermassage"}
                className={`message ${message.isUserMessage ? 'usermassage' : ''}`}
                key={index}>
                    {
                    !message.isUserMessage
                        && (
                            <img 
                            src={currentContact.photo} 
                            alt="person" 
                            className="person-photo"/>
                        )}
                <div className="message-text">
                {message.message}
                    <div className="date">
                    {message.timestamp}
                    </div>
                </div>
            </div>))}
             </div>
            <MessageFooter handleSendMessage = {handleSendMessage}/>
        </div>
    )
}

export default MessageSection;