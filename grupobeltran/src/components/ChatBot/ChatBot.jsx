import styleChatBot from "./styleChatBot.scss";
import React, { useRef, useEffect, useState } from "react";
import imgChat from "./assetsChat/imgChat.png";

const ChatBot = () => {
    const chatBtnRef = useRef(null);
    const offcanvasChatRef = useRef(null);
    const imgChatRef = useRef(null)

    const [chatOpen, setChatOpen] = useState(false);

    const handleClick = () => {
        setChatOpen(!chatOpen);
    };

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (
                offcanvasChatRef.current &&
                !offcanvasChatRef.current.contains(event.target) &&
                !chatBtnRef.current.contains(event.target)
            ) {
                setChatOpen(false);
            }
        };

        if (chatOpen) {
            document.addEventListener("mousedown", handleOutsideClick);
            imgChatRef.current.style.opacity = 0;
            imgChatRef.current.style.transition = "0.3s ease";
        } else {
            document.removeEventListener("mousedown", handleOutsideClick);
            imgChatRef.current.style.opacity = 1;
        }

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [chatOpen]);
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
                    <div className={`offcanvasChat ${chatOpen ? "show" : ""}`} ref={offcanvasChatRef}>
                        <div className="closeBtn" onClick={handleClick}></div>
                    </div>
                </div>
                <div className="contenedorChat">
                    <div className="chat"></div>
                </div>
            </div>
        </>
    );
};

export default ChatBot;
