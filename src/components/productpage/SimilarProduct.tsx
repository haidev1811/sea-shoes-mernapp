import React, { useEffect, useState } from "react";
import SwiperCore, { Navigation, Swiper } from "swiper/core";
import axios from "../../utils/axios";
import { productFilterInfo } from "../../redux/reducers/product/product.reducer";
import { Link } from "react-router-dom";

const SimilarProduct = () => {
  const [products, setProducts] = useState<productFilterInfo>();

  useEffect(() => {
    const getListTrendProduct = async () => {
      try {
        const result = await axios.get("/product/list?sort=0");

        setProducts(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    getListTrendProduct();
  }, []);

  SwiperCore.use([Navigation]);
  useEffect(() => {
    for (let i = 0; i <= products?.products?.length!; i++) {
      new Swiper(`.swiper__product-${i}`, {
        slidesPerView: 2,
        spaceBetween: 20,
        navigation: {
          nextEl: `.next-small-${i}`,
          prevEl: `.prev-small-${i}`,
        },
        breakpoints: {
          1200: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        },
      });
    }
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
  });

  const toVND = (price: any) => {
    let vnd =
      typeof price === "undefined"
        ? 0
        : price.toLocaleString("vi-VN", {
            currency: "VND",
          });
    return vnd;
  };

  const priceDiscount = (price: any, discount: any) => {
    return toVND(price - price * (discount / 100));
  };

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
              {products?.products?.map((product, index) => (
                <div className="swiper-slide product" key={index}>
                  <div className="product__img">
                    <span
                      className={`product__img-promotion ${
                        product.discount === 0 ? "d-none" : ""
                      }`}
                    >
                      -{product.discount}%
                    </span>
                    <a href="/" className="product__img-img link">
                      <img src={product.image1} alt="" />
                    </a>
                    <a href="/" className="product__img-btn link">
                      Mua ngay
                    </a>
                  </div>
                  <div className="product__slide">
                    <i className={`fas fa-angle-left prev-small-${index}`}></i>
                    <div
                      className={`swiper-container swiper__product-${index}`}
                    >
                      <div className="swiper-wrapper">
                        <div className="swiper-slide product__slide-img">
                          <img src={product.image1} alt="" />
                        </div>
                        <div className="swiper-slide product__slide-img">
                          <img src={product.image2} alt="" />
                        </div>
                        <div className="swiper-slide product__slide-img">
                          <img src={product.image3} alt="" />
                        </div>
                        <div className="swiper-slide product__slide-img">
                          <img src={product.image4} alt="" />
                        </div>
                        <div className="swiper-slide product__slide-img">
                          <img src={product.image5} alt="" />
                        </div>
                      </div>
                    </div>
                    <i className={`fas fa-angle-right next-small-${index}`}></i>
                  </div>
                  <div className="product__infor">
                    <div className="product__infor-title">
                      <Link to={`/product/${product.slug}`} className="link">
                        {product.name}
                      </Link>
                    </div>
                    <div className="product__infor-branch">
                      <Link
                        to={`/product?brand=${product.brand}`}
                        className="link"
                      >
                        {product.brand}
                      </Link>
                    </div>
                    <div className="product__infor-price">
                      <span className="price--new">
                        {priceDiscount(product.price, product.discount)}₫
                      </span>
                      <span
                        className={`price--old ${
                          product.discount === 0 ? "d-none" : ""
                        }`}
                      >
                        {toVND(product.price)}₫
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <i className="fas fa-angle-right next-big next-big-1 animate__animated animate__fadeInRight"></i>
        </div>
      </div>
    </div>
  );
};

export default SimilarProduct;
