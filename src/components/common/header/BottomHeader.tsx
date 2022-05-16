import React, { useEffect, useState } from "react";
import $ from "jquery";
import { CustomLink } from "../../index";
import logo from "../../../assets/images/logo.png";
import shoppingBar from "../../../assets/images/shopping-bag.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { categoriesState } from "../../../redux/reducers/product/category.reducer";
import { getListCategory } from "../../../redux/actions/product/category.action";
import { CircularProgress } from "@mui/material";
import { brandsState } from "../../../redux/reducers/product/brand.reducer";
import { getListBrand } from "../../../redux/actions/product/brand.action";
import { cartsState } from "../../../redux/reducers/order/cart.reducer";
import {
  deleteCartItem,
  getCart,
  updateQtyCartItem,
} from "../../../redux/actions/order/cart.action";

const BottomHeader = () => {
  const [reload, setReload] = useState<boolean>(false);

  const dispatch = useDispatch();
  const listCategory = useSelector<RootState, categoriesState>(
    (state) => state.listCategory
  );
  const { categoryInfo, isFetching: categoryIsFetching } = listCategory;
  const listBrand = useSelector<RootState, brandsState>(
    (state) => state.listBrand
  );
  const { brandInfo, isFetching: brandIsFetching } = listBrand;

  useEffect(() => {
    dispatch(getListCategory());
    dispatch(getListBrand());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch, reload]);

  const deleteCartItemHandler = (id: any) => {
    dispatch(deleteCartItem(id));
    setReload(!reload);
  };

  useEffect(() => {
    $(".nlmenu__item .fa-plus").on("click", function () {
      $(this).parent().next().slideDown();
      $(this).hide();
      $(this).next().show();
    });
    $(".nlmenu__item .fa-minus").on("click", function () {
      $(this).parent().next().slideUp();
      $(this).hide();
      $(this).prev().show();
    });
    $(".menu .wrap").on("click", function () {
      $(".navbars").css("left", "-280px");
      $(".menu").css("visibility", "hidden");
      $(".swiper-pagination").css("z-index", "10");
    });
    $(".nlmenu__item a").on("click", function () {
      $(".navbars").css("left", "-280px");
      $(".menu").css("visibility", "hidden");
      $(".swiper-pagination").css("z-index", "10");
    });
    $(".header__icon i").on("click", function () {
      $(".navbars").css("left", "0");
      $(".swiper-pagination").css("z-index", 0);
      $(".menu").css("visibility", "visible");
    });
  });

  const carts = useSelector<RootState, cartsState>((state) => state.cart);
  const { cartInfo } = carts;

  const handleQuantity = (type: string, id: any, quantity: any) => {
    if (type === "dec") {
      quantity > 1 && dispatch(updateQtyCartItem(id, quantity - 1));
    } else {
      dispatch(updateQtyCartItem(id, quantity + 1));
    }
    setReload(!reload);
  };

  const indexProducts = cartInfo?.reduce(
    (acc: any, item: any) => acc + item.quantity,
    0
  );

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

  const totalPrice = cartInfo?.reduce(
    (acc: any, item: any) =>
      acc + (item.price - item.price * (item.discount / 100)) * item.quantity,
    0
  );

  const [searchName, setSearchName] = useState<string>("");

  const quantityOnChange = () => {
    console.log();
  };

  const popupMenu = (
    <>
      <i className="fas fa-sort-down"></i>
      <ul className="mlist__item-submenu">
        {categoryIsFetching ? (
          <CircularProgress />
        ) : (
          <>
            {categoryInfo?.map((item, index) => (
              <li key={index}>
                <Link to={`/product?category=${item.name}`} className="link">
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="submlist">
              <Link
                to="/product"
                className="link d-flex justify-content-between align-items-center"
              >
                Thương hiệu<i className="fas fa-caret-right"></i>
              </Link>
              <ul className="submlist__item-submenu">
                {brandIsFetching ? (
                  <CircularProgress />
                ) : (
                  brandInfo?.map((item, index) => (
                    <li key={index}>
                      <Link to={`/product?brand=${item.name}`} className="link">
                        {item.name}
                      </Link>
                    </li>
                  ))
                )}
              </ul>
            </li>
          </>
        )}
      </ul>
    </>
  );
  const labelPopup = (
    <>
      Sản phẩm <i className="fas fa-sort-down"></i>
    </>
  );

  return (
    <div className="header">
      <div className="container-ct">
        <div className="row-ct">
          <div className="header__icon col-ct">
            <i className="fas fa-bars"></i>
          </div>
          <div className="header__img col-ct">
            <Link to="/" className="link">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="header__menu col-ct">
            <ul className="header__menu-list">
              <CustomLink to="/" label="Trang chủ" activeOnlyWhenExact={true} />
              <CustomLink
                to="/about"
                label="Giới thiệu"
                activeOnlyWhenExact={false}
              />
              <CustomLink
                to="/product"
                label={labelPopup}
                props={popupMenu}
                activeOnlyWhenExact={false}
              />
              <CustomLink
                to="/news"
                label="Tin tức"
                activeOnlyWhenExact={false}
              />
              <CustomLink
                to="/contact"
                label="Liên hệ"
                activeOnlyWhenExact={false}
              />
            </ul>
          </div>
          <div className="header__act col-ct">
            <div className="header__act-search">
              <i className="fas fa-search"></i>
              <div className="hsearch">
                <input
                  type="text"
                  placeholder="Tìm kiếm..."
                  value={searchName}
                  onChange={(e) => setSearchName(e.target.value)}
                />
                <Link to={`/search?name=${searchName}`} className="link">
                  <i className="fas fa-search"></i>
                </Link>
              </div>
            </div>
            <div className="header__act-cart">
              <Link
                to="/cart"
                className="cart-icon link"
                onMouseDown={() => setReload(!reload)}
              >
                <img src={shoppingBar} alt="" />
                <span className="total-product">
                  {indexProducts > 0 ? indexProducts : 0}
                </span>
              </Link>
              <div className="cart-drop">
                {cartInfo && cartInfo.length > 0 ? (
                  <>
                    <div className="cart__list">
                      {cartInfo?.map((cart, index) => (
                        <div className="cart__list-item" key={index}>
                          <div className="clitem__img">
                            <Link to={`/product/${cart.slug}`} className="link">
                              <img src={cart.image} alt="" />
                            </Link>
                          </div>
                          <div className="clitem__infor-nav">
                            <div className="clitem__infor-head">
                              <Link
                                to={`/product/${cart.slug}`}
                                title={cart.name}
                                className="link"
                              >
                                {cart.name}
                              </Link>
                            </div>
                            <div className="clitem__infor-price">
                              {priceDiscount(cart.price, cart.discount)}₫
                            </div>
                            <div className="clitem__infor-number">
                              <span
                                className="num-decrease"
                                onClick={() =>
                                  handleQuantity("dec", cart._id, cart.quantity)
                                }
                              >
                                -
                              </span>
                              <input
                                type="number"
                                value={cart.quantity}
                                onChange={quantityOnChange}
                              />
                              <span
                                className="num-increase"
                                onClick={() =>
                                  handleQuantity("inc", cart._id, cart.quantity)
                                }
                              >
                                +
                              </span>
                            </div>
                          </div>
                          <i
                            className="fas fa-times"
                            onClick={() => deleteCartItemHandler(cart._id)}
                          ></i>
                        </div>
                      ))}
                    </div>
                    <div className="cart__total">
                      <span>Tổng cộng</span>
                      <span className="cart__total-money">
                        {toVND(totalPrice)}₫
                      </span>
                    </div>
                    <div className="cart__btn">
                      <Link to="/cart" className="cart__btn-cart link">
                        Giỏ hàng
                      </Link>
                      <Link to="/payment" className="cart__btn-pay link">
                        Thanh toán
                      </Link>
                    </div>
                  </>
                ) : (
                  <p className="mb-0">Không có sản phẩm nào</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomHeader;
