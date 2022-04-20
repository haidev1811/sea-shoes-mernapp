import React from "react";

const Menu = () => {
  return (
    <div className="menu">
      <div className="wrap"></div>
      <div className="navbars">
        <div className="navbars__img">
          <a href="./index.html" className="link">
            <img src="./assets/images/logo.png" alt="" />
          </a>
        </div>
        <div className="navbars__list">
          <ul className="navbars__list-menu">
            <li className="nlmenu__item">
              <span>
                <a href="./index.html" className="link">
                  Trang chủ
                </a>
              </span>
            </li>
            <li className="nlmenu__item">
              <span>
                <a href="./about.html" className="link">
                  Giới thiệu
                </a>
              </span>
            </li>
            <li className="nlmenu__item">
              <span>
                <a href="./category.html" className="link">
                  Sản phẩm
                </a>
                <i className="fas fa-plus"></i>
                <i className="fas fa-minus"></i>
              </span>
              <ul>
                <li>
                  <a href="./category.html" className="link">
                    Giày Training & Gym
                  </a>
                </li>
                <li>
                  <a href="./category.html" className="link">
                    Giày Basketball
                  </a>
                </li>
                <li>
                  <a href="/" className="link">
                    Giày Running
                  </a>
                </li>
                <li>
                  <a href="/" className="link">
                    Giày Jodan
                  </a>
                </li>
              </ul>
            </li>
            <li className="nlmenu__item">
              <span>
                <a href="./news.html" className="link">
                  Tin tức
                </a>
              </span>
            </li>
            <li className="nlmenu__item">
              <span>
                <a href="./contact.html" className="link">
                  Liên hệ
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
