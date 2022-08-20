import React, {useState} from "react";
import send from './sendIcon.png'
const MessageFooter = ({handleSendMessage}) => {
    const [message, setMessage] = useState('');

    const saveMessage = () => {
        handleSendMessage(message)
        setMessage('')
    }


    const onChange = (e) => {
        setMessage(e.target.value)
    }


 return (
     <div className="compose">
    <input
        onKeyDown={(e) => {
            if (e.key === 'Enter') {       
                return saveMessage();
            }
        }}
        value={message}
        onChange={onChange}
        type="text"
        className="compose-input"
        placeholder="Type your message"
    />
    <img 
    src={send} 
    alt="send"
    className="send"
    onClick={saveMessage} />
    </div>
    )
}
export default MessageFooter;