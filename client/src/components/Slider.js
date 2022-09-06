import * as React from "react";
import "../sass/main.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import logo1 from "../assets/events/image_4.jpeg";
import logo2 from "../assets/events/image_5.jpg";
import logo3 from "../assets/events/image_6.jpeg";

const Slider = () => {
  return (
    <div className="section__carousel">
      <Carousel className="slider" style={{}}>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 slider__img"
            src={logo1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 slider__img"
            src={logo2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 slider__img"
            src={logo3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
