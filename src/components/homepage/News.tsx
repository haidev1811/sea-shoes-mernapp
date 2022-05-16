import { CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swiper from "swiper";
import parse from "html-react-parser";
import dayjs from "dayjs";
import { getListNews } from "../../redux/actions/news/news.action";
import { newssState } from "../../redux/reducers/news/news.reducer";
import { RootState } from "../../redux/store";

const News = () => {
  useEffect(() => {
    new Swiper(".swiper-news", {
      slidesPerView: 1,
      spaceBetween: 30,
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  });

  const dispatch = useDispatch();
  const listNews = useSelector<RootState, newssState>(
    (state) => state.listNews
  );
  const { newsInfo, isFetching } = listNews;

  useEffect(() => {
    dispatch(getListNews());
  }, [dispatch]);

  return (
    <div className="news">
      <div className="container-ct">
        <div className="swiper-container swiper-news">
          <div className="swiper-wrapper">
            {isFetching ? (
              <CircularProgress />
            ) : (
              newsInfo?.map((news, index) => (
                <div className="swiper-slide news__item" key={index}>
                  <div className="news__item-img">
                    <Link to={`/news/${news.slug}`} className="link">
                      <img src={news.imgTitle} alt="" />
                    </Link>
                  </div>
                  <div className="news__item-note">
                    <div className="note__date">
                      <i className="far fa-calendar"></i>
                      <span>{dayjs(news.createdAt).format("DD/MM/YYYY")}</span>
                    </div>
                    <div className="note__date">
                      Đăng bởi
                      <span> {news.author}</span>
                    </div>
                  </div>
                  <div className="news__item-title">
                    <Link to={`/news/${news.slug}`} className="link">
                      {news.title}
                    </Link>
                    <span>{parse(news.content)}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
