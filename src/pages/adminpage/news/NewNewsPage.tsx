import React, { useEffect, useState } from "react";
import { Navbar } from "../../../components";
import axios from "../../../utils/axios";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { newsState } from "../../../redux/reducers/news/news.reducer";
import { createNews } from "../../../redux/actions/news/news.action";
import { failureNoti, successNoti } from "../../../utils/notifications";
import { CircularProgress } from "@mui/material";

const NewUserPage = () => {
  const history = useHistory();

  const [author, setAuthor] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [imgTitle, setImgTitle] = useState<string>("");
  const [uploading, setUploading] = useState<boolean>(false);
  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );

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

      setImgTitle(data.url);
      setUploading(false);
    } catch (error: any) {
      setUploading(false);
    }
  };

  const dispatch = useDispatch();
  const createNewNews = useSelector<RootState, newsState>(
    (state) => state.createNews
  );
  const { success, error } = createNewNews;

  const submitCreateNews = async (e: any) => {
    e.preventDefault();
    await dispatch(createNews(author, imgTitle, title, content));
    history.push("/admin/news");
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
    history.push("/admin/news");
  };

  return (
    <div className="newContainer">
      <Navbar />
      <div className="top">
        <h1>Thêm mới</h1>
      </div>
      <div className="bottom">
        <div className="right">
          <form onSubmit={submitCreateNews}>
            <div className="formInput d-flex">
              <label htmlFor="imgTitle-file">
                Ảnh 1: <DriveFolderUploadOutlinedIcon className="icon" />
              </label>
              <input
                type="file"
                id="imgTitle-file"
                onChange={uploadFileHandler}
                style={{ display: "none" }}
              />
              {uploading ? <CircularProgress size="1rem" /> : <></>}
              {imgTitle && <img src={imgTitle} className="img-upload" alt="" />}
            </div>
            <div className="formInput">
              <label>Tác giả</label>
              <input
                type="text"
                placeholder="Nhập tên tác giả"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div className="formInput">
              <label>Tiêu đề</label>
              <input
                type="text"
                placeholder="Nhập tên tiêu đề"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="w-100">
              <label>Nội dung bài viết</label>
              <Editor
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                editorState={editorState}
                onEditorStateChange={(newState) => {
                  setEditorState(newState);
                  setContent(
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
