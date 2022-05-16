import { CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swiper from "swiper";
import parse from "html-react-parser";
import dayjs from "dayjs";
import useQuery from "../../hooks/useQuery";
import { getNews } from "../../redux/actions/news/news.action";
import { listNewsState } from "../../redux/reducers/news/news.reducer";
import { RootState } from "../../redux/store";

const ListNews = () => {
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
  const listNews = useSelector<RootState, listNewsState>((state) => state.news);
  const { newsInfo, isFetching } = listNews;

  const query = useQuery();
  let pageNumber = query.get("page") !== null ? query.get("page") : "";

  const getFilterUrl = (filter: any) => {
    const filterPage = filter.page || pageNumber;

    return `/news?page=${filterPage}`;
  };

  useEffect(() => {
    dispatch(getNews({ pageNumber }));
  }, [dispatch, pageNumber]);

  return (
    <div className="news">
      <div className="container-ct">
        <div className="row-ct">
          {isFetching ? (
            <CircularProgress />
          ) : (
            newsInfo?.news?.map((item, index) => (
              <div className="news__item" key={index}>
                <div className="news__item-img">
                  <Link to={`/news/${item.slug}`} className="link">
                    <img src={item.imgTitle} alt="" />
                  </Link>
                </div>
                <div className="news__item-note">
                  <div className="note__date">
                    <i className="far fa-calendar"></i>
                    <span>{dayjs(item.createdAt).format("DD/MM/YYYY")}</span>
                  </div>
                  <div className="note__date">
                    Đăng bởi
                    <span>{item.author}</span>
                  </div>
                </div>
                <div className="news__item-title">
                  <Link to={`/news/${item.slug}`} className="link">
                    {item.title}
                  </Link>
                  <span>{parse(item.content)}</span>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="category__pagination">
          <ul>
            {[...(Array(newsInfo?.pages).keys() as any)].map((x) => (
              <li
                className={`${
                  x + 1 === newsInfo?.page ? "paginaton--select" : ""
                }`}
                key={x + 1}
              >
                <Link to={getFilterUrl({ page: x + 1 })} className="link">
                  {x + 1}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ListNews;
