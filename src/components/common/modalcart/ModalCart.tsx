import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";
import { getCart } from "../../../redux/actions/order/cart.action";
import {
  cartsState,
  cartState,
} from "../../../redux/reducers/order/cart.reducer";
import { RootState } from "../../../redux/store";

interface Props {
  openModal?: boolean;
  setOpenModal?: any;
}

const ModalCart = ({ openModal, setOpenModal }: Props) => {
  const dispatch = useDispatch();
  const cart = useSelector<RootState, cartState>((state) => state.addCart);
  const { cartInfo } = cart;

  const carts = useSelector<RootState, cartsState>((state) => state.cart);
  const { cartInfo: cartsInfo } = carts;

  const indexProducts = cartsInfo?.reduce(
    (acc: any, item: any) => acc + item.quantity,
    0
  );

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch, openModal]);

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

  const totalPrice = cartsInfo?.reduce(
    (acc: any, item: any) =>
      acc + (item.price - item.price * (item.discount / 100)) * item.quantity,
    0
  );

  return (
    <Popup open={openModal}>
      <div
        className="modal active"
        id="product-popup"
        role="dialog"
        onClick={() => setOpenModal(false)}
      >
        <div className="popup" role="document">
          <div className="modal-content">
            <div className="popup__infor">
              <div className="popup__infor-img">
                <div className="popup__head-left">
                  <i className="fas fa-check"></i>Bạn vừa thêm sản phẩm vào giỏ
                  hàng
                </div>
                <img src={cartInfo?.image} alt="" />
                <span>{cartInfo?.name}</span>
                <p>{priceDiscount(cartInfo?.price, cartInfo?.discount)}đ</p>
              </div>
              <div className="popup__infor-price">
                <div className="popup__head-left">
                  <i className="fas fa-shopping-basket"></i>Giỏ hàng của bạn có{" "}
                  <span>{indexProducts}</span> sản phẩm
                </div>
                <div className="price-title">Tổng tiền</div>
                <div className="price-price">{toVND(totalPrice)}đ</div>
                <div className="price-btn">
                  <Link
                    to="/cart"
                    className="link"
                    onClick={() => setOpenModal(false)}
                  >
                    <i className="fas fa-shopping-basket"></i>
                    Tới giỏ hảng
                  </Link>
                </div>
              </div>
            </div>
            <i
              className="fas fa-times close"
              onClick={() => setOpenModal(false)}
            ></i>
          </div>
        </div>
      </div>
    </Popup>
  );
};

export default ModalCart;
