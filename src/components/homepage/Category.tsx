import React, { useEffect } from "react";
import Swiper from "swiper";
import image1 from "../../assets/images/1.jpg";
import image2 from "../../assets/images/2.jpg";
import image3 from "../../assets/images/3.jpg";
import image4 from "../../assets/images/4.jpg";
import image5 from "../../assets/images/5.jpg";
import image6 from "../../assets/images/6.jpg";

const Category = () => {
  useEffect(() => {
    new Swiper(".swiper-category-1", {
      slidesPerView: 2,
      spaceBetween: 30,
      navigation: {
        nextEl: " .next-big-1",
        prevEl: ".prev-big-1",
      },
      breakpoints: {
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
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
  });

  return (
    <div className="category category-woman">
      <div className="container-ct">
        <div className="row">
          <div className="category__name col-ct">
            <div className="category__name-img">
              <div className="category__name-head">
                <a href="/" className="link">
                  Cho nữ
                </a>
                <span>
                  Cung cấp những sản phẩm<br></br>
                  bộ sưu tập mới nhất<br></br>
                  cho bạn
                </span>
              </div>
              <div className="category__name-btn">
                <a href="/" className="link">
                  Xem thêm
                </a>
              </div>
            </div>
          </div>
          <div className="category__list col-ct">
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
                          <img src={image2} alt="" />
                        </div>
                        <div className="swiper-slide product__slide-img">
                          <img src={image3} alt="" />
                        </div>
                        <div className="swiper-slide product__slide-img">
                          <img src={image4} alt="" />
                        </div>
                        <div className="swiper-slide product__slide-img">
                          <img src={image5} alt="" />
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
                      <img src={image5} alt="" />
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
                          <img src={image6} alt="" />
                        </div>
                        <div className="swiper-slide product__slide-img">
                          <img src={image5} alt="" />
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
                      <img src={image1} alt="" />
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
                    <i className="fas fa-angle-right next-small-4"></i>
                  </div>
                  <div className="product__infor">
                    <div className="product__infor-title link">
                      <a href="/">Adidas NEO Men White</a>
                    </div>
                    <div className="product__infor-branch link">
                      <a href="/">Adidas</a>
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
    </div>
  );
};

export default Category;
