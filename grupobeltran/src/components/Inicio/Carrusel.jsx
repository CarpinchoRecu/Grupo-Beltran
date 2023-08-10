import React, { useEffect, useState, useRef, useCallback } from "react";
import img1 from "./assetsInicio/imgInicio/imgInicio1.jpeg"
import img2 from "./assetsInicio/imgInicio/imgInicio2.jpeg";
import img3 from "./assetsInicio/imgInicio/imgInicio3.jpeg";
import flecha from "./assetsInicio/flecha.png";
import { Link } from "react-router-dom";
import styleCarrusel from "./styleCarrusel.scss";

const Carrusel = () => {
  const [contador, setContador] = useState(0);
  const [width, setWidth] = useState(0);
  const [sliderRef, setSliderRef] = useState(null);
  const slides = [
    {
      image: img1,
      content: "TU SALUD ES NUESTRA PRIORIDAD",
      p: "Tene la seguridad de estar protegido tanto vos como tu familia, desde el integrante mas pequeño.",
    },
    {
      image: img2,
      content: "GESTIONA TUS CONSULTAS DESDE CASA",
      p: "Te ofrecemos el mejor asesoramiento a traves de nuestros canales de atencion con respuesta inmediata",
    },
    {
      image: img3,
      content: "FORMA PARTE DE NUESTRO EQUIPO",
      p: "Te damos la oportunidad de formar parte de nuestro equipo de trabajo!",
    },
  ];

  const moveCarousel = (index) => {
    const transformValue = -width * index + "px";
    sliderRef.style.transform = `translateX(${transformValue})`;
    sliderRef.style.transition = "transform 1s";
  };

  const handleNextSlide = () => {
    const nextSlideIndex = (contador + 1) % slides.length;
    setContador(nextSlideIndex);
    moveCarousel(nextSlideIndex);
  };

  const handlePreviousSlide = () => {
    const previousSlideIndex = (contador - 1 + slides.length) % slides.length;
    setContador(previousSlideIndex);
    moveCarousel(previousSlideIndex);
  };

  const handlePuntoClick = (index) => {
    setContador(index);
    moveCarousel(index);
  };

  useEffect(() => {
    setWidth(sliderRef?.firstChild.clientWidth);

    const resizeHandler = () => {
      setWidth(sliderRef?.firstChild.clientWidth);
    };

    resizeHandler();
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [sliderRef]);

  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  const handleResumeAnimation = () => {
    setPaused(false); // Reanudar animación
  };

  useEffect(() => {
    const handleSlide = () => {
      const nextSlideIndex = (contador + 1) % slides.length;
      const transformValue = -width * nextSlideIndex + "px";
      sliderRef.style.transform = `translateX(${transformValue})`;
      sliderRef.style.transition = "transform 1s";
      setContador(nextSlideIndex);
      handleResumeAnimation();
    };

    const startInterval = () => {
      if (!paused) {
        intervalRef.current = setInterval(handleSlide, 5100);
      }
    };

    startInterval();

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [contador, paused, slides.length, sliderRef, width]);

  const generatePuntosIndicadores = () => {
    return Array.from({ length: slides.length }).map((_, index) => (
      <div
        key={index}
        className={`punto${index === contador ? " activo" : ""}`}
        onClick={() => handlePuntoClick(index)}
      ></div>
    ));
  };

  return (
    <div className="contenedor">
      <div className="flechas">
        <div className="flechaIzq" onClick={handlePreviousSlide}>
          <img src={flecha} alt="" />
        </div>
        <div className="flechaDer" onClick={handleNextSlide}>
          <img src={flecha} alt="" />
        </div>
      </div>
      <div className="slider-contenedor" ref={setSliderRef}>
        {slides.map((slide, index) => (
          <section className="contenido-slider" key={index}>
            <div className={`contenedorTxt ${paused ? 'pausado' : ''}`}>
              <h2 className={`texto-entrada ${contador === index ? 'activo' : ''}`}>{slide.content}</h2>
              <p className={`texto-entrada ${contador === index ? 'activo' : ''}`}>{slide.p}</p>
              <Link className="linkInicio" to="/Contactanos">
                +INFO
              </Link>
            </div>
            <div className="contenedorImg">
              <img src={slide.image} alt={`Slide ${index + 1}`} />
            </div>
          </section>
        ))}
      </div>
      <div className="contendorPuntos">
        {" "}
        <div className="puntos-indicadores">{generatePuntosIndicadores()}</div>
      </div>
    </div>
  );
};

export default Carrusel;
