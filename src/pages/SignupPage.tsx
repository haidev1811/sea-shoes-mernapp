import React from "react";
import { Breadcrumbs, EmailHome, Signup } from "../components";

const SignupPage = () => {
  return (
    <>
      <Breadcrumbs label="Đăng ký" category="" />
      <Signup />
      <EmailHome />
    </>
  );
};

export default SignupPage;
