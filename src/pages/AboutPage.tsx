import React from "react";
import { AboutInfo, Breadcrumbs, EmailHome } from "../components";

const AboutPage = () => {
  return (
    <>
      <Breadcrumbs label="Giới thiệu" category="" />
      <AboutInfo />
      <EmailHome />
    </>
  );
};

export default AboutPage;
