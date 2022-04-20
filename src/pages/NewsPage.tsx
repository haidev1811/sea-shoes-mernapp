import React from "react";
import { Breadcrumbs, EmailHome, ListNews } from "../components";

const NewsPage = () => {
  return (
    <>
      <Breadcrumbs label="Tin tức" category="" />
      <ListNews />
      <EmailHome />
    </>
  );
};

export default NewsPage;
