import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "../../../components";
import { categoryState } from "../../../redux/reducers/product/category.reducer";
import { RootState } from "../../../redux/store";
import { createCategory } from "../../../redux/actions/product/category.action";
import { useHistory } from "react-router";
import { failureNoti, successNoti } from "../../../utils/notifications";

const NewCategoryPage = () => {
  const [name, setName] = useState<string>("");

  const history = useHistory();

  const dispatch = useDispatch();

  const createNewCategory = useSelector<RootState, categoryState>(
    (state) => state.createCategory
  );
  const { success, error } = createNewCategory;

  const submitCreateCategory = async (e: any) => {
    e.preventDefault();
    await dispatch(createCategory(name));
    history.push("/admin/category");
  };

  useEffect(() => {
    if (success) {
      successNoti();
    }
    if (error) {
      failureNoti();
    }
  }, [success, error]);

  const onCancel = () => {
    history.push("/admin/category");
  };

  return (
    <div className="newContainer">
      <Navbar />
      <div className="top">
        <h1>Thêm mới</h1>
      </div>
      <div className="bottom">
        <div className="left"></div>
        <div className="right">
          <form onSubmit={(e) => submitCreateCategory(e)}>
            <div className="formInput">
              <label>Tên danh mục</label>
              <input
                type="text"
                placeholder="Nhập tên danh mục"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="formInput d-flex">
              <button className="button-admin mr-1">Lưu</button>
              <button className="button-admin ml-1" onClick={onCancel}>
                Hủy
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewCategoryPage;
