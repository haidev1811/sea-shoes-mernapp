import React from "react";
import logo from "../../../assets/images/logo.png";
import shoppingBar from "../../../assets/images/shopping-bag.svg";
import image1 from "../../../assets/images/1.jpg";
import image2 from "../../../assets/images/2.jpg";
import image3 from "../../../assets/images/3.jpg";
import image4 from "../../../assets/images/4.jpg";

const BottomHeader = () => {
  return (
    <div className="header">
      <div className="container-ct">
        <div className="row-ct">
          <div className="header__icon col-ct">
            <i className="fas fa-bars"></i>
          </div>
          <div className="header__img col-ct">
            <a href="./index.html" className="link">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="header__menu col-ct">
            <ul className="header__menu-list">
              <li className="mlist__item mlist__item--select">
                <a href="./index.html" className="link">
                  Trang chủ
                </a>
              </li>
              <li className="mlist__item">
                <a href="./about.html" className="link">
                  Giới thiệu
                </a>
              </li>
              <li className="mlist__item">
                <a href="./category.html" className="link">
                  Sản phẩm <i className="fas fa-sort-down"></i>
                </a>
                <ul className="mlist__item-submenu">
                  <li>
                    <a href="./category.html" className="link">
                      Giày Training & Gym{" "}
                    </a>
                  </li>
                  <li>
                    <a href="./category.html" className="link">
                      Giày Basketball{" "}
                    </a>
                  </li>
                  <li>
                    <a href="./category.html" className="link">
                      Giày Running{" "}
                    </a>
                  </li>
                  <li>
                    <a href="./category.html" className="link">
                      Giày Jodan{" "}
                    </a>
                  </li>
                </ul>
              </li>
              <li className="mlist__item">
                <a href="./news.html" className="link">
                  Tin tức
                </a>
              </li>
              <li className="mlist__item">
                <a href="./contact.html" className="link">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>
          <div className="header__act col-ct">
            <div className="header__act-search">
              <i className="fas fa-search"></i>
              <div className="hsearch">
                <input type="text" placeholder="Tìm kiếm..." />
                <a href="./search.html" className="link">
                  <i className="fas fa-search"></i>
                </a>
              </div>
            </div>
            <div className="header__act-cart">
              <a href="./cart.html" className="cart-icon link">
                {" "}
                <img src={shoppingBar} alt="" />
                <span className="total-product">4</span>
              </a>
              <div className="cart-drop">
                <div className="cart__list">
                  <div className="cart__list-item">
                    <div className="clitem__img">
                      <a href="./detail.html" className="link">
                        <img src={image1} alt="" />
                      </a>
                    </div>
                    <div className="clitem__infor-nav">
                      <div className="clitem__infor-head">
                        <a
                          href="./detail.html"
                          title="Adidas Originals Blue CAMPUS"
                          className="link"
                        >
                          Adidas Originals Blue CAMPUS
                        </a>
                      </div>
                      <div className="clitem__infor-price">2.500.000₫</div>
                      <div className="clitem__infor-number">
                        <span className="num-decrease">-</span>
                        <input type="number" value="1" />
                        <span className="num-increase">+</span>
                      </div>
                    </div>
                    <i className="fas fa-times"></i>
                  </div>
                  <div className="cart__list-item">
                    <div className="clitem__img">
                      <a href="/" className="link">
                        <img src={image2} alt="" />
                      </a>
                    </div>
                    <div className="clitem__infor-nav">
                      <div className="clitem__infor-head">
                        <a
                          href="/"
                          title="Adidas Originals Blue CAMPUS"
                          className="link"
                        >
                          Adidas Originals Blue CAMPUS
                        </a>
                      </div>
                      <div className="clitem__infor-price">2.500.000₫</div>
                      <div className="clitem__infor-number">
                        <span className="num-decrease">-</span>
                        <input type="number" value="1" />
                        <span className="num-increase">+</span>
                      </div>
                    </div>
                    <i className="fas fa-times"></i>
                  </div>
                  <div className="cart__list-item">
                    <div className="clitem__img">
                      <a href="/" className="link">
                        <img src={image3} alt="" />
                      </a>
                    </div>
                    <div className="clitem__infor-nav">
                      <div className="clitem__infor-head">
                        <a
                          href="/"
                          title="Adidas Originals Blue CAMPUS"
                          className="link"
                        >
                          Adidas Originals Blue CAMPUS
                        </a>
                      </div>
                      <div className="clitem__infor-price">2.500.000₫</div>
                      <div className="clitem__infor-number">
                        <span className="num-decrease">-</span>
                        <input type="number" value="1" />
                        <span className="num-increase">+</span>
                      </div>
                    </div>
                    <i className="fas fa-times"></i>
                  </div>
                  <div className="cart__list-item">
                    <div className="clitem__img">
                      <a href="/" className="link">
                        <img src={image4} alt="" />
                      </a>
                    </div>
                    <div className="clitem__infor-nav">
                      <div className="clitem__infor-head">
                        <a
                          href="/"
                          title="Adidas Originals Blue CAMPUS"
                          className="link"
                        >
                          Adidas Originals Blue CAMPUS
                        </a>
                      </div>
                      <div className="clitem__infor-price">2.500.000₫</div>
                      <div className="clitem__infor-number">
                        <span className="num-decrease">-</span>
                        <input type="number" value="1" />
                        <span className="num-increase">+</span>
                      </div>
                    </div>
                    <i className="fas fa-times"></i>
                  </div>
                </div>
                <div className="cart__total">
                  <span>Tổng cộng</span>
                  <span className="cart__total-money">8.200.000₫</span>
                </div>
                <div className="cart__btn">
                  <a href="./cart.html" className="cart__btn-cart link">
                    Giỏ hàng
                  </a>
                  <a href="./payment.html" className="cart__btn-pay link">
                    Thanh toán
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomHeader;
