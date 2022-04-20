import React, { useEffect } from "react";
import Swiper from "swiper";
import slider1 from "../../assets/images/slider_1.jpg";

const Banner = () => {
  useEffect(() => {
    new Swiper(".swiper-banner", {
      pagination: {
        el: ".swiper-pagination"
      },
    });
  });

  return (
    <div className="banner-home">
      <div className="swipter-container swiper-banner">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img src={slider1} alt="" />
          </div>
          <div className="swiper-slide">
            <img src={slider1} alt="" />
          </div>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default Banner;
