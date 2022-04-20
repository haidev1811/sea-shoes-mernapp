import React from "react";
import image1 from "../../assets/images/1.jpg";
import image2 from "../../assets/images/2.jpg";
import image3 from "../../assets/images/3.jpg";

const Cart = () => {
  return (
    <>
      <div className="cart">
        <div className="container-ct">
          <div className="cart__head">
            <div className="cart__head-0"></div>
            <div className="cart__head-1">Sản phẩm</div>
            <div className="cart__head-2">Số lượng</div>
            <div className="cart__head-3">Tổng tiền</div>
            <div className="cart__head-4">Xoá</div>
          </div>
          <div className="cart__list">
            <div className="clitem">
              <div className="clitem__space"></div>
              <div className="clitem__infor">
                <div className="clitem__infor-img">
                  <a href="/" className="link">
                    <img src={image1} alt="" />
                  </a>
                </div>
                <div className="clitem__infor-title">
                  <a href="/" className="link">
                    Puma Men Black Elsu V2
                  </a>
                  <p>
                    <span>Giá: </span>1.500.000₫
                  </p>
                </div>
              </div>
              <div className="clitem__number">
                <div className="number-count">
                  <span className="num-decrease">
                    <i className="fas fa-minus"></i>
                  </span>
                  <input type="number" value="1" />
                  <span className="num-increase">
                    <i className="fas fa-plus"></i>
                  </span>
                </div>
                <div className="number-remove">
                  <a href="/" className="link">
                    Xoá
                  </a>
                </div>
              </div>
              <div className="clitem__price">1.500.000₫</div>
              <div className="clitem__remove">
                <a href="/" className="link">
                  <i className="fas fa-times"></i>
                </a>
              </div>
            </div>
            <div className="clitem">
              <div className="clitem__space"></div>
              <div className="clitem__infor">
                <div className="clitem__infor-img">
                  <a href="/" className="link">
                    <img src={image2} alt="" />
                  </a>
                </div>
                <div className="clitem__infor-title">
                  <a href="/" className="link">
                    Puma Men Black Elsu V2
                  </a>
                  <p>
                    <span>Giá: </span>1.500.000₫
                  </p>
                </div>
              </div>
              <div className="clitem__number">
                <div className="number-count">
                  <span className="num-decrease">
                    <i className="fas fa-minus"></i>
                  </span>
                  <input type="number" value="1" />
                  <span className="num-increase">
                    <i className="fas fa-plus"></i>
                  </span>
                </div>
                <div className="number-remove">
                  <a href="/" className="link">
                    Xoá
                  </a>
                </div>
              </div>
              <div className="clitem__price">1.500.000₫</div>
              <div className="clitem__remove">
                <a href="/" className="link">
                  <i className="fas fa-times"></i>
                </a>
              </div>
            </div>
            <div className="clitem">
              <div className="clitem__space"></div>
              <div className="clitem__infor">
                <div className="clitem__infor-img">
                  <a href="/" className="link">
                    <img src={image3} alt="" />
                  </a>
                </div>
                <div className="clitem__infor-title">
                  <a href="/" className="link">
                    Puma Men Black Elsu V2
                  </a>
                  <p>
                    <span>Giá: </span>1.500.000₫
                  </p>
                </div>
              </div>
              <div className="clitem__number">
                <div className="number-count">
                  <span className="num-decrease">
                    <i className="fas fa-minus"></i>
                  </span>
                  <input type="number" value="1" />
                  <span className="num-increase">
                    <i className="fas fa-plus"></i>
                  </span>
                </div>
                <div className="number-remove">
                  <a href="/" className="link">
                    Xoá
                  </a>
                </div>
              </div>
              <div className="clitem__price">1.500.000₫</div>
              <div className="clitem__remove">
                <a href="/" className="link">
                  <i className="fas fa-times"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="total">
        <div className="container-ct">
          <div className="total-wrap1"></div>
          <div className="total-wrap">
            <div className="total__money">
              Tổng tiền <span>15.400.000₫</span>
            </div>
            <div className="total__btn">
              <a href="./category.html" className="link">
                Tiếp tục mua hàng
              </a>
              <a href="./payment.html" className="link">
                Tiến hành thanh toán
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
