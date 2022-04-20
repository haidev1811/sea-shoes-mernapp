import React from "react";
import {
  Breadcrumbs,
  EmailHome,
  ProductDetail,
  SimilarProduct,
} from "../components";

const ProductDetailPage = () => {
  return (
    <>
      <Breadcrumbs label="Adidas White Stan Smith" category="Giày Running" />
      <ProductDetail />
      <SimilarProduct />
      <EmailHome />
    </>
  );
};

export default ProductDetailPage;
