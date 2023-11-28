// Chat.js
import React, { useState } from "react";
import Message from "./Message"; // Certifique-se de ter um componente Message

const Message = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { text: newMessage, user: "user" }]);
      setNewMessage("");
    }
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <Message key={index} text={message.text} user={message.user} />
        ))}
      </div>
      <div>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Enviar</button>
      </div>
    </div>
  );
};

export default Chat;
