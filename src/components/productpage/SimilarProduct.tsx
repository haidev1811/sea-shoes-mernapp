import React, { useEffect } from "react";
import Swiper from "swiper";
import image1 from "../../assets/images/1.jpg";
import image2 from "../../assets/images/2.jpg";
import image3 from "../../assets/images/3.jpg";
import image4 from "../../assets/images/4.jpg";

const SimilarProduct = () => {
  useEffect(() => {
    new Swiper(".swiper__product-1", {
      slidesPerView: 2,
      spaceBetween: 20,
      navigation: {
        nextEl: ".next-small-1",
        prevEl: ".prev-small-1",
      },
      breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });

    new Swiper(".swiper-category-1", {
      slidesPerView: 2,
      spaceBetween: 30,
      navigation: {
        nextEl: " .next-big-1",
        prevEl: ".prev-big-1",
      },
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
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  }, []);

  return (
    <div className="like">
      <div className="container-ct">
        <div className="like__list col-ct">
          <div className="like__title">
            <span></span>
            <a href="/" className="link">
              Có thể bạn sẽ thích
            </a>
            <span></span>
          </div>
          <i className="fas fa-angle-left prev-big prev-big-1 animate__animated animate__fadeInLeft"></i>
          <div className="swiper-container swiper-category-1">
            <div className="swiper-wrapper">
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
                <div className="product__slide">
                  <i className="fas fa-angle-left prev-small-1"></i>
                  <div className="swiper-container swiper__product-1">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide product__slide-img">
                        <img src={image1} alt="" />
                      </div>
                      <div className="swiper-slide product__slide-img">
                        <img src={image2} alt="" />
                      </div>
                      <div className="swiper-slide product__slide-img">
                        <img src={image3} alt="" />
                      </div>
                      <div className="swiper-slide product__slide-img">
                        <img src={image4} alt="" />
                      </div>
                    </div>
                  </div>
                  <i className="fas fa-angle-right next-small-1"></i>
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
                    <img src={image2} alt="" />
                  </a>
                  <a href="/" className="product__img-btn link">
                    Mua ngay
                  </a>
                </div>
                <div className="product__slide">
                  <i className="fas fa-angle-left prev-small-2"></i>
                  <div className="swiper-container swiper__product-2">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide product__slide-img">
                        <img src={image1} alt="" />
                      </div>
                      <div className="swiper-slide product__slide-img">
                        <img src={image2} alt="" />
                      </div>
                      <div className="swiper-slide product__slide-img">
                        <img src={image3} alt="" />
                      </div>
                      <div className="swiper-slide product__slide-img">
                        <img src={image4} alt="" />
                      </div>
                    </div>
                  </div>
                  <i className="fas fa-angle-right next-small-2"></i>
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
                    <img src={image3} alt="" />
                  </a>
                  <a href="/" className="product__img-btn link">
                    Mua ngay
                  </a>
                </div>
                <div className="product__slide">
                  <i className="fas fa-angle-left prev-small-3"></i>
                  <div className="swiper-container swiper__product-3">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide product__slide-img">
                        <img src={image1} alt="" />
                      </div>
                      <div className="swiper-slide product__slide-img">
                        <img src={image4} alt="" />
                      </div>
                      <div className="swiper-slide product__slide-img">
                        <img src={image3} alt="" />
                      </div>
                      <div className="swiper-slide product__slide-img">
                        <img src={image4} alt="" />
                      </div>
                    </div>
                  </div>
                  <i className="fas fa-angle-right next-small-3"></i>
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
                    <img src={image4} alt="" />
                  </a>
                  <a href="/" className="product__img-btn link">
                    Mua ngay
                  </a>
                </div>
                <div className="product__slide">
                  <i className="fas fa-angle-left prev-small-4"></i>
                  <div className="swiper-container swiper__product-4">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide product__slide-img">
                        <img src={image4} alt="" />
                      </div>
                      <div className="swiper-slide product__slide-img">
                        <img src={image3} alt="" />
                      </div>
                      <div className="swiper-slide product__slide-img">
                        <img src={image2} alt="" />
                      </div>
                      <div className="swiper-slide product__slide-img">
                        <img src={image1} alt="" />
                      </div>
                    </div>
                  </div>
                  <i className="fas fa-angle-right next-small-4"></i>
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
          <i className="fas fa-angle-right next-big next-big-1 animate__animated animate__fadeInRight"></i>
        </div>
      </div>
    </div>
  );
};

export default SimilarProduct;
