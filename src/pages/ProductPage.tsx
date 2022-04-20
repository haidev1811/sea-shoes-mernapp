import React from "react";
import {
  Breadcrumbs,
  EmailHome,
  ListProduct,
  SimilarProduct,
} from "../components";

const ProductPage = () => {
  return (
    <>
      <Breadcrumbs label="Tất cả sản phẩm" category="" />
      <ListProduct />
      <SimilarProduct />
      <EmailHome />
    </>
  );
};

export default ProductPage;
