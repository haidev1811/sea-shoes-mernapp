import React, { useEffect } from "react";
import Swiper from "swiper";
import InnerImageZoom from 'react-inner-image-zoom';
import image1 from "../../assets/images/1.jpg";
import image2 from "../../assets/images/2.jpg";
import image3 from "../../assets/images/3.jpg";
import image4 from "../../assets/images/4.jpg";
import payment from "../../assets/images/payment.png";
import bgProductCol from "../../assets/images/bg_product_col.jpg";

const ProductDetail = () => {
  useEffect(() => {
    new Swiper(".swiper-thumb", {
      slidesPerView: 3,
      spaceBetween: 30,
      breakpoints: {
        768: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    });
    new Swiper(".swiper-category-1", {
      slidesPerView: 2,
      spaceBetween: 30,
      navigation: {
        nextEl: " .next-big-1",
        prevEl: ".prev-big-1",
      },
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
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
    new Swiper(".swiper__product-1", {
      slidesPerView: 2,
      spaceBetween: 20,
      navigation: {
        nextEl: ".next-small-1",
        prevEl: ".prev-small-1",
      },
      breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
    });
  }, []);

  return (
    <>
      <div className="detail">
        <div className="container-ct">
          <div className="row-ct">
            <div className="detail__img col-ct">
              <div className="detail__img-main">
                <InnerImageZoom src={image1} zoomSrc={image1} height={550} zoomScale={3} zoomType="hover" zoomPreload={true} className="detail__img-main-img"/>
              </div>
              <div className="detail__img-thumb">
                <i className="fas fa-angle-left prev-big-img animate__animated animate__fadeInLeft"></i>
                <div className="swiper-container swiper-thumb">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <img src={image1} alt="" />
                    </div>
                    <div className="swiper-slide">
                      <img src={image2} alt="" />
                    </div>
                    <div className="swiper-slide">
                      <img src={image3} alt="" />
                    </div>
                    <div className="swiper-slide">
                      <img src={image4} alt="" />
                    </div>
                  </div>
                </div>
                <i className="fas fa-angle-right  next-big-img animate__animated animate__fadeInLeft"></i>
              </div>
            </div>
            <div className="detail__infor col-ct">
              <div className="detail__infor-head">Adidas White Stan Smith</div>
              <div className="detail__infor-branch">
                <div className="branch">
                  <span>Thương hiệu:</span>
                  <span>Adidas</span>
                </div>
                <div className="branch">
                  <span>Mã sản phẩm:</span>
                  <span>LTD123</span>
                </div>
              </div>
              <div className="detail__infor-describle">Mô tả đang cập nhật</div>
              <div className="detail__infor-price">2.500.000₫</div>
              <div className="detail__infor-size">
                <div className="size-head">Kích thước</div>
                <div className="size-list">
                  <input type="radio" name="size" checked />
                  <label>35</label>
                  <input type="radio" name="size" />
                  <label>36</label>
                  <input type="radio" name="size" />
                  <label>37</label>
                </div>
              </div>

              <div className="detail__infor-size detail__infor-color">
                <div className="size-head">Màu sắc</div>
                <div className="size-list">
                  <input type="radio" name="color" checked />
                  <label
                    id="white"
                    className="hint--top"
                    aria-label="Trắng!"
                  ></label>
                  <input type="radio" name="color" />
                  <label
                    id="black"
                    className="hint--top"
                    aria-label="Đen"
                  ></label>
                </div>
              </div>
              <div className="detail__infor-number">
                <div className="number-count">
                  <span className="num-decrease">
                    <i className="fas fa-minus"></i>
                  </span>
                  <input type="number" value="1" />
                  <span className="num-increase">
                    <i className="fas fa-plus"></i>
                  </span>
                </div>
                <div className="number-btn">
                  <a
                    href="/"
                    className="link"
                    data-toggle="modal"
                    data-target="#product-popup"
                  >
                    <i className="fas fa-shopping-basket"></i> Mua ngay
                  </a>
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
            <div className="tab__head-1 tab__head-select">
              Thông tin sản phẩm
            </div>
            <div className="tab__head-2">Chính sách bán hàng</div>
            <div className="tab__head-3">Đánh giá</div>
          </div>
          <div className="tab__content-1 animate__animated animate__fadeInUp">
            <h2>Adidas White Stan Smith</h2>
            <p>
              Adidas quay trở lại với bước đột phá hoàn toàn mới bằng một phiên
              bản nâng cao hơn .<br></br>Để tăng tuổi thọ của đôi giày, Adidas
              sử dụng da lộn cao cấp phía mũi giày và sau gót, giày Adidas trở
              nên chắc chắn hơn bao giờ hết. Bộ đế cao su lưu hóa mang đến cho
              bạn cảm giác choáng ngợp bởi sự chắc chắn khi đi giày.{" "}
            </p>
            <p>
              Hơn nữa với kiểu dáng hợp thời trang, màu sắc nhã nhặn bạn có thể
              đi bất cứ đâu, mặc trang phục gì đều khiến mình trở nên nổi bật và
              tự tin. Hẳn là một thiếu sót lớn khi trong tủ giày nhà bạn thiếu
              đi đôi giày Adidas .
            </p>
            <p>
              Hơn nữa với kiểu dáng hợp thời trang, màu sắc nhã nhặn bạn có thể
              đi bất cứ đâu, mặc trang phục gì đều khiến mình trở nên nổi bật và
              tự tin. Hẳn là một thiếu sót lớn khi trong tủ giày nhà bạn thiếu
              đi đôi giày Adidas .
            </p>
          </div>
          <div className="tab__content-2 animate__animated animate__fadeInUp">
            <p>Nội dung viết ở đây</p>
          </div>
          <div className="tab__content-3 animate__animated animate__fadeInUp">
            <div className="comment">
              <div className="news__comment">
                <div className="news__comment-head">Đánh giá sản phẩm</div>
                <div className="new__comment-form">
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
            </div>
            <div className="customer-ques">
              <div className="introduce-left__qa">
                <div className="question">
                  <div className="question-user">
                    <abbr title="Lai Tien Duc">LD</abbr>
                    <span>Lai Tien Duc</span>
                  </div>
                  <div className="question-ques">
                    <span className="question-ques__star">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </span>
                    <span className="question-ques__ques">
                      E co con laptop asus f555l i7. Muin nag cap ssd vs ram .
                      Ad tu van em sv. E la sinh vien kt eo hep
                    </span>
                  </div>
                  <div className="question-answer">
                    <div className="answer">Trả lời</div>
                    <div className="dot"></div>
                    <div className="time">2 ngày trước</div>
                  </div>
                </div>

                <div className="answers">
                  <div className="answers-admin">
                    <img src={image1} alt="" />
                    <span className="name">Tuanphong.vn</span>
                    <span className="position">Quản trị viên</span>
                  </div>
                  <div className="answers-comment">
                    Chào anh Dương,<br></br>
                    Laptop Dell Inspiron 14 3451 dùng được ổ{" "}
                    <a href="/" className="link">
                      Ổ cứng SSD 2.5-Inch
                    </a>
                    , anh có thể gọi Hotline bên em để được tư vấn những sản
                    phẩm phù hợp ạ:{" "}
                    <a href="/" className="phone link">
                      {" "}
                      0971 881 886
                    </a>
                    <br></br>
                    Thân gửi đến anh.
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
