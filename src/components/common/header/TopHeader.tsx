import React from "react";

const TopHeader = () => {
  return (
    <div className="topheader">
      <div className="container-ct">
        <div className="row-ct">
          <div className="topheader__contact col-ct">
            <a href="/" className="link">
              seateam2512@gmail.com
            </a>
            <span>/</span>
            <a href="/" className="link">
              0123456789
            </a>
          </div>
          <div className="topheader__auth col-ct">
            <a href="./signin.html" className="link">
              Đăng ký
            </a>
            <span>/</span>
            <a href="./login.html" className="link">
              Đăng nhập
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
