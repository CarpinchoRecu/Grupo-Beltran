import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styleSliderSancor from "./styleSliderSancor.scss"

const SliderSancor = () => {
    const slides = [
      { id: 1, title: "Slide 1" },
      { id: 2, title: "Slide 2" },
      { id: 3, title: "Slide 3" },
      { id: 4, title: "Slide 4" },
      { id: 5, title: "Slide 5" },
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
          {slides.map((slide) => (
            <div key={slide.id} className="slide">
              <h3>{slide.title}</h3>
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  
  export default SliderSancor;
