import React, { useEffect, useState } from "react";
import { Navbar } from "../../../components";
import axios from "../../../utils/axios";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { Editor } from "react-draft-wysiwyg";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { brandsState } from "../../../redux/reducers/product/brand.reducer";
import { categoriesState } from "../../../redux/reducers/product/category.reducer";
import { getListBrand } from "../../../redux/actions/product/brand.action";
import { getListCategory } from "../../../redux/actions/product/category.action";
import { productState } from "../../../redux/reducers/product/product.reducer";
import { createProduct } from "../../../redux/actions/product/product.action";
import { useHistory } from "react-router";
import { failureNoti, successNoti } from "../../../utils/notifications";
import { colours, sizes, types } from "../../../utils/datatablesource";

const NewUserPage = () => {
  const history = useHistory();

  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0) as any;
  const [inStock, setInStock] = useState<number>(0) as any;
  const [discount, setDiscount] = useState<number>(0) as any;
  const [brand, setBrand] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [size, setSize] = useState([]) as any;
  const [colour, setColour] = useState([]) as any;
  const [image1, setImage1] = useState<string>("");
  const [image2, setImage2] = useState<string>("");
  const [image3, setImage3] = useState<string>("");
  const [image4, setImage4] = useState<string>("");
  const [image5, setImage5] = useState<string>("");
  const [uploading1, setUploading1] = useState<boolean>(false);
  const [uploading2, setUploading2] = useState<boolean>(false);
  const [uploading3, setUploading3] = useState<boolean>(false);
  const [uploading4, setUploading4] = useState<boolean>(false);
  const [uploading5, setUploading5] = useState<boolean>(false);
  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );

  const dispatch = useDispatch();

  const brands = useSelector<RootState, brandsState>(
    (state) => state.listBrand
  );
  const { brandInfo } = brands;

  const categories = useSelector<RootState, categoriesState>(
    (state) => state.listCategory
  );
  const { categoryInfo } = categories;

  useEffect(() => {
    dispatch(getListBrand());
    dispatch(getListCategory());
  }, [dispatch]);

  const uploadFileHandler = async (e: any, type: string) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    switch (type) {
      case "image1":
        setUploading1(true);
        break;
      case "image2":
        setUploading2(true);
        break;
      case "image3":
        setUploading3(true);
        break;
      case "image4":
        setUploading4(true);
        break;
      case "image5":
        setUploading5(true);
        break;
      default:
        break;
    }
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };
      const { data } = await axios.post("/upload", formData, config);
      switch (type) {
        case "image1":
          setImage1(data.url);
          setUploading1(false);
          break;
        case "image2":
          setImage2(data.url);
          setUploading2(false);
          break;
        case "image3":
          setImage3(data.url);
          setUploading3(false);
          break;
        case "image4":
          setImage4(data.url);
          setUploading4(false);
          break;
        case "image5":
          setImage5(data.url);
          setUploading5(false);
          break;
        default:
          break;
      }
    } catch (error: any) {
      switch (type) {
        case "image1":
          setUploading1(false);
          break;
        case "image2":
          setUploading2(false);
          break;
        case "image3":
          setUploading3(false);
          break;
        case "image4":
          setUploading4(false);
          break;
        case "image5":
          setUploading5(false);
          break;
        default:
          break;
      }
      setUploading1(false);
    }
  };

  const onChangeColour = (e: any) => {
    let value = e.target.value;
    if (e.target.checked) {
      setColour([...colour, value]);
    } else {
      colour.filter((item: any) => item.id !== e.target.id);
    }
  };
  const onChangeSize = (e: any) => {
    let value = e.target.value;
    if (e.target.checked) {
      setSize([...size, value]);
    } else {
      colour.filter((item: any) => item.id !== e.target.id);
    }
  };

  const createNewProduct = useSelector<RootState, productState>(
    (state) => state.createProduct
  );
  const { success, error } = createNewProduct;

  const submitCreateProduct = async (e: any) => {
    e.preventDefault();
    await dispatch(
      createProduct({
        name,
        image1,
        image2,
        image3,
        image4,
        image5,
        price,
        inStock,
        discount,
        description,
        size,
        colour,
        brand,
        category,
        type,
      })
    );
    history.push("/admin/product");
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
    history.push("/admin/product");
  };

  return (
    <div className="newContainer">
      <Navbar />
      <div className="top">
        <h1>Thêm mới</h1>
      </div>
      <div className="bottom">
        <div className="right">
          <form onSubmit={submitCreateProduct}>
            <div className="formInput d-flex">
              <label htmlFor="image1-file">
                Ảnh 1: <DriveFolderUploadOutlinedIcon className="icon" />
              </label>
              <input
                type="file"
                id="image1-file"
                onChange={(e) => uploadFileHandler(e, "image1")}
                style={{ display: "none" }}
              />
              {uploading1 ? <CircularProgress size="1rem" /> : <></>}
              {image1 && <img src={image1} className="img-upload" alt="" />}
            </div>
            <div className="formInput d-flex">
              <label htmlFor="image2-file">
                Ảnh 2: <DriveFolderUploadOutlinedIcon className="icon" />
              </label>
              <input
                type="file"
                id="image2-file"
                onChange={(e) => uploadFileHandler(e, "image2")}
                style={{ display: "none" }}
              />
              {uploading2 ? <CircularProgress size="1rem" /> : <></>}
              {image2 && <img src={image2} className="img-upload" alt="" />}
            </div>
            <div className="formInput d-flex">
              <label htmlFor="image3-file">
                Ảnh 3: <DriveFolderUploadOutlinedIcon className="icon" />
              </label>
              <input
                type="file"
                id="image3-file"
                onChange={(e) => uploadFileHandler(e, "image3")}
                style={{ display: "none" }}
              />
              {uploading3 ? <CircularProgress size="1rem" /> : <></>}
              {image3 && <img src={image3} className="img-upload" alt="" />}
            </div>
            <div className="formInput d-flex">
              <label htmlFor="image4-file">
                Ảnh 4: <DriveFolderUploadOutlinedIcon className="icon" />
              </label>
              <input
                type="file"
                id="image4-file"
                onChange={(e) => uploadFileHandler(e, "image4")}
                style={{ display: "none" }}
              />
              {uploading4 ? <CircularProgress size="1rem" /> : <></>}
              {image4 && <img src={image4} className="img-upload" alt="" />}
            </div>
            <div className="formInput d-flex">
              <label htmlFor="image5-file">
                Ảnh 5: <DriveFolderUploadOutlinedIcon className="icon" />
              </label>
              <input
                type="file"
                id="image5-file"
                onChange={(e) => uploadFileHandler(e, "image5")}
                style={{ display: "none" }}
              />
              {uploading5 ? <CircularProgress size="1rem" /> : <></>}
              {image5 && <img src={image5} className="img-upload" alt="" />}
            </div>

            <div className="formInput">
              <label>Tên sản phẩm</label>
              <input
                type="text"
                placeholder="Nhập tên sản phẩm"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="formInput">
              <label>Giá sản phẩm</label>
              <input
                type="number"
                placeholder="Nhập giá sản phẩm"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="formInput">
              <label>Khuyến mại</label>
              <input
                type="number"
                placeholder="Nhập khuyến mại"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
              />
            </div>
            <div className="formInput">
              <label>Còn trong kho</label>
              <input
                type="number"
                placeholder="Số lượng còn trong kho"
                value={inStock}
                onChange={(e) => setInStock(e.target.value)}
              />
            </div>

            <div className="formInput">
              <label>Màu sắc</label>
              <div className="row">
                {colours.map((item) => (
                  <div
                    className="col-4 d-flex align-items-center"
                    key={item.id}
                  >
                    <input
                      type="checkbox"
                      name="clour"
                      value={item.value}
                      onChange={onChangeColour}
                    />
                    <label className="mb-0">{item.name}</label>
                  </div>
                ))}
              </div>
            </div>
            <div className="formInput">
              <label>Kích cỡ</label>
              <div className="row">
                {sizes.map((item) => (
                  <div
                    className="col-4 d-flex align-items-center"
                    key={item.id}
                  >
                    <input
                      type="checkbox"
                      name="coloi"
                      value={item.value}
                      onChange={onChangeSize}
                    />
                    <label className="mb-0">{item.name}</label>
                  </div>
                ))}
              </div>
            </div>
            <div className="formInput">
              <label>Thương hiệu</label>
              <select
                id="brand_product"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              >
                {brandInfo?.map((item) => (
                  <option value={item.name} key={item._id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="formInput">
              <label>Danh mục sản phẩm</label>
              <select
                id="category_product"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categoryInfo?.map((item) => (
                  <option value={item.name} key={item._id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="formInput">
              <label>Loại sản phẩm</label>
              <select
                id="category_product"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                {types?.map((item) => (
                  <option value={item.value} key={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-100">
              <label>Mô tả sản phẩm</label>
              <Editor
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                editorState={editorState}
                onEditorStateChange={(newState) => {
                  setEditorState(newState);
                  setDescription(
                    draftToHtml(convertToRaw(newState.getCurrentContent()))
                  );
                }}
                placeholder="Nhập mô tả sản phẩm..."
              />
            </div>
            <div className="d-flex">
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

export default NewUserPage;
