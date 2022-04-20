import React, { useEffect } from "react";
import Swiper from "swiper";
import image1 from "../../assets/images/1.jpg";
import image2 from "../../assets/images/2.jpg";
import image3 from "../../assets/images/3.jpg";
import image4 from "../../assets/images/4.jpg";
import image5 from "../../assets/images/5.jpg";
import image6 from "../../assets/images/6.jpg";

const ListProduct = () => {
  useEffect(() => {
    new Swiper(".swiper-list", {
      slidesPerView: 2,
      spaceBetween: 30,
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 6,
          spaceBetween: 30,
        },
      },
    });
  });

  return (
    <div className="list">
      <div className="swipter-container swiper-list">
        <div className="swiper-wrapper">
          <div className="swiper-slide product">
            <div className="product__img">
              <span className="product__img-promotion">-17%</span>
              <a href="./detail.html" className="product__img-img link">
                <img src={image1} alt="" />
              </a>
              <a
                href="/"
                className="product__img-btn link"
                data-toggle="modal"
                data-target="#product-popup"
              >
                Mua ngay
              </a>
            </div>
            <div className="product__infor">
              <div className="product__infor-title">
                <a href="./detail.html" className="link">
                  Adidas NEO Men White
                </a>
              </div>
              <div className="product__infor-branch">
                <a href="./category.html" className="link">
                  Adidas
                </a>
              </div>
              <div className="product__infor-price">
                <span className="price--new">2.100.000₫</span>
                <span className="price--old">2.500.000₫</span>
              </div>
            </div>
          </div>
          <div className="swiper-slide product">
            <div className="product__img">
              <span className="product__img-promotion">-17%</span>
              <a href="./detail.html" className="product__img-img link">
                <img src={image2} alt="" />
              </a>
              <a href="/" className="product__img-btn link">
                Mua ngay
              </a>
            </div>
            <div className="product__infor">
              <div className="product__infor-title">
                <a href="./detail.html" className="link">
                  Adidas NEO Men White
                </a>
              </div>
              <div className="product__infor-branch">
                <a href="./category.html" className="link">
                  Adidas
                </a>
              </div>
              <div className="product__infor-price">
                <span className="price--new">2.100.000₫</span>
                <span className="price--old">2.500.000₫</span>
              </div>
            </div>
          </div>
          <div className="swiper-slide product">
            <div className="product__img">
              <span className="product__img-promotion">-17%</span>
              <a href="./detail.html" className="product__img-img link">
                <img src={image3} alt="" />
              </a>
              <a href="/" className="product__img-btn link">
                Mua ngay
              </a>
            </div>
            <div className="product__infor">
              <div className="product__infor-title">
                <a href="./detail.html" className="link">
                  Adidas NEO Men White
                </a>
              </div>
              <div className="product__infor-branch">
                <a href="./category.html" className="link">
                  Adidas
                </a>
              </div>
              <div className="product__infor-price">
                <span className="price--new">2.100.000₫</span>
                <span className="price--old">2.500.000₫</span>
              </div>
            </div>
          </div>
          <div className="swiper-slide product">
            <div className="product__img">
              <span className="product__img-promotion">-17%</span>
              <a href="/" className="product__img-img link">
                <img src={image4} alt="" />
              </a>
              <a href="/" className="product__img-btn link">
                Mua ngay
              </a>
            </div>
            <div className="product__infor">
              <div className="product__infor-title">
                <a href="/" className="link">
                  Adidas NEO Men White
                </a>
              </div>
              <div className="product__infor-branch">
                <a href="/" className="link">
                  Adidas
                </a>
              </div>
              <div className="product__infor-price">
                <span className="price--new">2.100.000₫</span>
                <span className="price--old">2.500.000₫</span>
              </div>
            </div>
          </div>
          <div className="swiper-slide product">
            <div className="product__img">
              <span className="product__img-promotion">-17%</span>
              <a href="/" className="product__img-img link">
                <img src={image5} alt="" />
              </a>
              <a href="/" className="product__img-btn link">
                Mua ngay
              </a>
            </div>
            <div className="product__infor">
              <div className="product__infor-title">
                <a href="/" className="link">
                  Adidas NEO Men White
                </a>
              </div>
              <div className="product__infor-branch">
                <a href="/" className="link">
                  Adidas
                </a>
              </div>
              <div className="product__infor-price">
                <span className="price--new">2.100.000₫</span>
                <span className="price--old">2.500.000₫</span>
              </div>
            </div>
          </div>
          <div className="swiper-slide product">
            <div className="product__img">
              <span className="product__img-promotion">-17%</span>
              <a href="/" className="product__img-img link">
                <img src={image1} alt="" />
              </a>
              <a href="/" className="product__img-btn link">
                Mua ngay
              </a>
            </div>
            <div className="product__infor">
              <div className="product__infor-title">
                <a href="/" className="link">
                  Adidas NEO Men White
                </a>
              </div>
              <div className="product__infor-branch">
                <a href="/" className="link">
                  Adidas
                </a>
              </div>
              <div className="product__infor-price">
                <span className="price--new">2.100.000₫</span>
                <span className="price--old">2.500.000₫</span>
              </div>
            </div>
          </div>
          <div className="swiper-slide product">
            <div className="product__img">
              <span className="product__img-promotion">-17%</span>
              <a href="/" className="product__img-img link">
                <img src={image1} alt="" />
              </a>
              <a href="/" className="product__img-btn link">
                Mua ngay
              </a>
            </div>
            <div className="product__infor">
              <div className="product__infor-title">
                <a href="/" className="link">
                  Adidas NEO Men White
                </a>
              </div>
              <div className="product__infor-branch">
                <a href="/" className="link">
                  Adidas
                </a>
              </div>
              <div className="product__infor-price">
                <span className="price--new">2.100.000₫</span>
                <span className="price--old">2.500.000₫</span>
              </div>
            </div>
          </div>
          <div className="swiper-slide product">
            <div className="product__img">
              <span className="product__img-promotion">-17%</span>
              <a href="/" className="product__img-img link">
                <img src={image6} alt="" />
              </a>
              <a href="/" className="product__img-btn link">
                Mua ngay
              </a>
            </div>
            <div className="product__infor">
              <div className="product__infor-title">
                <a href="/" className="link">
                  Adidas NEO Men White
                </a>
              </div>
              <div className="product__infor-branch">
                <a href="/" className="link">
                  Adidas
                </a>
              </div>
              <div className="product__infor-price">
                <span className="price--new">2.100.000₫</span>
                <span className="price--old">2.500.000₫</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
