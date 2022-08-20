import React from "react";

const MessageHeader = ({currentContact, checked}) => {
    return (
        <div>
            {
                currentContact
                && (
                    <div>
                        <p className="contact-wrapper">
                            <img 
                            src={checked} 
                            alt="checked"
                            className="checked-message-wrapper" />
                            <img 
                            src={currentContact.photo} 
                            alt="person" 
                            className="person-photo-header"/>
                                {currentContact.name}   
                        </p>
                    </div>
                )
            }
        </div>
    )
}
export default MessageHeader;