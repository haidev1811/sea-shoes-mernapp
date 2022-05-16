import React, { useEffect, useState } from "react";
import SwiperCore, { Navigation, Swiper } from "swiper/core";
import Category from "./Category";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { productFilterState } from "../../redux/reducers/product/product.reducer";
import useQuery from "../../hooks/useQuery";
import { getProductFilter } from "../../redux/actions/product/product.action";
import { CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import { authState } from "../../redux/reducers/auth/auth.reducer";
import { addToCart } from "../../redux/actions/order/cart.action";
import { ModalCart, ModalLogin } from "../../components";
import Popup from "reactjs-popup";

const ListProduct = () => {
  const dispatch = useDispatch();
  const listProduct = useSelector<RootState, productFilterState>(
    (state) => state.listProductFilter
  );
  const { productInfo, isFetching } = listProduct;

  const [checkUser, setCheckUser] = useState<boolean>(false);
  const authLogin = useSelector<RootState, authState>(
    (state) => state.authLogin
  );
  const { authInfo } = authLogin;
  useEffect(() => {
    if (authInfo) {
      setCheckUser(true);
    }
  }, [authInfo]);

  const query = useQuery();
  let category = query.get("category") !== null ? query.get("category") : "";
  let brand = query.get("brand") !== null ? query.get("brand") : "";
  let type = query.get("type") !== null ? query.get("type") : "";
  let colour = query.get("colour") !== null ? query.get("colour") : "";
  let size = query.get("size") !== null ? query.get("size") : "";
  let sort = query.get("sort") !== null ? query.get("sort") : "";
  let pageNumber = query.get("page") !== null ? query.get("page") : "";

  const getFilterUrl = (filter: any) => {
    const filterCategory = filter.category || category;
    const filterBrand = filter.brand || brand;
    const filterType = filter.type || type;
    const filterColour = filter.colour || colour;
    const filterSize = filter.size || size;
    const filterSort = filter.sort || sort;
    const filterPage = filter.page || pageNumber;

    return `/product?category=${filterCategory}&brand=${filterBrand}&type=${filterType}&colour=${filterColour}&size=${filterSize}&sort=${filterSort}&page=${filterPage}`;
  };

  useEffect(() => {
    dispatch(
      getProductFilter({
        category,
        brand,
        type,
        colour,
        size,
        sort,
        pageNumber,
      })
    );
  }, [dispatch, category, brand, type, colour, size, sort, pageNumber]);

  SwiperCore.use([Navigation]);
  useEffect(() => {
    for (let i = 0; i <= productInfo?.products?.length!; i++) {
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
  });

  const [openModal, setOpenModal] = useState<boolean>(false);

  const addToCartHandler = async (
    productId: any,
    name: any,
    image: any,
    price: any,
    discount: any,
    inStock: any,
    quantity: any
  ) => {
    await dispatch(
      addToCart({
        productId,
        name,
        image,
        price,
        discount,
        inStock,
        quantity,
      })
    );
    setOpenModal(!openModal);
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

  return (
    <>
      <ModalCart openModal={openModal} setOpenModal={setOpenModal} />
      <div className="category-icon">
        <i className="fas fa-align-right"></i>
        <i className="fas fa-times"></i>
      </div>
      <div className="category">
        <div className="container-ct">
          <Category getFilterUrl={getFilterUrl} />
          <div className="category__list-product col-ct">
            {isFetching ? (
              <CircularProgress />
            ) : (
              productInfo?.products?.map((product, index) => (
                <div className="swiper-slide product" key={index}>
                  <div className="product__img">
                    <span
                      className={`product__img-promotion ${
                        product.discount === 0 ? "d-none" : ""
                      }`}
                    >
                      -{product.discount}%
                    </span>
                    <Link
                      to={`/product/${product.slug}`}
                      className="product__img-img link"
                    >
                      <img src={product.image1} alt="" />
                    </Link>
                    {!checkUser ? (
                      <Popup
                        trigger={
                          <Link to="#" className="product__img-btn link">
                            Mua ngay
                          </Link>
                        }
                        modal
                        nested
                      >
                        {(
                          close:
                            | React.MouseEventHandler<HTMLButtonElement>
                            | undefined
                        ) => <ModalLogin close={close} />}
                      </Popup>
                    ) : (
                      <Link
                        to="#"
                        onClick={() =>
                          addToCartHandler(
                            product._id,
                            product.name,
                            product.image1,
                            product.price,
                            product.discount,
                            product.inStock,
                            1
                          )
                        }
                        className="product__img-btn link"
                      >
                        Mua ngay
                      </Link>
                    )}
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
                        to={getFilterUrl({ brand: product.brand })}
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
              ))
            )}
          </div>
          <div className="category__pagination">
            <ul>
              {[...(Array(productInfo?.pages).keys() as any)].map((x) => (
                <li
                  className={`${
                    x + 1 === productInfo?.page ? "paginaton--select" : ""
                  }`}
                  key={x + 1}
                >
                  <Link to={getFilterUrl({ page: x + 1 })} className="link">
                    {x + 1}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListProduct;
