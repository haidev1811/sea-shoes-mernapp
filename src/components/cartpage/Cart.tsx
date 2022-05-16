import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getCart,
  deleteCartItem,
  updateQtyCartItem,
} from "../../redux/actions/order/cart.action";
import { cartsState } from "../../redux/reducers/order/cart.reducer";
import { RootState } from "../../redux/store";
import cartEmpty from "../../assets/images/cart-empty.png";

const Cart = () => {
  const [reload, setReload] = useState<boolean>(false);

  const dispatch = useDispatch();
  const carts = useSelector<RootState, cartsState>((state) => state.cart);
  const { cartInfo, isFetching } = carts;

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch, reload]);

  const deleteCartItemHandler = (id: any) => {
    dispatch(deleteCartItem(id));
    setReload(!reload);
  };

  const handleQuantity = (
    type: string,
    id: any,
    quantity: any,
    inStock: any
  ) => {
    if (type === "dec") {
      quantity > 1 && dispatch(updateQtyCartItem(id, quantity - 1));
    } else {
      quantity < inStock && dispatch(updateQtyCartItem(id, quantity + 1));
    }
    setReload(!reload);
  };

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
  const totalPriceItem = (price: any, discount: any, quantity: any) => {
    return toVND((price - price * (discount / 100)) * quantity);
  };

  const totalPrice = cartInfo?.reduce(
    (acc: any, item: any) =>
      acc + (item.price - item.price * (item.discount / 100)) * item.quantity,
    0
  );

  return (
    <>
      {cartInfo?.length > 0 ? (
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
                {isFetching ? (
                  <CircularProgress />
                ) : (
                  cartInfo?.map((cart, index) => (
                    <div className="clitem" key={cart._id}>
                      <div className="clitem__space"></div>
                      <div className="clitem__infor">
                        <div className="clitem__infor-img">
                          <Link to={`/product/${cart.slug}`} className="link">
                            <img src={cart.image} alt="" />
                          </Link>
                        </div>
                        <div className="clitem__infor-title">
                          <Link to={`/product/${cart.slug}`} className="link">
                            Puma Men Black Elsu V2
                          </Link>
                          <p>
                            <span>Giá: </span>
                            {priceDiscount(cart.price, cart.discount)}₫
                          </p>
                        </div>
                      </div>
                      <div className="clitem__number">
                        <div className="number-count">
                          <span
                            className="num-decrease cursor-pointer"
                            onClick={() =>
                              handleQuantity(
                                "dec",
                                cart._id,
                                cart.quantity,
                                cart.inStock
                              )
                            }
                          >
                            <i className="fas fa-minus"></i>
                          </span>
                          <input type="number" value={cart.quantity} />
                          <span
                            className="num-increase cursor-pointer"
                            onClick={() =>
                              handleQuantity(
                                "inc",
                                cart._id,
                                cart.quantity,
                                cart.inStock
                              )
                            }
                          >
                            <i className="fas fa-plus"></i>
                          </span>
                        </div>
                        <div className="number-remove">
                          <a href="/" className="link">
                            Xoá
                          </a>
                        </div>
                      </div>
                      <div className="clitem__price">
                        {totalPriceItem(
                          cart.price,
                          cart.discount,
                          cart.quantity
                        )}
                        ₫
                      </div>
                      <div className="clitem__remove">
                        <Link
                          to="#"
                          className="link"
                          onClick={() => deleteCartItemHandler(cart._id)}
                        >
                          <i className="fas fa-times"></i>
                        </Link>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
          <div className="total">
            <div className="container-ct">
              <div className="total-wrap1"></div>
              <div className="total-wrap">
                <div className="total__money">
                  Tổng tiền <span>{toVND(totalPrice)}₫</span>
                </div>
                <div className="total__btn">
                  <Link to="/product" className="link">
                    Tiếp tục mua hàng
                  </Link>
                  <Link to="/payment" className="link">
                    Tiến hành thanh toán
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="d-flex justify-content-center align-items-center pt-3">
          <div>
            <img src={cartEmpty} alt="" />
            <div className="total__btn d-flex justify-content-center">
              <Link to="/product" className="link">
                Tiếp tục mua hàng
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
