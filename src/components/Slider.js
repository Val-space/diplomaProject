import React from "react";
import "./style/slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { HashLink } from 'react-router-hash-link';
import Slider from "react-slick";
import image2Src from "../images/carousel/coffePlant.jpeg";
import image3Src from "../images/carousel/coffeeGreen.jpg";
import image4Src from "../images/carousel/coffee-beans.jpg";

function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
  };
  return (
    <Slider {...settings}>
      <div className={"slider-element"}>
        <img className={"slide-img"} src={'https://cdn.pixabay.com/photo/2017/08/06/18/08/people-2594770_1280.jpg'} alt={"img1"} />
        <HashLink smooth to='#products'><div className={"slider-text-centered"}>
          see our products
        </div></HashLink>
        {/* <div>see our products</div> */}
      </div>
      <div className={"slider-element"}>
        <img className={"slide-img"} src={image2Src} alt={"img2"} />
        <div className={"slider-text"}>
          “When you have visited a beautiful place, you want to share a piece of
          it with others.”
        </div>
      </div>
      <div className={"slider-element"}>
        <img className={"slide-img"} src={image3Src} alt={"img3"} />
        <div className={"slider-text"}>
          If you are looking for a specific coffee, we have a possibility and
          access to find it for you.
        </div>
      </div>
      <div className={"slider-element"}>
        <img className={"slide-img"} src={image4Src} alt={"img4"} />
        <div className={"slider-text"}>
          We live and travel around coffee origin countries and aim to find and
          purchase best products available considering quality, consistency and
          client destination
        </div>
      </div>
    </Slider>
  );
}

export default SimpleSlider;
