import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, DataTable } from "../../../components";
import { getBrand } from "../../../redux/actions/product/brand.action";
import { brandState } from "../../../redux/reducers/product/brand.reducer";
import { RootState } from "../../../redux/store";
import { brandColumns } from "../../../utils/datatablesource";
import { failureNoti, successNoti } from "../../../utils/notifications";

const ListBrandPage = () => {
  const [reload, setReload] = useState<boolean>(false);

  const dispatch = useDispatch();

  const brand = useSelector<RootState, brandState>((state) => state.brand);
  const { brandInfo, isFetching } = brand;

  const deletedBrand = useSelector<RootState, brandState>(
    (state) => state.deleteBrand
  );
  const { success, error } = deletedBrand;

  useEffect(() => {
    if (success) {
      successNoti();
    }
    if (error) {
      failureNoti();
    }
  }, [success, error]);

  useEffect(() => {
    dispatch(getBrand());
  }, [dispatch, reload]);

  return (
    <div className="listContainer">
      <Navbar />
      {isFetching ? (
        <CircularProgress />
      ) : (
        <DataTable
          title="Danh sách thương hiệu"
          type="brand"
          columns={brandColumns}
          rows={brandInfo}
          reload={reload}
          setReload={setReload}
        />
      )}
    </div>
  );
};

export default ListBrandPage;
