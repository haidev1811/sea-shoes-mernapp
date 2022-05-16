import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, DataTable } from "../../../components";
import { getListProduct } from "../../../redux/actions/product/product.action";
import {
  productsState,
  productState,
} from "../../../redux/reducers/product/product.reducer";
import { RootState } from "../../../redux/store";
import { productColumns } from "../../../utils/datatablesource";
import { failureNoti, successNoti } from "../../../utils/notifications";

const ListUserPage = () => {
  const [reload, setReload] = useState<boolean>(false);

  const dispatch = useDispatch();

  const productList = useSelector<RootState, productsState>(
    (state) => state.listProduct
  );
  const { productInfo, isFetching } = productList;

  useEffect(() => {
    dispatch(getListProduct());
  }, [dispatch, reload]);

  const deletedProduct = useSelector<RootState, productState>(
    (state) => state.deleteProduct
  );
  const { success, error } = deletedProduct;

  useEffect(() => {
    if (success) {
      successNoti();
    }
    if (error) {
      failureNoti();
    }
  }, [success, error]);

  return (
    <div className="listContainer">
      <Navbar />
      {isFetching ? (
        <CircularProgress />
      ) : (
        <DataTable
          title="Danh sách sản phẩm"
          type="product"
          columns={productColumns}
          rows={productInfo}
          reload={reload}
          setReload={setReload}
        />
      )}
    </div>
  );
};

export default ListUserPage;
