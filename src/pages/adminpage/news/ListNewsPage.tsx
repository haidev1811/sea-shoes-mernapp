import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, DataTable } from "../../../components";
import { getListNews } from "../../../redux/actions/news/news.action";
import {
  newssState,
  newsState,
} from "../../../redux/reducers/news/news.reducer";
import { RootState } from "../../../redux/store";
import { newsColumns } from "../../../utils/datatablesource";
import { failureNoti, successNoti } from "../../../utils/notifications";

const ListUserPage = () => {
  const [reload, setReload] = useState<boolean>(false);

  const dispatch = useDispatch();

  const news = useSelector<RootState, newssState>((state) => state.listNews);
  const { newsInfo, isFetching } = news;

  useEffect(() => {
    dispatch(getListNews());
  }, [dispatch, reload]);

  const deletedNews = useSelector<RootState, newsState>(
    (state) => state.deleteProduct
  );
  const { success, error } = deletedNews;

  useEffect(() => {
    if (success) {
      successNoti();
    }
    if (error) {
      failureNoti();
    }
  }, [success, error]);

  return (
    <div className="listContainer">
      <Navbar />
      {isFetching ? (
        <CircularProgress />
      ) : (
        <DataTable
          title="Danh sách bài viết"
          type="news"
          columns={newsColumns}
          rows={newsInfo}
          reload={reload}
          setReload={setReload}
        />
      )}
    </div>
  );
};

export default ListUserPage;
