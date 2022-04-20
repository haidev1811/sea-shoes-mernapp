import React, { useEffect } from "react";
import Swiper from "swiper";
import Category from "./Category";
import image1 from "../../assets/images/1.jpg";
import image2 from "../../assets/images/2.jpg";
import image3 from "../../assets/images/3.jpg";
import image4 from "../../assets/images/4.jpg";
import image5 from "../../assets/images/5.jpg";
import image6 from "../../assets/images/6.jpg";

const ListProduct = () => {
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
  }, []);

  return (
    <>
      <div className="category-icon">
        <i className="fas fa-align-right"></i>
        <i className="fas fa-times"></i>
      </div>
      <div className="category">
        <div className="container-ct">
          <Category />
          <div className="category__list-product col-ct">
            <div className="swiper-slide product">
              <div className="product__img">
                <span className="product__img-promotion">-17%</span>
                <a href="/" className="product__img-img link">
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
                <a
                  href="/"
                  className="product__img-btn link"
                  data-toggle="modal"
                  data-target="#product-popup"
                >
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
                  <img src={image3} alt="" />
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
                  <img src={image4} alt="" />
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
                  <img src={image5} alt="" />
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
                  <img src={image6} alt="" />
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
                  <img src={image5} alt="" />
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
                  <img src={image4} alt="" />
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
          </div>
          <div className="category__pagination">
            <ul>
              <li className="paginaton--none">
                <a href="/" className="link">
                  <i className="las la-angle-left"></i>
                </a>
              </li>
              <li className="paginaton--select">
                <a href="/" className="link">
                  1
                </a>
              </li>
              <li>
                <a href="/" className="link">
                  2
                </a>
              </li>
              <li>
                <a href="/" className="link">
                  <i className="las la-angle-right"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListProduct;
