import styleChatBot from "./styleChatBot.scss";
import React, { useRef, useEffect, useState } from "react";
import imgChat from "./assetsChat/imgChat.png";
import Logica from "./Logica.jsx";
import logo from "../Header/assetsHeader/logo1.png";

const ChatBot = () => {
    const chatBtnRef = useRef(null);
    const chatBtnCloseRef = useRef(null);
    const minimizarRef = useRef();
    const offcanvasChatRef = useRef(null);
    const imgChatRef = useRef(null);

    const [chatOpen, setChatOpen] = useState(false);

    const handleClick = () => {
        setChatOpen(!chatOpen);

        if (!chatOpen) {
            imgChatRef.current.style.display = "none";
            chatBtnRef.current.style.display = "none";
            chatBtnCloseRef.current.style.display = "block";
        }
        if (chatOpen) {
            imgChatRef.current.style.display = "block";
            chatBtnRef.current.style.display = "block";
            chatBtnCloseRef.current.style.display = "none";
        }
    };

    return (
        <>
            <div id="chatBot">
                <div>
                    <div className="chatBtn" ref={chatBtnRef} onClick={handleClick}>
                        <img ref={imgChatRef} src={imgChat} alt="logo del chat" />
                    </div>

                    <div
                        className={`offcanvasChat ${chatOpen ? "show" : ""}`}
                        ref={offcanvasChatRef}
                    >
                        <div className="titleChat">
                            <h1>Asistente Virtual de AsesSalud</h1>
                            <div
                                className={`closeBtn ${chatOpen ? "close" : ""}`}
                                ref={chatBtnCloseRef}
                                onClick={handleClick}
                            ></div>
                        </div>
                        <Logica />
                        <div className="footerChat">
                            <img src={logo} alt="logo" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChatBot;
