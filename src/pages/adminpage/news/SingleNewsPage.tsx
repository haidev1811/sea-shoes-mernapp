import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Navbar, Chart } from "../../../components";
import { EditorState, ContentState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import { Editor } from "react-draft-wysiwyg";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { newsState } from "../../../redux/reducers/news/news.reducer";
import axios from "../../../utils/axios";
import { getNewsId, updateNews } from "../../../redux/actions/news/news.action";
import { failureNoti, successNoti } from "../../../utils/notifications";

interface Params {
  id: string;
}

const SingleUserPage = () => {
  const params: Params = useParams();
  const history = useHistory();

  const [author, setAuthor] = useState<string>("") as any;
  const [title, setTitle] = useState<string>("") as any;
  const [content, setContent] = useState<string>("") as any;
  const [imgTitle, setImgTitle] = useState<string>("") as any;
  const [uploading, setUploading] = useState<boolean>(false);
  const [editorState, setEditorState] = useState<EditorState>(
    EditorState.createEmpty()
  );
  const [reload, setReload] = useState<boolean>(false);

  const dispatch = useDispatch();

  const news = useSelector<RootState, newsState>((state) => state.newsId);
  const { newsInfo, success: successDetail } = news;

  useEffect(() => {
    dispatch(getNewsId(params.id));
  }, [dispatch, reload, params.id]);

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

  const updatedNews = useSelector<RootState, newsState>(
    (state) => state.updateNews
  );
  const { success, error, isFetching } = updatedNews;

  const submitUpdateNews = async (e: any) => {
    e.preventDefault();
    await dispatch(
      updateNews({
        id: params.id,
        author,
        imgTitle,
        title,
        content,
      })
    );
    setReload(!reload);
  };

  useEffect(() => {
    if (successDetail) {
      setAuthor(newsInfo?.author);
      setImgTitle(newsInfo?.imgTitle);
      setTitle(newsInfo?.title);
      const contentBlock = htmlToDraft(newsInfo?.content);
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      const contState = EditorState.createWithContent(contentState);
      setEditorState(contState);
    }
  }, [newsInfo, successDetail]);

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
              <img src={newsInfo?.imgTitle} alt="" className="itemImg" />
              <div className="details">
                <div className="detailItem">
                  <span className="itemKey">Tác giả:</span>
                  <span className="itemValue">{newsInfo?.author}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Tiêu đề:</span>
                  <span className="itemValue">{newsInfo?.title}</span>
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
        <form onSubmit={submitUpdateNews} className="form-flex">
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
  );
};

export default SingleUserPage;
