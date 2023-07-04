import React, { useEffect, useState } from "react";
import img1 from "./assetsInicio/imgInicio1.jpg";
import img2 from "./assetsInicio/imgInicio2.jpg";
import img3 from "./assetsInicio/imgInicio3.jpg";

const Carrusel = () => {
  const [contador, setContador] = useState(0);
  const [width, setWidth] = useState(0);
  const [sliderRef, setSliderRef] = useState(null);
  const slides = [
    {
      image: img1,
      content: "Nuestras Coberturas",
      link: "/Coberturas",
    },
    {
      image: img2,
      content: "Para Vos y tu Familia",
      link: "/Coberturas",
    },
    {
      image: img3,
      content: "Inverti en tu Salud",
      link: "/Coberturas",
    },
    // Agrega más objetos para más slides
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
            <div>
              <h2>{slide.content}</h2>
              <a href={slide.link}>Toca Aqui</a>
            </div>
            <img src={slide.image} alt={`Slide ${index + 1}`} />
          </section>
        ))}
      </div>
    </div>
  );
}

export default Carrusel;
