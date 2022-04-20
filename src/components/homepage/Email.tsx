import React from "react";

const Email = () => {
  return (
    <div className="email">
      <div className="container-ct">
        <div className="row-ct">
          <h3>Nhập email</h3>
          <p>Để nhận tin tức khuyến mãi từ cửa hàng của chúng tôi</p>
          <form action="">
            <input type="text" placeholder="Nhập email của bạn" />
            <button type="submit">Gửi ngay</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Email;
