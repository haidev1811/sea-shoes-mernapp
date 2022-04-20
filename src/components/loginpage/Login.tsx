import React from "react";
import fbBtn from "../../assets/images/fb-btn.svg";
import gpBtn from "../../assets/images/gp-btn.svg";

const Login = () => {
  return (
    <div className="signin col-ct">
      <div className="signin__head">Đăng nhập</div>
      <div className="signin__form">
        <form action="">
          <div className="form-item">
            <label htmlFor="">Email *</label>
            <input type="email" />
          </div>
          <div className="form-item">
            <label htmlFor="">Mật khẩu *</label>
            <input type="text" />
          </div>
          <div className="form-btn">
            <button type="submit">Đăng kí</button>
          </div>
          <div className="form-pw">
            <a href="/" className="form-pw-reset link">
              Quên mật khẩu
            </a>
          </div>
        </form>
      </div>
      <div className="signin__note">
        Chưa có tài khoản, đăng ký{" "}
        <a href="./signin.html" className="link">
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
      <div className="signin__pw">
        <form action="">
          <div className="form-item">
            <label htmlFor="">Email *</label>
            <input type="email" />
          </div>

          <div className="form-btn">
            <button type="submit">Lấy lại mật khẩu</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
