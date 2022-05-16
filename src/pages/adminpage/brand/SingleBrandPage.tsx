import React, { useEffect, useState } from "react";
import { Navbar, Chart } from "../../../components";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import axios from "../../../utils/axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { brandState } from "../../../redux/reducers/product/brand.reducer";
import {
  getDetailBrand,
  updateBrand,
} from "../../../redux/actions/product/brand.action";
import { useHistory, useParams } from "react-router";
import { CircularProgress } from "@mui/material";
import { failureNoti, successNoti } from "../../../utils/notifications";

interface Params {
  id: string;
}

const SingleBrandPage = () => {
  const [name, setName] = useState<string>("") as any;
  const [image, setImage] = useState<string>("") as any;
  const [uploading, setUploading] = useState<boolean>(false);
  const [errorUpload, setErrorUpload] = useState<string>("");
  const [reload, setReload] = useState<boolean>(false);

  const params: Params = useParams();
  const history = useHistory();

  const dispatch = useDispatch();
  const detailBrand = useSelector<RootState, brandState>(
    (state) => state.detailBrand
  );
  const { brandInfo, success: successDetail, isFetching, error } = detailBrand;

  const updatedBrand = useSelector<RootState, brandState>(
    (state) => state.updateBrand
  );
  const { error: updateError, success } = updatedBrand;

  useEffect(() => {
    dispatch(getDetailBrand(params.id));
  }, [dispatch, params.id, reload]);

  useEffect(() => {
    if (successDetail) {
      setName(brandInfo?.name);
      setImage(brandInfo?.image);
    }
  }, [brandInfo, successDetail]);

  useEffect(() => {
    if (error) {
      failureNoti();
    }
    if (updateError) {
      failureNoti();
    }
    if (errorUpload) {
      failureNoti();
    }
    if (success) {
      successNoti();
    }
  }, [error, updateError, errorUpload, success]);

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

  const submitUpdateBrand = async (e: any) => {
    e.preventDefault();
    await dispatch(updateBrand(params.id, name, image));
    setReload(!reload);
  };

  const onCancel = () => {
    history.push("/admin/brand");
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
              <img
                src={
                  brandInfo?.image
                    ? brandInfo.image
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                className="itemImg"
                alt=""
              />
              <div className="details">
                <h1 className="itemTitle">{brandInfo?.name}</h1>
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
        <form onSubmit={(e) => submitUpdateBrand(e)}>
          <div className="formInput d-flex">
            <label htmlFor="file">
              Ảnh thương hiệu:
              <DriveFolderUploadOutlinedIcon className="icon" />
            </label>
            <input
              type="file"
              id="file"
              onChange={uploadFileHandler}
              style={{ display: "none" }}
            />
            {uploading ? <CircularProgress size="1rem" /> : <></>}
            {image && <img src={image} className="img-upload" alt="" />}
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
          <div className="formInput d-flex mt-3">
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

export default SingleBrandPage;
