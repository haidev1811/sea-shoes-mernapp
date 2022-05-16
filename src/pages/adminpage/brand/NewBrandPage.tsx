import React, { useEffect, useState } from "react";
import { Navbar } from "../../../components";
import axios from "../../../utils/axios";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { brandState } from "../../../redux/reducers/product/brand.reducer";
import { createBrand } from "../../../redux/actions/product/brand.action";
import { failureNoti, successNoti } from "../../../utils/notifications";
import { CircularProgress } from "@mui/material";
import { useHistory } from "react-router";

const NewBrandPage = () => {
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [uploading, setUploading] = useState<boolean>(false);
  const [errorUpload, setErrorUpload] = useState<string>("");

  const history = useHistory();

  const uploadFileHandler = async (e: any) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post("/upload", formData, config);

      setImage(data.url);
      setUploading(false);
    } catch (error: any) {
      setErrorUpload(error.message);
      setUploading(false);
    }
  };

  const dispatch = useDispatch();

  const createNewBrand = useSelector<RootState, brandState>(
    (state) => state.createBrand
  );
  const { success, error } = createNewBrand;

  const submitCreateBrand = async (e: any) => {
    e.preventDefault();
    await dispatch(createBrand(name, image));
    history.push("/admin/brand");
  };

  useEffect(() => {
    if (success) {
      successNoti();
    }
    if (error) {
      failureNoti();
    }
    if (errorUpload) {
      failureNoti();
    }
  }, [success, error, errorUpload]);

  const onCancel = () => {
    history.push("/admin/brand");
  };

  return (
    <div className="newContainer">
      <Navbar />
      <div className="top">
        <h1>Thêm mới</h1>
      </div>
      <div className="bottom">
        <div className="left">
          <img
            src={
              image
                ? image
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
            alt=""
          />
        </div>
        <div className="right">
          <form onSubmit={(e) => submitCreateBrand(e)}>
            <div className="formInput d-flex">
              <label htmlFor="file">
                Ảnh thương hiệu:
                <DriveFolderUploadOutlinedIcon className="icon" />
              </label>
              <input
                type="file"
                id="file"
                onChange={(e) => uploadFileHandler(e)}
                style={{ display: "none" }}
              />
              {uploading ? <CircularProgress size="1rem" /> : <></>}
            </div>

            <div className="formInput">
              <label>Tên thương hiệu</label>
              <input
                type="text"
                placeholder="Nhập tên thương hiệu"
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

export default NewBrandPage;
