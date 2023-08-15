import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styleSliderPlanes from "./styleSliderPlanes.scss";
import flechaVioleta from "./assetsSancor/flechaVioleta.png";

const SliderSancor = () => {
  const slidesPlanes = [
    {
      id: 1,
      h2: "PLAN F700 Y F800",
      p: `hola ${flechaVioleta} hola hola`,
    },
    {
      id: 2,
      h2: "la Red de Prestadores mas Grande del Pais",
      p: "Medicos, sanatorios y centros de diagnostico.",
    },
    {
      id: 3,
      h2: "Consulta medica por Videollamada",
      p: "Con cualquier especialista, en cualquier momento.",
    },
    {
      id: 4,
      h2: "Odontolodia General al 100%",
      p: "Consultas y tratamientos.",
    },
    {
      id: 5,
      h2: "Emergencias Medicas las 24hs",
      p: "Servicio de atencion medica en domicilio. urgencias y emergencias medicas las 24hs.",
    },
    {
      id: 6,
      h2: "Gestiones Online",
      p: "Autorizaciones, consulta tu factura, imprimi tu credencial.",
    },
    {
      id: 7,
      h2: "Gestiones Online",
      p: "Autorizaciones, consulta tu factura, imprimi tu credencial.",
    },
    {
      id: 8,
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
        {slidesPlanes.map((slide) => (
          <div key={slide.id} className="slideCoberturas">
            <div className="contenedorContenido">
              <img src={slide.img} alt="" />
              <h2>{slide.h2}</h2>
              <div className="contenedorPlanes">
                <p>{slide.p}</p>
              </div>
              
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderSancor;
