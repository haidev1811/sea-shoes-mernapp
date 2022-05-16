import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { EditorState, ContentState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import { Editor } from "react-draft-wysiwyg";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../../utils/axios";
import { brandsState } from "../../../redux/reducers/product/brand.reducer";
import { categoriesState } from "../../../redux/reducers/product/category.reducer";
import { Navbar, Chart } from "../../../components";
import { RootState } from "../../../redux/store";
import { productState } from "../../../redux/reducers/product/product.reducer";
import {
  getDetailProductById,
  updateProduct,
} from "../../../redux/actions/product/product.action";
import { failureNoti, successNoti } from "../../../utils/notifications";
import { colours, sizes, types } from "../../../utils/datatablesource";
import { getListBrand } from "../../../redux/actions/product/brand.action";
import { getListCategory } from "../../../redux/actions/product/category.action";

interface Params {
  id: string;
}

const SingleUserPage = () => {
  const params: Params = useParams();
  const history = useHistory();

  const [name, setName] = useState<string>("") as any;
  const [price, setPrice] = useState<number>(0) as any;
  const [inStock, setInStock] = useState<number>(0) as any;
  const [discount, setDiscount] = useState<number>(0) as any;
  const [brand, setBrand] = useState<string>("") as any;
  const [category, setCategory] = useState<string>("") as any;
  const [description, setDescription] = useState<string>("") as any;
  const [type, setType] = useState<string>("") as any;
  const [size, setSize] = useState([]) as any;
  const [colour, setColour] = useState([]) as any;
  const [image1, setImage1] = useState<string>("") as any;
  const [image2, setImage2] = useState<string>("") as any;
  const [image3, setImage3] = useState<string>("") as any;
  const [image4, setImage4] = useState<string>("") as any;
  const [image5, setImage5] = useState<string>("") as any;
  const [uploading1, setUploading1] = useState<boolean>(false);
  const [uploading2, setUploading2] = useState<boolean>(false);
  const [uploading3, setUploading3] = useState<boolean>(false);
  const [uploading4, setUploading4] = useState<boolean>(false);
  const [uploading5, setUploading5] = useState<boolean>(false);
  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  ) as any;
  const [reload, setReload] = useState<boolean>(false);

  const dispatch = useDispatch();

  const product = useSelector<RootState, productState>(
    (state) => state.detailProductId
  );
  const { productInfo, success: successDetail } = product;

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

  const updatedProduct = useSelector<RootState, productState>(
    (state) => state.updateProduct
  );
  const { success, error, isFetching } = updatedProduct;

  useEffect(() => {
    dispatch(getDetailProductById(params.id));
  }, [dispatch, reload, params.id]);

  const submitUpdateProduct = async (e: any) => {
    e.preventDefault();
    await dispatch(
      updateProduct({
        id: params.id,
        name,
        image1,
        image2,
        image3,
        image4,
        image5,
        price,
        discount,
        inStock,
        description,
        size,
        colour,
        brand,
        category,
        type,
      })
    );
    setReload(!reload);
  };

  useEffect(() => {
    if (successDetail) {
      setName(productInfo?.name);
      setImage1(productInfo?.image1);
      setImage2(productInfo?.image2);
      setImage3(productInfo?.image3);
      setImage4(productInfo?.image4);
      setImage5(productInfo?.image5);
      setPrice(productInfo?.price);
      setDiscount(productInfo?.discount);
      setBrand(productInfo?.brand);
      setCategory(productInfo?.category);
      setType(productInfo?.type);
      setColour(productInfo?.colour);
      setSize(productInfo?.size);
      const contentBlock = htmlToDraft(productInfo?.description);
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      const descState = EditorState.createWithContent(contentState);
      setEditorState(descState);
    }
  }, [productInfo, successDetail]);

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
              <img src={productInfo?.image1} alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">{productInfo?.name}</h1>
                <div className="detailItem">
                  <span className="itemKey">Giá:</span>
                  <span className="itemValue">{productInfo?.price}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Giảm giá:</span>
                  <span className="itemValue">{productInfo?.discount}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Còn trong kho:</span>
                  <span className="itemValue">{productInfo?.inStock}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Đã bán:</span>
                  <span className="itemValue">{productInfo?.sold}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Thương hiệu:</span>
                  <span className="itemValue">{productInfo?.brand}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Danh mục:</span>
                  <span className="itemValue">{productInfo?.category}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Loại sản phẩm:</span>
                  <span className="itemValue">{productInfo?.type}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Màu sắc:</span>
                  {productInfo?.colour.map((item: any, index: any) => (
                    <span className="itemValue" key={index}>
                      {item},{" "}
                    </span>
                  ))}
                </div>
                <div className="detailItem">
                  <span className="itemKey">Kích cỡ:</span>
                  {productInfo?.size.map((item: any, index: any) => (
                    <span className="itemValue" key={index}>
                      {item},{" "}
                    </span>
                  ))}
                </div>
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
        <form onSubmit={submitUpdateProduct} className="form-flex">
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
                <div className="col-4 d-flex align-items-center" key={item.id}>
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
                <div className="col-4 d-flex align-items-center" key={item.id}>
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
  );
};

export default SingleUserPage;
