import React, { useEffect, useState } from "react";
import Swiper from "swiper";
import axios from "../../utils/axios";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import { productFilterInfo } from "../../redux/reducers/product/product.reducer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { authState } from "../../redux/reducers/auth/auth.reducer";
import { addToCart } from "../../redux/actions/order/cart.action";
import { ModalCart, ModalLogin } from "../../components";

const ListProduct = () => {
  useEffect(() => {
    new Swiper(".swiper-list", {
      slidesPerView: 2,
      spaceBetween: 30,
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 6,
          spaceBetween: 30,
        },
      },
    });
  });

  const [openModal, setOpenModal] = useState<boolean>(false);

  const dispatch = useDispatch();

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

  const [products, setProducts] = useState<productFilterInfo>();

  useEffect(() => {
    const getListNewProduct = async () => {
      try {
        const result = await axios.get("/product/list?sort=4");

        setProducts(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    getListNewProduct();
  }, []);

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
    <div className="list">
      <ModalCart openModal={openModal} setOpenModal={setOpenModal} />
      <div className="swipter-container swiper-list">
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
    </div>
  );
};

export default ListProduct;
