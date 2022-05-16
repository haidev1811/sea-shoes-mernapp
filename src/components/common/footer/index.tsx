import React, { useEffect } from "react";
import { useLocation } from "react-router";
import $ from "jquery";
import imgBocongthuong from "../../../assets/images/bocongthuong.png";
import paymentIcon from "../../../assets/images/payment.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const checkRoleAdmin = useLocation().pathname.includes("admin");

  useEffect(() => {
    $(".footer__mid .fa-plus").on("click", function () {
      $(this).parent().next().slideDown();
      $(this).hide();
      $(this).next().show();
    });

    $(".footer__mid .fa-minus").on("click", function () {
      $(this).parent().next().slideUp();
      $(this).hide();
      $(this).prev().show();
    });
  });

  return (
    <div className={`${checkRoleAdmin ? "d-none" : ""}`}>
      <footer>
        <div className="container-ct">
          <div className="row-ct">
            <div className="footer__left col-ct">
              <div className="footer__head">Hệ thống cửa hàng</div>
              <div className="footer__left-store">
                <div className="store-name">Sea Shoes Đội Cấn</div>
                <div className="store-infor">
                  <div className="store-infor-address">
                    Địa chỉ: 366 Đội Cấn Ba Đình Hà Nội
                  </div>
                  <div className="store-infor-address">
                    Hotline: <a href="tel:0123456789">0123456789</a>
                  </div>
                </div>
              </div>
              <div className="footer__left-store">
                <div className="store-name">Sea Shoes Đội Cấn</div>
                <div className="store-infor">
                  <div className="store-infor-address">
                    Địa chỉ: 366 Đội Cấn Ba Đình Hà Nội
                  </div>
                  <div className="store-infor-address">
                    Hotline: <a href="tel:0123456789">0123456789</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer__mid col-ct">
              <div className="footer__mid-menu">
                <div className="footer__head">
                  Về chúng tôi<i className="fas fa-plus"></i>
                  <i className="fas fa-minus"></i>
                </div>
                <ul>
                  <li>
                    <Link to="/" className="link">
                      Trang chủ
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="link">
                      Giới thiệu
                    </Link>
                  </li>
                  <li>
                    <Link to="/product" className="link">
                      Sản phẩm
                    </Link>
                  </li>
                  <li>
                    <Link to="/news" className="link">
                      Tin tức
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="link">
                      Liên hệ
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="footer__mid-menu">
                <div className="footer__head">
                  Chính sách<i className="fas fa-plus"></i>
                  <i className="fas fa-minus"></i>
                </div>
                <ul>
                  <li>
                    <Link to="/" className="link">
                      Trang chủ
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="link">
                      Giới thiệu
                    </Link>
                  </li>
                  <li>
                    <Link to="/product" className="link">
                      Sản phẩm
                    </Link>
                  </li>
                  <li>
                    <Link to="/news" className="link">
                      Tin tức
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="link">
                      Liên hệ
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer__right col-ct">
              <div className="footer__head">Đăng kí</div>
              <div className="footer__right-img">
                <img src={imgBocongthuong} alt="" />
              </div>
              <div className="footer__head footer__right-head">Thanh toán</div>
              <div className="footer__right-img">
                <img src={paymentIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer">
        <div>
          ©Bản quyền thuộc về{" "}
          <Link to="/" className="link ml-1">
            Sea Team
          </Link>
        </div>
        <div>Cung cấp bởi Sapo</div>
      </div>
    </div>
  );
};

export default Footer;
