import styleChatBot from "./styleChatBot.scss";
import React, { useRef, useEffect, useState } from "react";
import imgChat from "./assetsChat/imgChat.png";
import Logica from "./Logica.jsx";

const ChatBot = () => {
    const chatBtnRef = useRef(null);
    const offcanvasChatRef = useRef(null);
    const imgChatRef = useRef(null);

    const [chatOpen, setChatOpen] = useState(false);

    const handleClick = () => {
        setChatOpen(!chatOpen);

        if (!chatOpen) {
            imgChatRef.current.style.display = "none";
        }
        if (chatOpen) {
            imgChatRef.current.style.display = "block";
        }
    };

    return (
        <>
            <div id="chatBot">
                <div>
                    <div
                        className={`chatBtn ${chatOpen ? "close" : ""}`}
                        ref={chatBtnRef}
                        onClick={handleClick}
                    >
                        <img ref={imgChatRef} src={imgChat} alt="logo del chat" />
                    </div>
                    <div
                        className={`offcanvasChat ${chatOpen ? "show" : ""}`}
                        ref={offcanvasChatRef}
                    >
                        <Logica />
                        <div className="closeBtn" onClick={handleClick}></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChatBot;
