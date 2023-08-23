import React, { useRef, useEffect, useState } from "react";
import styleChatBot from "./styleChatBot.scss";
import data from "./data.js";
import { Link } from "react-router-dom";

import imgChat from "./assetsChat/imgChat.png";
import logo from "../Header/assetsHeader/logo1.png";
import asis from "../../../favicon/favicon.png";
import atras from "./assetsChat/atras.png";

const ChatBot = () => {
    const chatBtnRef = useRef(null);
    const chatBtnCloseRef = useRef(null);
    const chatBtnMinRef = useRef(null);
    const offcanvasChatRef = useRef(null);
    const imgChatRef = useRef(null);
    const [chatOpen, setChatOpen] = useState(false);
    const [preguntaClickeada, setPreguntaClickeada] = useState(null);
    const [preguntaAddClickeada, setPreguntaAddClickeada] = useState(false);
    const [chatFinalizado, setChatFinalizado] = useState(false);
    const [escribiendo, setEscribiendo] = useState(false);
    const [escribiendoAdd, setEscribiendoAdd] = useState(false);
    const chatContainerRef = useRef(null); // Referencia al contenedor del chat

    const Cerrar = () => {
        setChatOpen(!chatOpen);
        if (!chatOpen) {
            imgChatRef.current.style.display = "none";
            chatBtnRef.current.style.display = "none";
            chatBtnCloseRef.current.style.display = "block";
            chatBtnMinRef.current.style.display = "block";
        }
        if (chatOpen) {
            imgChatRef.current.style.display = "block";
            chatBtnRef.current.style.display = "block";
            chatBtnCloseRef.current.style.display = "none";
            chatBtnMinRef.current.style.display = "none";
            setPreguntaClickeada(null);
            setChatFinalizado(false);
            setPreguntaAddClickeada(false);
        }
    };

    const Minimizar = () => {
        setChatOpen(!chatOpen);
        if (!chatOpen) {
            imgChatRef.current.style.display = "none";
            chatBtnRef.current.style.display = "none";
            chatBtnCloseRef.current.style.display = "block";
            chatBtnMinRef.current.style.display = "block";
        }
        if (chatOpen) {
            imgChatRef.current.style.display = "block";
            chatBtnRef.current.style.display = "block";
            chatBtnCloseRef.current.style.display = "none";
            chatBtnMinRef.current.style.display = "none";
        }
    };

    const volverAtras = () => {
        setPreguntaClickeada(null);
        setChatFinalizado(false);
        setPreguntaAddClickeada(false);
    };

    const apretarPregunta = (index) => {
        setPreguntaClickeada(index);
        setPreguntaAddClickeada(false);
        setChatFinalizado(false);
        setEscribiendo(true);
        setTimeout(() => {
            setEscribiendo(false);
        }, 2500);
    };

    const apretarPreguntaAdd = () => {
        if (!preguntaAddClickeada) {
            setPreguntaAddClickeada(true);
            setEscribiendoAdd(true);
            setTimeout(() => {
                setEscribiendoAdd(false);
            }, 2500);
        }
    };

    const finalizarChat = () => {
        setChatFinalizado(true);
    };

    const scrollToBottom = () => {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    };

    useEffect(() => {
        scrollToBottom();
    }, [
        preguntaClickeada,
        escribiendo,
        escribiendoAdd,
        preguntaAddClickeada,
        chatFinalizado,
    ]);

    return (
        <>
            <div id="chatBot">
                <div>
                    <div className="chatBtn" ref={chatBtnRef} onClick={Cerrar}>
                        <div className="contenedorBtnChat">
                            <h2>Chat</h2>
                            <img ref={imgChatRef} src={imgChat} alt="logo del chat" />
                        </div>
                    </div>

                    <div
                        className={`offcanvasChat ${chatOpen ? "show" : ""}`}
                        ref={offcanvasChatRef}
                    >
                        <div className="titleChat">
                            <h1>Asistente Virtual de AsesSalud</h1>
                            <div
                                className={`minBtn ${chatOpen ? "min" : ""}`}
                                ref={chatBtnMinRef}
                                onClick={Minimizar}
                            ></div>
                            <div
                                className={`closeBtn ${chatOpen ? "close" : ""}`}
                                ref={chatBtnCloseRef}
                                onClick={Cerrar}
                            ></div>
                        </div>
                        <div id="chat" ref={chatContainerRef}>
                            <div className="bot">
                                <img src={asis} alt="logo de asis" />
                                <p>
                                    Hola soy Asis el ChatBot de AsesSalud, ¿En qué puedo ayudarte?
                                </p>
                            </div>
                            {preguntaClickeada !== null ? (
                                <div key={preguntaClickeada} className="usuario">
                                    <p>{data[preguntaClickeada].pregunta}</p>
                                </div>
                            ) : (
                                data.map((datos, index) => (
                                    <div
                                        key={index}
                                        onClick={() => apretarPregunta(index)}
                                        className="usuario"
                                    >
                                        <p>{datos.pregunta}</p>
                                    </div>
                                ))
                            )}
                            {preguntaClickeada !== null && (
                                <>
                                    {escribiendo ? (
                                        <div className="respondiendo">
                                            <img src={asis} alt="logo de asis" />
                                            <div className="contenedotDots">
                                                <div className="dotsEspera"></div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="respondido">
                                            <div className="bot">
                                                <img src={asis} alt="logo de asis" />
                                                <p
                                                    dangerouslySetInnerHTML={{
                                                        __html: data[preguntaClickeada].respuesta,
                                                    }}
                                                />
                                            </div>
                                            {preguntaClickeada === 6 && (
                                                <div className="usuario" onClick={apretarPreguntaAdd}>
                                                    <p>{data[preguntaClickeada].preguntaAdd}</p>
                                                </div>
                                            )}
                                            {preguntaAddClickeada && (
                                                <>
                                                    {escribiendoAdd ? (
                                                        <div className="respondiendo">
                                                            <img src={asis} alt="logo de asis" />
                                                            <div className="contenedotDots">
                                                                <div className="dotsEspera"></div>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div className="bot">
                                                            <img src={asis} alt="logo de asis" />
                                                            <p
                                                                dangerouslySetInnerHTML={{
                                                                    __html:
                                                                        data[preguntaClickeada]
                                                                            .respuestaARePregunta,
                                                                }}
                                                            />
                                                        </div>
                                                    )}
                                                </>
                                            )}
                                            <div className="usuario">
                                                <Link
                                                    onClick={Minimizar}
                                                    to="/Contactanos"
                                                    className="LinkChat"
                                                >
                                                    {data[preguntaClickeada].respuestaAdd2}
                                                </Link>
                                            </div>
                                            <div className="usuario">
                                                <p onClick={finalizarChat}>
                                                    {data[preguntaClickeada].respuestaAdd1}
                                                </p>
                                            </div>
                                            {chatFinalizado && (
                                                <div className="final">
                                                    <p>Aquí finaliza el chat con Asis <br />¿Quieres preguntarme otra cosa?</p>
                                                    <img onClick={volverAtras} src={atras} alt="atras" />
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </>
                            )}
                        </div>

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
