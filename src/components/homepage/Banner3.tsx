import React from "react";
import banner1a from "../../assets/images/banner_1_a.jpg";
import banner2a from "../../assets/images/banner_2_a.jpg";

const Banner3 = () => {
  return (
    <div className="banner-2 banner-3">
      <div className="container-ct">
        <div className="row-ct">
          <div className="banner-2__item col-ct">
            <a href="/" className="link">
              <img src={banner1a} alt="" />
            </a>
          </div>
          <div className="banner-2__item col-ct">
            <a href="/" className="link">
              <img src={banner2a} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner3;
