import React, { useEffect, useState } from "react";
import SwiperCore, { Navigation, Swiper } from "swiper/core";
import InnerImageZoom from "react-inner-image-zoom";
import parse from "html-react-parser";
import image1 from "../../assets/images/1.jpg";
import payment from "../../assets/images/payment.png";
import bgProductCol from "../../assets/images/bg_product_col.jpg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { authState } from "../../redux/reducers/auth/auth.reducer";
import { addToCart } from "../../redux/actions/order/cart.action";
import { ModalCart, ModalLogin } from "../../components";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";
import { sizes, colours } from "../../utils/datatablesource";
import { reviewsState } from "../../redux/reducers/product/review.reducer";
import {
  deleteReview,
  getReview,
  postReview,
  updateReview,
} from "../../redux/actions/product/review.action";
import { CircularProgress } from "@mui/material";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import axios from "../../utils/axios";
import { format } from "timeago.js";

interface Props {
  productInfo: any;
}

const ProductDetail = ({ productInfo }: Props) => {
  SwiperCore.use([Navigation]);
  useEffect(() => {
    new Swiper(".swiper-thumb", {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: `.next-big-img`,
        prevEl: `.prev-big-img`,
      },
      breakpoints: {
        768: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    });
  });

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

  const [reloadReview, setReloadReview] = useState<boolean>(false);
  const review = useSelector<RootState, reviewsState>((state) => state.review);
  const { reviewInfo, isFetching } = review;
  useEffect(() => {
    if (productInfo) {
      dispatch(getReview(productInfo?._id));
    }
  }, [dispatch, productInfo, reloadReview]);

  const [quantity, setQuantity] = useState<number>(1);
  const handleQuantity = (type: string, inStock: number) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      quantity < inStock && setQuantity(quantity + 1);
    }
  };

  const [toggleTab, setToggleTab] = useState<number>(0);
  const onChangeToggleTab = (val: number) => {
    setToggleTab(val);
  };

  const [imageZoom, setImageZoom] = useState<string>(productInfo?.image1);
  const [toggleImage, setToggleImage] = useState<number>(0);
  const onChangeToggleImage = (val: number) => {
    setToggleImage(val);
    switch (val) {
      case 0:
        setImageZoom(productInfo?.image1);
        break;
      case 1:
        setImageZoom(productInfo?.image2);
        break;
      case 2:
        setImageZoom(productInfo?.image3);
        break;
      case 3:
        setImageZoom(productInfo?.image4);
        break;
      case 4:
        setImageZoom(productInfo?.image5);
        break;
      default:
        setImageZoom(productInfo?.image1);
        break;
    }
  };

  const [openModal, setOpenModal] = useState<boolean>(false);

  const [size, setSize] = useState<string>("");
  const [colour, setColour] = useState<string>("");

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
        size,
        colour,
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

  const [toggleSize, setToggleSize] = useState<number>(0);
  const onToggleSize = (index: number, selectSize: string) => {
    setToggleSize(index);
    setSize(selectSize);
  };
  const [toggleColour, setToggleColour] = useState<number>(0);
  const onToggleColour = (index: number, selectColour: string) => {
    setToggleColour(index);
    setColour(selectColour);
  };

  const [comment, setComment] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [uploading, setUploading] = useState<boolean>(false);
  const uploadFileHandler = async (e: any) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post("/upload", formData, config);

      setImage(data.url);
      setUploading(false);
    } catch (error: any) {
      setUploading(false);
    }
  };

  const [idEdit, setIdEdit] = useState<string>("");
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const submitPostReview = async (e: any) => {
    e.preventDefault();
    if (!isEdit) {
      await dispatch(
        postReview({
          product: productInfo?._id,
          user: authInfo?.user?._id!,
          comment,
          image,
        })
      );
    } else {
      await dispatch(updateReview({ id: idEdit, comment, image }));
    }
    setReloadReview(!reloadReview);
    setIsEdit(false);
    setComment("");
    setImage("");
  };

  const onHandlerEdit = (review: any) => {
    setIsEdit(true);
    setComment(review.comment);
    setImage(review.image);
    setIdEdit(review._id);
  };

  const onHandlerDelete = async (id: any) => {
    await dispatch(deleteReview(id));
    setReloadReview(!reloadReview);
  };

  const sizeComponent = (
    <>
      <div className="size-list">
        {productInfo?.size?.map((item: any, index: any) =>
          sizes.map(
            (ite) =>
              ite.value === item && (
                <>
                  <input
                    type="radio"
                    name="size"
                    key={index}
                    onClick={() => onToggleSize(index, item)}
                    className={`${toggleSize === index ? "active" : ""}`}
                  />
                  <label>{item}</label>
                </>
              )
          )
        )}
      </div>
    </>
  );
  const colourComponent = (
    <>
      <div className="size-list">
        {productInfo?.colour?.map((item: any, index: any) =>
          colours.map(
            (ite) =>
              ite.value === item && (
                <>
                  <input
                    type="radio"
                    name="color"
                    key={index}
                    className={`${toggleColour === index ? "active" : ""}`}
                  />
                  <label
                    id={item}
                    className="hint--top"
                    onClick={() => onToggleColour(index, ite.name)}
                    aria-label={`${ite.name}!`}
                  ></label>
                </>
              )
          )
        )}
      </div>
    </>
  );

  return (
    <>
      <ModalCart openModal={openModal} setOpenModal={setOpenModal} />
      <div className="detail">
        <div className="container-ct">
          <div className="row-ct">
            <div className="detail__img col-ct">
              <div className="detail__img-main">
                <InnerImageZoom
                  src={imageZoom}
                  zoomSrc={imageZoom}
                  height={550}
                  zoomScale={3}
                  zoomType="hover"
                  zoomPreload={true}
                  className="detail__img-main-img"
                />
              </div>
              <div className="detail__img-thumb">
                <i className="fas fa-angle-left prev-big-img animate__animated animate__fadeInLeft"></i>
                <div className="swiper-container swiper-thumb">
                  <div className="swiper-wrapper">
                    <div
                      className="swiper-slide"
                      onClick={() => onChangeToggleImage(0)}
                    >
                      <img
                        src={productInfo?.image1}
                        alt=""
                        className={`${toggleImage === 0 ? "active" : ""}`}
                      />
                    </div>
                    <div
                      className="swiper-slide"
                      onClick={() => onChangeToggleImage(1)}
                    >
                      <img
                        src={productInfo?.image2}
                        alt=""
                        className={`${toggleImage === 1 ? "active" : ""}`}
                      />
                    </div>
                    <div
                      className="swiper-slide"
                      onClick={() => onChangeToggleImage(2)}
                    >
                      <img
                        src={productInfo?.image3}
                        alt=""
                        className={`${toggleImage === 2 ? "active" : ""}`}
                      />
                    </div>
                    <div
                      className="swiper-slide"
                      onClick={() => onChangeToggleImage(3)}
                    >
                      <img
                        src={productInfo?.image4}
                        alt=""
                        className={`${toggleImage === 3 ? "active" : ""}`}
                      />
                    </div>
                    <div
                      className="swiper-slide"
                      onClick={() => onChangeToggleImage(4)}
                    >
                      <img
                        src={productInfo?.image5}
                        alt=""
                        className={`${toggleImage === 4 ? "active" : ""}`}
                      />
                    </div>
                  </div>
                </div>
                <i className="fas fa-angle-right  next-big-img animate__animated animate__fadeInLeft"></i>
              </div>
            </div>
            <div className="detail__infor col-ct">
              <div className="detail__infor-head">{productInfo?.name}</div>
              <div className="detail__infor-branch">
                <div className="branch">
                  <span>Thương hiệu:</span>
                  <span>{productInfo?.brand}</span>
                </div>
                <div className="branch">
                  <span>Mã sản phẩm:</span>
                  <span>LTD123</span>
                </div>
              </div>
              <div className="detail__infor-describle">
                <p>Mô tả đang cập nhật</p>
                <p>
                  Đã bán: {productInfo?.sold > 0 ? productInfo?.sold : 0} sản
                  phẩm
                </p>
                <p>Kho: {productInfo?.inStock} sản phẩm</p>
              </div>
              <div className="detail__infor-price">
                <span className="price--new">
                  {priceDiscount(productInfo?.price, productInfo?.discount)}₫
                </span>
                <span
                  className={`price--old ${
                    productInfo?.discount === 0 ? "d-none" : ""
                  }`}
                >
                  {toVND(productInfo?.price)}₫
                </span>
              </div>
              <div className="detail__infor-size">
                <div className="size-head">Kích thước</div>
                {sizeComponent}
              </div>

              <div className="detail__infor-size detail__infor-color">
                <div className="size-head">Màu sắc</div>
                {colourComponent}
              </div>
              <div className="detail__infor-number">
                <div className="number-count">
                  <span
                    className="num-decrease"
                    onClick={() => handleQuantity("dec", productInfo?.inStock)}
                  >
                    <i className="fas fa-minus"></i>
                  </span>
                  <input type="number" value={quantity} />
                  <span
                    className="num-increase"
                    onClick={() => handleQuantity("inc", productInfo?.inStock)}
                  >
                    <i className="fas fa-plus"></i>
                  </span>
                </div>
                <div className="number-btn">
                  {!checkUser ? (
                    <Popup
                      trigger={
                        <Link to="#" className="link">
                          <i className="fas fa-shopping-basket"></i> Mua ngay
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
                          productInfo?._id,
                          productInfo?.name,
                          productInfo?.image1,
                          productInfo?.price,
                          productInfo?.discount,
                          productInfo?.inStock,
                          quantity
                        )
                      }
                      className={`link ${
                        productInfo?.inStock === 0 ? "disable" : ""
                      }`}
                    >
                      <i className="fas fa-shopping-basket"></i> Mua ngay
                    </Link>
                  )}
                </div>
              </div>
              <div className="detail__infor-hotline">
                <div className="hotline-number">
                  <span>Tư vấn</span>
                  <a href="/" className="link">
                    0123456789
                  </a>
                </div>
                <div className="hotline-pay">
                  <img src={payment} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="banner">
        <div className="container-ct">
          <img src={bgProductCol} alt="" />
        </div>
      </div>
      <div className="tab">
        <div className="container-ct">
          <div className="tab__head">
            <div
              className={`tab__head-1 ${
                toggleTab === 0 ? "tab__head-select" : ""
              } `}
              onClick={() => onChangeToggleTab(0)}
            >
              Thông tin sản phẩm
            </div>
            <div
              className={`tab__head-2 ${
                toggleTab === 1 ? "tab__head-select" : ""
              } `}
              onClick={() => onChangeToggleTab(1)}
            >
              Chính sách bán hàng
            </div>
            <div
              className={`tab__head-3 ${
                toggleTab === 2 ? "tab__head-select" : ""
              } `}
              onClick={() => onChangeToggleTab(2)}
            >
              Đánh giá
            </div>
          </div>
          <div
            className={`tab__content-1 animate__animated animate__fadeInUp ${
              toggleTab === 0 ? "active" : ""
            }`}
          >
            <h2>{productInfo?.name}</h2>
            {parse(`${productInfo?.description}`)}
          </div>
          <div
            className={`tab__content-2 animate__animated animate__fadeInUp ${
              toggleTab === 1 ? "active" : ""
            }`}
          >
            <p>Nội dung viết ở đây</p>
          </div>
          <div
            className={`tab__content-3 animate__animated animate__fadeInUp ${
              toggleTab === 2 ? "active" : ""
            }`}
          >
            <div className="comment">
              <div className="news__comment">
                <div className="news__comment-head">Đánh giá sản phẩm</div>
                <div className="new__comment-form">
                  <form className="form" onSubmit={submitPostReview}>
                    <div className="form-item">
                      <label>
                        Nội dung <span>*</span>
                      </label>
                      <textarea
                        cols={30}
                        rows={10}
                        placeholder="Nội dung bình luận"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                      ></textarea>
                      <div className="d-flex">
                        <label htmlFor="file">
                          <DriveFolderUploadOutlinedIcon className="icon" />
                        </label>
                        <input
                          type="file"
                          id="file"
                          onChange={uploadFileHandler}
                          style={{ display: "none" }}
                        />
                        {uploading ? <CircularProgress size="1rem" /> : <></>}
                        {image && (
                          <img src={image} className="img-upload" alt="" />
                        )}
                      </div>
                    </div>
                    <div className="form-btn">
                      <button>Gửi bình luận</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="customer-ques">
              {isFetching ? (
                <CircularProgress />
              ) : (
                reviewInfo?.map((review, index) => (
                  <div className="introduce-left__qa" key={index}>
                    <div className="question">
                      <div className="question-user">
                        <img
                          src={review.user.avatar}
                          alt=""
                          className="img-avatar"
                        />
                        <span>{`${review.user.firstname} ${review.user.lastname}`}</span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="question-ques">
                          <span className="question-ques__star">
                            <i className="fas fa-star mr-1"></i>
                            <i className="fas fa-star mr-1"></i>
                            <i className="fas fa-star mr-1"></i>
                            <i className="fas fa-star mr-1"></i>
                            <i className="fas fa-star mr-1"></i>
                          </span>
                          <p
                            className={`question-ques__ques ${
                              review.comment === "" ? "d-none" : ""
                            }`}
                          >
                            {review.comment}
                          </p>
                          <img
                            src={review.image}
                            alt=""
                            className={`img-comment ${
                              review.image === "" ? "d-none" : ""
                            }`}
                          />
                        </div>
                        <div className="question-action">
                          <MoreVertIcon className="icon" />
                          <div className="question-action-list">
                            <div
                              className="question-action-item"
                              onClick={() => onHandlerEdit(review)}
                            >
                              Sửa
                            </div>
                            <div
                              className="question-action-item"
                              onClick={() => onHandlerDelete(review._id)}
                            >
                              Xóa
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="question-answer">
                        <div className="answer">Đã bình luận</div>
                        <div className="dot"></div>
                        <div className="time">
                          {format(review?.createdAt, "vi_VN")}
                        </div>
                      </div>
                    </div>

                    <div className="answers">
                      <div className="answers-admin">
                        <img src={image1} alt="" />
                        <span className="name">Seateam.vn</span>
                        <span className="position">Quản trị viên</span>
                      </div>
                      <div className="answers-comment">
                        Chào {review.user.firstname} {review.user.lastname},
                        <br></br>
                        Cảm ơn những phản hồi tích cực từ phía bạn, rất mong bạn
                        sẽ tiếp tực mua hàng trong lần tới. Anh có thể gọi
                        Hotline bên em để được tư vấn những sản phẩm phù hợp ạ:{" "}
                        <a href="/" className="phone link">
                          {" "}
                          0345 873 321
                        </a>
                        <br></br>
                        Thân gửi đến bạn.
                      </div>
                      <div className="question-answer">
                        <div className="answer">Trả lời</div>
                        <div className="dot"></div>
                        <div className="time">2 ngày trước</div>
                      </div>
                    </div>
                    <div className="introduce-left__evaluate question-admin-1">
                      <form action="" className="form">
                        <div className="form-item">
                          <label>
                            Nội dung <span>*</span>
                          </label>
                          <textarea cols={30} rows={10}>
                            Nội dung liên hệ
                          </textarea>
                        </div>
                        <div className="form-top">
                          <div className="form-item">
                            <label>
                              Họ tên <span>*</span>
                            </label>
                            <input type="text" placeholder="Họ tên" />
                          </div>
                          <div className="form-item">
                            <label>
                              Email <span>*</span>
                            </label>
                            <input type="email" placeholder="Email" />
                          </div>
                        </div>
                        <div className="form-btn">
                          <button>Gửi bình luận</button>
                        </div>
                      </form>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
