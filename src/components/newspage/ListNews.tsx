import React, { useEffect } from "react";
import Swiper from "swiper";
import news1 from "../../assets/images/news1.jpg";
import news2 from "../../assets/images/news2.jpg";
import news3 from "../../assets/images/news3.jpg";

const ListNews = () => {
  useEffect(() => {
    new Swiper(".swiper-news", {
      slidesPerView: 1,
      spaceBetween: 30,
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  });

  return (
    <div className="news">
      <div className="container-ct">
        <div className="row-ct">
          <div className="news__item">
            <div className="news__item-img">
              <a href="./news-detail.html" className="link">
                <img src={news1} alt="" />
              </a>
            </div>
            <div className="news__item-note">
              <div className="note__date">
                <i className="far fa-calendar"></i>
                <span>28/10/2019</span>
              </div>
              <div className="note__date">
                Đăng bởi
                <span>28/10/2019</span>
              </div>
            </div>
            <div className="news__item-title">
              <a href="./news-detail.html" className="link">
                Hướng dẫn cách làm trắng đế giày bị ố vàng chuẩn chỉ
              </a>
              <span>
                Adidas là một trong những hàng thời trang sneaker lớn nhất hiện
                nay của thế giới ...
              </span>
            </div>
          </div>
          <div className="news__item">
            <div className="news__item-img">
              <a href="./news-detail.html" className="link">
                <img src={news1} alt="" />
              </a>
            </div>
            <div className="news__item-note">
              <div className="note__date">
                <i className="far fa-calendar"></i>
                <span>28/10/2019</span>
              </div>
              <div className="note__date">
                Đăng bởi
                <span>28/10/2019</span>
              </div>
            </div>
            <div className="news__item-title">
              <a href="./news-detail.html" className="link">
                Hướng dẫn cách làm trắng đế giày bị ố vàng chuẩn chỉ
              </a>
              <span>
                Adidas là một trong những hàng thời trang sneaker lớn nhất hiện
                nay của thế giới ...
              </span>
            </div>
          </div>
          <div className="news__item">
            <div className="news__item-img">
              <a href="./news-detail.html" className="link">
                <img src={news1} alt="" />
              </a>
            </div>
            <div className="news__item-note">
              <div className="note__date">
                <i className="far fa-calendar"></i>
                <span>28/10/2019</span>
              </div>
              <div className="note__date">
                Đăng bởi
                <span>28/10/2019</span>
              </div>
            </div>
            <div className="news__item-title">
              <a href="./news-detail.html" className="link">
                Hướng dẫn cách làm trắng đế giày bị ố vàng chuẩn chỉ
              </a>
              <span>
                Adidas là một trong những hàng thời trang sneaker lớn nhất hiện
                nay của thế giới ...
              </span>
            </div>
          </div>
          <div className="news__item">
            <div className="news__item-img">
              <a href="./news-detail.html" className="link">
                <img src={news2} alt="" />
              </a>
            </div>
            <div className="news__item-note">
              <div className="note__date">
                <i className="far fa-calendar"></i>
                <span>28/10/2019</span>
              </div>
              <div className="note__date">
                Đăng bởi
                <span>28/10/2019</span>
              </div>
            </div>
            <div className="news__item-title">
              <a href="./news-detail.html" className="link">
                Hướng dẫn cách làm trắng đế giày bị ố vàng chuẩn chỉ
              </a>
              <span>
                Adidas là một trong những hàng thời trang sneaker lớn nhất hiện
                nay của thế giới ...
              </span>
            </div>
          </div>
          <div className="news__item">
            <div className="news__item-img">
              <a href="./news-detail.html" className="link">
                <img src={news3} alt="" />
              </a>
            </div>
            <div className="news__item-note">
              <div className="note__date">
                <i className="far fa-calendar"></i>
                <span>28/10/2019</span>
              </div>
              <div className="note__date">
                Đăng bởi
                <span>28/10/2019</span>
              </div>
            </div>
            <div className="news__item-title">
              <a href="./news-detail.html" className="link">
                Hướng dẫn cách làm trắng đế giày bị ố vàng chuẩn chỉ
              </a>
              <span>
                Adidas là một trong những hàng thời trang sneaker lớn nhất hiện
                nay của thế giới ...
              </span>
            </div>
          </div>
          <div className="news__item">
            <div className="news__item-img">
              <a href="./news-detail.html" className="link">
                <img src={news1} alt="" />
              </a>
            </div>
            <div className="news__item-note">
              <div className="note__date">
                <i className="far fa-calendar"></i>
                <span>28/10/2019</span>
              </div>
              <div className="note__date">
                Đăng bởi
                <span>28/10/2019</span>
              </div>
            </div>
            <div className="news__item-title">
              <a href="./news-detail.html" className="link">
                Hướng dẫn cách làm trắng đế giày bị ố vàng chuẩn chỉ
              </a>
              <span>
                Adidas là một trong những hàng thời trang sneaker lớn nhất hiện
                nay của thế giới ...
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListNews;
