import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Chart } from "../../../components";
import { RootState } from "../../../redux/store";
import { categoryState } from "../../../redux/reducers/product/category.reducer";
import {
  getDetailCategory,
  updateCategory,
} from "../../../redux/actions/product/category.action";
import { failureNoti, successNoti } from "../../../utils/notifications";
import { CircularProgress } from "@mui/material";

interface Params {
  id: string;
}

const SingleCategoryPage = () => {
  const [name, setName] = useState<string>("") as any;
  const [reload, setReload] = useState<boolean>(false);

  const params: Params = useParams();
  const history = useHistory();

  const dispatch = useDispatch();
  const detailCategory = useSelector<RootState, categoryState>(
    (state) => state.detailCategory
  );
  const {
    categoryInfo,
    success: successDetail,
    isFetching,
    error,
  } = detailCategory;

  const updatedCategory = useSelector<RootState, categoryState>(
    (state) => state.updateCategory
  );
  const { error: updateError, success } = updatedCategory;

  useEffect(() => {
    dispatch(getDetailCategory(params.id));
  }, [dispatch, params.id, reload]);

  useEffect(() => {
    if (successDetail) {
      setName(categoryInfo?.name);
    }
  }, [categoryInfo, successDetail]);

  useEffect(() => {
    if (error) {
      failureNoti();
    }
    if (updateError) {
      failureNoti();
    }
    if (success) {
      successNoti();
    }
  }, [error, updateError, success]);

  const submitUpdateCategory = async (e: any) => {
    e.preventDefault();
    await dispatch(updateCategory(params.id, name));
    setReload(!reload);
  };

  const onCancel = () => {
    history.push("/admin/category");
  };

  return (
    <div className="singleContainer">
      <Navbar />
      <div className="top">
        <div className="left">
          <div className="editButton">Sửa</div>
          <h1 className="title">Thông tin</h1>
          {isFetching ? (
            <CircularProgress />
          ) : (
            <div className="item">
              <div className="details">
                <h1 className="itemTitle">{categoryInfo?.name}</h1>
              </div>
            </div>
          )}
        </div>
        <div className="right">
          <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
        </div>
      </div>
      <div className="bottom">
        <h1 className="title">Chỉnh sửa</h1>
        <form onSubmit={(e) => submitUpdateCategory(e)}>
          <div className="formInput">
            <label>Tên danh mục</label>
            <input
              type="text"
              placeholder="Nhập tên danh mục"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="formInput d-flex mt-4">
            <button className="button-admin mr-1">Lưu</button>
            <button className="button-admin ml-1" onClick={onCancel}>
              Hủy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingleCategoryPage;
