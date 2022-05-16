import React from "react";
import { Link } from "react-router-dom";

interface Props {
  close?: any;
}

const ModalLogin = ({ close }: Props) => {
  return (
    <div className="modal-login">
      <button className="close" onClick={close}>
        &times;
      </button>
      <div className="header-popup">Cảnh báo!</div>
      <div className="content">
        Bạn cần phải đăng nhập để thực hiện chức năng này!
      </div>
      <div className="actions">
        <Link to="/login" className="button">
          Đăng nhập
        </Link>
      </div>
    </div>
  );
};

export default ModalLogin;
