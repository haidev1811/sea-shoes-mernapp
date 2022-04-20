import React from "react";
import fbBtn from "../../assets/images/fb-btn.svg";
import gpBtn from "../../assets/images/gp-btn.svg";

const Signup = () => {
  return (
    <div className="signin col-ct">
      <div className="signin__head">Đăng ký</div>
      <div className="signin__form">
        <form action="" className="form">
          <div className="form-item">
            <label htmlFor="">Họ *</label>
            <input type="text" placeholder="Họ" />
          </div>
          <div className="form-item">
            <label htmlFor="">Tên *</label>
            <input type="text" placeholder="Tên" />
          </div>
          <div className="form-item">
            <label htmlFor="">Email *</label>
            <input type="email" placeholder="Email" />
          </div>
          <div className="form-item">
            <label htmlFor="">Số điện thoại *</label>
            <input type="text" placeholder="Số điện thoại" />
          </div>
          <div className="form-item">
            <label htmlFor="">Mật khẩu *</label>
            <input type="text" placeholder="Mật khẩu" />
          </div>
          <div className="form-btn">
            <button type="submit">Đăng kí</button>
          </div>
        </form>
      </div>
      <div className="signin__note">
        Đã có tài khoản, đăng nhập{" "}
        <a href="./login.html" className="link">
          tại đây
        </a>
      </div>
      <div className="signin__social">
        <span>Hoặc đăng nhập tại đây</span>
        <div className="signin__social-link">
          <a href="/" className="link">
            <img src={fbBtn} alt="" />
          </a>
          <a href="/" className="link">
            <img src={gpBtn} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
