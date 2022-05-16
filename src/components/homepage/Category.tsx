import React, { useEffect, useState } from "react";
import SwiperCore, { Navigation, Swiper } from "swiper/core";
import axios from "../../utils/axios";
import { productFilterInfo } from "../../redux/reducers/product/product.reducer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { authState } from "../../redux/reducers/auth/auth.reducer";
import Popup from "reactjs-popup";
import ModalLogin from "../common/modallogin/ModalLogin";
import { addToCart } from "../../redux/actions/order/cart.action";
import ModalCart from "../common/modalcart/ModalCart";

interface Props {
  type?: string;
  idCat?: number;
}

const Category = ({ type, idCat }: Props) => {
  const [products, setProducts] = useState<productFilterInfo>();

  useEffect(() => {
    const getListNewProduct = async () => {
      try {
        const result = await axios.get(`/product/list?type=${type}`);

        setProducts(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    getListNewProduct();
  }, [type]);

  SwiperCore.use([Navigation]);
  useEffect(() => {
    new Swiper(`.swiper-category-${idCat}`, {
      slidesPerView: 2,
      spaceBetween: 30,
      navigation: {
        nextEl: `.next-big-${idCat}`,
        prevEl: `.prev-big-${idCat}`,
      },
      breakpoints: {
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
    for (let i = 0; i < products?.products?.length!; i++) {
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

  const dispatch = useDispatch();

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
    <div
      className={`category ${
        type === "women"
          ? "category-woman"
          : type === "men"
          ? "category-man"
          : "category-kid"
      }`}
    >
      <ModalCart openModal={openModal} setOpenModal={setOpenModal} />
      <div className="container-ct">
        <div className="row">
          <div className="category__name col-ct">
            <div className="category__name-img">
              <div className="category__name-head">
                <Link to={`/product?type=${type}`} className="link">
                  {type === "women"
                    ? "Cho nữ"
                    : type === "men"
                    ? "Cho nam"
                    : "Trẻ em"}
                </Link>
                <span>
                  Cung cấp những sản phẩm<br></br>
                  bộ sưu tập mới nhất<br></br>
                  cho bạn
                </span>
              </div>
              <div className="category__name-btn">
                <Link to={`/product?type=${type}`} className="link">
                  Xem thêm
                </Link>
              </div>
            </div>
          </div>
          <div className="category__list col-ct">
            <i
              className={`fas fa-angle-left prev-big prev-big-${idCat} animate__animated animate__fadeInLeft`}
            ></i>
            <div className={`swiper-container swiper-category-${idCat}`}>
              <div className="swiper-wrapper">
                {products?.products?.map((product, index) => (
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
                      <i
                        className={`fas fa-angle-left prev-small-${index}`}
                      ></i>
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
                      <i
                        className={`fas fa-angle-right next-small-${index}`}
                      ></i>
                    </div>
                    <div className="product__infor">
                      <div className="product__infor-title">
                        <Link to={`/product/${product.slug}`} className="link">
                          {product.name}
                        </Link>
                      </div>
                      <div className="product__infor-branch">
                        <Link to={`/product/${product.brand}`} className="link">
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
                ))}
              </div>
            </div>
            <i
              className={`fas fa-angle-right next-big next-big-${idCat} animate__animated animate__fadeInRight`}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
