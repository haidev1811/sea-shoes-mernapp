import React from "react";
import { AboutInfo, Breadcrumbs, EmailHome, ModalCart } from "../components";

const AboutPage = () => {
  return (
    <>
      <Breadcrumbs label="Giới thiệu" category="" />
      <AboutInfo />
      <EmailHome />
      <ModalCart />
    </>
  );
};

export default AboutPage;
