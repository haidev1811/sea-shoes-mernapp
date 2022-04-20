import React from "react";
import { Breadcrumbs, EmailHome, Login } from "../components";

const LoginPage = () => {
  return (
    <>
      <Breadcrumbs label="Đăng nhập" category="" />
      <Login />
      <EmailHome />
    </>
  );
};

export default LoginPage;
