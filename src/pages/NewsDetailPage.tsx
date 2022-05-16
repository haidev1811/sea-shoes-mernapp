import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Breadcrumbs, EmailHome, NewsDetail } from "../components";
import { getDetailNews } from "../redux/actions/news/news.action";
import { newsState } from "../redux/reducers/news/news.reducer";
import { RootState } from "../redux/store";

interface Params {
  slug?: any;
}

const NewsDetailPage = () => {
  const params: Params = useParams();

  const dispatch = useDispatch();
  const detailNews = useSelector<RootState, newsState>(
    (state) => state.detailNews
  );
  const { newsInfo, isFetching } = detailNews;

  useEffect(() => {
    dispatch(getDetailNews(params.slug));
  }, [dispatch, params.slug]);

  return (
    <>
      <Breadcrumbs label={newsInfo?.title} category="Tin tức" />
      <NewsDetail newsInfo={newsInfo} />
      <EmailHome />
    </>
  );
};

export default NewsDetailPage;
