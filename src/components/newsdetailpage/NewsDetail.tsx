import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import { useDispatch, useSelector } from "react-redux";
import { format } from "timeago.js";
import { RootState } from "../../redux/store";
import { commentsState } from "../../redux/reducers/news/comment.reducer";
import {
  deleteComment,
  getComment,
  postComment,
  updateComment,
} from "../../redux/actions/news/comment.action";
import axios from "../../utils/axios";
import { authState } from "../../redux/reducers/auth/auth.reducer";
import { CircularProgress } from "@mui/material";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import image1 from "../../assets/images/1.jpg";

interface Props {
  newsInfo: any;
}

const NewsDetail = ({ newsInfo }: Props) => {
  const dispatch = useDispatch();

  const [reloadComment, setReloadComment] = useState<boolean>(false);
  const comments = useSelector<RootState, commentsState>(
    (state) => state.comment
  );
  const { commentInfo, isFetching } = comments;
  useEffect(() => {
    if (newsInfo) {
      dispatch(getComment(newsInfo?._id));
    }
  }, [dispatch, newsInfo, reloadComment]);

  const authLogin = useSelector<RootState, authState>(
    (state) => state.authLogin
  );
  const { authInfo } = authLogin;

  const [comment, setComment] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [uploading, setUploading] = useState<boolean>(false);
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
      setUploading(false);
    }
  };

  const [idEdit, setIdEdit] = useState<string>("");
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const submitPostReview = async (e: any) => {
    e.preventDefault();
    if (!isEdit) {
      await dispatch(
        postComment({
          news: newsInfo?._id,
          user: authInfo?.user?._id!,
          comment,
          image,
        })
      );
    } else {
      await dispatch(updateComment({ id: idEdit, comment, image }));
    }
    setReloadComment(!reloadComment);
    setIsEdit(false);
    setComment("");
    setImage("");
  };

  const onHandlerEdit = (comment: any) => {
    setIsEdit(true);
    setComment(comment.comment);
    setImage(comment.image);
    setIdEdit(comment._id);
  };

  const onHandlerDelete = async (id: any) => {
    await dispatch(deleteComment(id));
    setReloadComment(!reloadComment);
  };

  return (
    <div className="news">
      <div className="container-ct">
        <div className="news-content">
          <img className="img1" src={newsInfo?.imgTitle} alt="" />
          <h2>{newsInfo?.title}</h2>
          {parse(`${newsInfo?.content}`)}
        </div>
        <div className="news-social">
          <div className="social__tag">
            <i className="fas fa-tag"></i>
            <a href="/" className="link">
              tag
            </a>
          </div>
          <div className="social__share">
            <span>Chia sẻ:</span>
            <a href="/" className="link">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="/" className="link">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="/" className="link">
              <i className="fab fa-pinterest"></i>
            </a>
            <a href="/" className="link">
              <i className="fab fa-google"></i>
            </a>
          </div>
        </div>
        <div className="comment">
          <div className="news__comment">
            <div className="news__comment-head">Bình luận bài viết</div>
            <div className="new__comment-form">
              <form className="form" onSubmit={submitPostReview}>
                <div className="form-item">
                  <label>
                    Nội dung <span>*</span>
                  </label>
                  <textarea
                    cols={30}
                    rows={10}
                    placeholder="Nội dung bình luận"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  ></textarea>
                  <div className="d-flex">
                    <label htmlFor="file">
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
                </div>
                <div className="form-btn">
                  <button>Gửi bình luận</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="customer-ques">
          {isFetching ? (
            <CircularProgress />
          ) : (
            commentInfo?.map((comment, index) => (
              <div className="introduce-left__qa" key={index}>
                <div className="question">
                  <div className="question-user">
                    <img
                      src={comment.user.avatar}
                      alt=""
                      className="img-avatar"
                    />
                    <span>{`${comment.user.firstname} ${comment.user.lastname}`}</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="question-ques">
                      <span className="question-ques__star">
                        <i className="fas fa-star mr-1"></i>
                        <i className="fas fa-star mr-1"></i>
                        <i className="fas fa-star mr-1"></i>
                        <i className="fas fa-star mr-1"></i>
                        <i className="fas fa-star mr-1"></i>
                      </span>
                      <p
                        className={`question-ques__ques ${
                          comment.comment === "" ? "d-none" : ""
                        }`}
                      >
                        {comment.comment}
                      </p>
                      <img
                        src={comment.image}
                        alt=""
                        className={`img-comment ${
                          comment.image === "" ? "d-none" : ""
                        }`}
                      />
                    </div>
                    <div className="question-action">
                      <MoreVertIcon className="icon" />
                      <div className="question-action-list">
                        <div
                          className="question-action-item"
                          onClick={() => onHandlerEdit(comment)}
                        >
                          Sửa
                        </div>
                        <div
                          className="question-action-item"
                          onClick={() => onHandlerDelete(comment._id)}
                        >
                          Xóa
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="question-answer">
                    <div className="answer">Đã bình luận</div>
                    <div className="dot"></div>
                    <div className="time">
                      {format(comment?.createdAt, "vi_VN")}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
