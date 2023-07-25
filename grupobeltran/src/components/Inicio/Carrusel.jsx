import React, { useEffect, useState } from "react";
import img1 from "./assetsInicio/imgInicio1.jpeg";
import img2 from "./assetsInicio/imgInicio2.jpeg";
import img3 from "./assetsInicio/imgInicio3.jpeg";
import { Link } from "react-router-dom";

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

  useEffect(() => {
    setWidth(sliderRef?.firstChild.clientWidth);

    const resizeHandler = () => {
      setWidth(sliderRef?.firstChild.clientWidth);
    };

    resizeHandler(); // Llamar a resizeHandler una vez para establecer el ancho inicialmente

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [sliderRef]);

  useEffect(() => {
    const handleSlide = () => {
      const nextSlideIndex = (contador + 1) % slides.length;
      const transformValue = -width * nextSlideIndex + "px";
      sliderRef.style.transform = `translateX(${transformValue})`;
      sliderRef.style.transition = "transform .8s";
      setContador(nextSlideIndex);
    };

    const interval = setInterval(handleSlide, 3200);

    return () => {
      clearInterval(interval);
    };
  }, [contador, slides.length, sliderRef, width]);

  return (
    <div className="contenedor">
      <div className="slider-contenedor" ref={setSliderRef}>
        {slides.map((slide, index) => (
          <section className="contenido-slider" key={index}>
            <div className="contenedorTxt">
              <h2>{slide.content}</h2>
              <p>{slide.p}</p>
              <Link className="linkInicio" to="/Coberturas">
                INFO
              </Link>
            </div>
            <div className="contenedorImg">
              <img src={slide.image} alt={`Slide ${index + 1}`} />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Carrusel;
