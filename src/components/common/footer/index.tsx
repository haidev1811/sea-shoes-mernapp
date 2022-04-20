import React from "react";
import imgBocongthuong from "../../../assets/images/bocongthuong.png";
import paymentIcon from "../../../assets/images/payment.png";

const Footer = () => {
  return (
    <>
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
                    Hotline: <a href="/">0123456789</a>
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
                    Hotline: <a href="/">0123456789</a>
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
                    <a href="/" className="link">
                      Trang chủ
                    </a>
                  </li>
                  <li>
                    <a href="/" className="link">
                      Giới thiệu
                    </a>
                  </li>
                  <li>
                    <a href="/" className="link">
                      Sản phẩm
                    </a>
                  </li>
                  <li>
                    <a href="/" className="link">
                      Tin tức
                    </a>
                  </li>
                  <li>
                    <a href="/" className="link">
                      Liên hệ
                    </a>
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
                    <a href="/" className="link">
                      Trang chủ
                    </a>
                  </li>
                  <li>
                    <a href="/" className="link">
                      Giới thiệu
                    </a>
                  </li>
                  <li>
                    <a href="/" className="link">
                      Sản phẩm
                    </a>
                  </li>
                  <li>
                    <a href="/" className="link">
                      Tin tức
                    </a>
                  </li>
                  <li>
                    <a href="/" className="link">
                      Liên hệ
                    </a>
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
          <a href="/" className="link">
            Sea Team
          </a>
        </div>
        <div>Cung cấp bởi Sapo</div>
      </div>
    </>
  );
};

export default Footer;
