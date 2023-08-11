import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styleSliderSancor from "./styleSliderSancor.scss";
import ambulancia from "./assetsSancor/ambulancia.png";
import celular from "./assetsSancor/celular.png";
import diente from "./assetsSancor/diente.png";
import family from "./assetsSancor/family.png";
import manosSalud from "./assetsSancor/manosSalud.png";
import wifi from "./assetsSancor/wifi.png";

const SliderSancor = () => {
  const slidesSancor = [
    {
      id: 1,
      img: family,
      h2: "Cobertura medica Integral",
      p: "Todos los planes cuentan con cobertura en consultas y practicas medicas, internacion al 100% y emergencias medicas a domicilio.",
    },
    {
      id: 2,
      img: manosSalud,
      h2: "la Red de Prestadores mas Grande del Pais",
      p: "Medicos, sanatorios y centros de diagnostico.",
    },
    {
      id: 3,
      img: celular,
      h2: "Consulta medica por Videollamada",
      p: "Con cualquier especialista, en cualquier momento.",
    },
    {
      id: 4,
      img: diente,
      h2: "Odontolodia General al 100%",
      p: "Consultas y tratamientos.",
    },
    {
      id: 5,
      img: ambulancia,
      h2: "Emergencias Medicas las 24hs",
      p: "Servicio de atencion medica en domicilio. urgencias y emergencias medicas las 24hs.",
    },
    {
      id: 6,
      img: wifi,
      h2: "Gestiones Online",
      p: "Autorizaciones, consulta tu factura, imprimi tu credencial.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slidesSancor.map((slide) => (
          <div key={slide.id} className="slideCoberturas">
            <div className="contenedorContenido">
              <img src={slide.img} alt="" />
              <h2>{slide.h2}</h2>
              <p>{slide.p}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderSancor;
