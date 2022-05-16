import { CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  Breadcrumbs,
  EmailHome,
  ProductDetail,
  SimilarProduct,
} from "../components";
import { getDetailProduct } from "../redux/actions/product/product.action";
import { productState } from "../redux/reducers/product/product.reducer";
import { RootState } from "../redux/store";

interface Params {
  slug?: any;
}

const ProductDetailPage = () => {
  const params: Params = useParams();

  const dispatch = useDispatch();
  const detailProduct = useSelector<RootState, productState>(
    (state) => state.detailProduct
  );
  const { productInfo, isFetching } = detailProduct;

  useEffect(() => {
    dispatch(getDetailProduct(params.slug));
  }, [dispatch, params.slug]);

  return (
    <>
      <Breadcrumbs label={productInfo?.name} category={productInfo?.category} />
      {isFetching ? (
        <CircularProgress />
      ) : (
        <ProductDetail productInfo={productInfo} />
      )}
      <SimilarProduct />
      <EmailHome />
    </>
  );
};

export default ProductDetailPage;
