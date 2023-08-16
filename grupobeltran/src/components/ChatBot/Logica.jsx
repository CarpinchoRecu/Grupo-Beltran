// src/components/ChatBot.js
import React, { useState } from "react";
import { chatData } from "./data.jsx";

const Logica = () => {
    const [messages, setMessages] = useState([]);

    const addMessage = (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
    };

    const handleQuestionClick = (answer) => {
        addMessage({ type: "answer", content: answer });
    };

    return (
        <div className="chat-container">
            <div className="message-list">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.type}`}>
                        {message.type === "question" && (
                            <div className="question">
                                {message.content}
                                {chatData.map((item, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleQuestionClick(item.answer)}
                                    >
                                        {item.question}
                                    </button>
                                ))}
                            </div>
                        )}
                        {message.type === "answer" && <p>{message.content}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Logica;
