import React from "react";
import banner1 from "../../assets/images/banner_1.jpg";
import banner2 from "../../assets/images/banner_2.jpg";
import banner3 from "../../assets/images/banner_3.jpg";

const Banner2 = () => {
  return (
    <div className="banner-2">
      <div className="container-ct">
        <div className="row-ct">
          <div className="banner-2__item col-ct">
            <a href="/" className="link">
              <img src={banner1} alt="" />
            </a>
          </div>
          <div className="banner-2__item col-ct">
            <a href="/" className="link">
              <img src={banner2} alt="" />
            </a>
          </div>
          <div className="banner-2__item col-ct">
            <a href="/" className="link">
              <img src={banner3} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
