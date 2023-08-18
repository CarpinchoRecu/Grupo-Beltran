import { useState, useRef, useEffect } from "react";
import data from "./data.js";
import "./styleChatbot.scss";

const Logica = () => {
  const [preguntaClickeada, setPreguntaClickeada] = useState(null);
  const [preguntaAddClickeada, setPreguntaAddClickeada] = useState(false);
  const [chatFinalizado, setChatFinalizado] = useState(false);
  const [escribiendo, setEscribiendo] = useState(false);
  const [escribiendoAdd, setEscribiendoAdd] = useState(false);
  const chatContainerRef = useRef(null); // Referencia al contenedor del chat

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

  const volverAtras = () => {
    setPreguntaClickeada(null);
    setChatFinalizado(false);
    setPreguntaAddClickeada(false);
  };

  const scrollToBottom = () => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  };

  useEffect(() => {
    scrollToBottom();
  }, [preguntaClickeada, preguntaAddClickeada, chatFinalizado]);

  return (
    <>
      <div id="chat" ref={chatContainerRef}>
        <div className="bot">
          <p>Hola soy Asis el ChatBot de AsesSalud, ¿En qué puedo ayudarte?</p>
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
                <p>.</p>
                <p>.</p>
                <p>.</p>
              </div>
            ) : (
              <div className="respondido">
                <div className="bot" dangerouslySetInnerHTML={{ __html: data[preguntaClickeada].respuesta }} />
                {preguntaClickeada === 6 && (
                  <div className="usuario" onClick={apretarPreguntaAdd}>
                    <p>{data[preguntaClickeada].preguntaAdd}</p>
                  </div>
                )}
                {preguntaAddClickeada && (
                  <>
                    {escribiendoAdd ? (
                      <div className="respondiendo">
                        <p>.</p>
                        <p>.</p>
                        <p>.</p>
                      </div>
                    ) : (
                      <div className="bot">
                        <p>{data[preguntaClickeada].respuestaARePregunta}</p>
                      </div>
                    )}
                  </>
                )}
                <div className="usuario">
                  <p>{data[preguntaClickeada].respuestaAdd2}</p>
                </div>
                <div className="usuario">
                  <p onClick={finalizarChat}>
                    {data[preguntaClickeada].respuestaAdd1}
                  </p>
                </div>
                {chatFinalizado && (
                  <div className="final">
                    <p>Aquí finaliza el chat con Asis</p>
                    <button onClick={volverAtras}>Atrás</button>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Logica;
