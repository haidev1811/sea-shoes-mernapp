import React from "react";
import {
  Banner2Home,
  Banner3Home,
  Banner4Home,
  BannerHome,
  CategoryHome,
  EmailHome,
  ListProductHome,
  NewsHome,
  TitleHome,
} from "../components";

const HomePage = () => {
  return (
    <>
      <BannerHome />
      <Banner2Home />
      <TitleHome path="/" label="Hàng mới về" />
      <ListProductHome />
      <Banner3Home />
      <CategoryHome type="women" idCat={1} />
      <CategoryHome type="men" idCat={2} />
      <CategoryHome type="kid" idCat={3} />
      <Banner4Home />
      <TitleHome path="/" label="Tin thời trang" />
      <NewsHome />
      <EmailHome />
    </>
  );
};

export default HomePage;
