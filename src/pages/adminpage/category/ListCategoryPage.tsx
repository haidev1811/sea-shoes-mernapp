import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { Navbar, DataTable } from "../../../components";
import { getCategory } from "../../../redux/actions/product/category.action";
import { categoryState } from "../../../redux/reducers/product/category.reducer";
import { RootState } from "../../../redux/store";
import { categoryColumns } from "../../../utils/datatablesource";
import { failureNoti, successNoti } from "../../../utils/notifications";

const ListCategoryPage = () => {
  const [reload, setReload] = useState<boolean>(false);

  const dispatch = useDispatch();

  const category = useSelector<RootState, categoryState>(
    (state) => state.category
  );
  const { categoryInfo, isFetching } = category;

  const deletedCategory = useSelector<RootState, categoryState>(
    (state) => state.deleteCategory
  );
  const { success, error } = deletedCategory;

  useEffect(() => {
    if (success) {
      successNoti();
    }
    if (error) {
      failureNoti();
    }
  }, [success, error]);

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  return (
    <div className="listContainer">
      <Navbar />
      {isFetching ? (
        <CircularProgress />
      ) : (
        <DataTable
          title="Danh sách danh mục"
          type="category"
          columns={categoryColumns}
          rows={categoryInfo}
          reload={reload}
          setReload={setReload}
        />
      )}
    </div>
  );
};

export default ListCategoryPage;
