import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, DataTable } from "../../../components";
import { getListUser } from "../../../redux/actions/auth/user.action";
import {
  usersState,
  userState,
} from "../../../redux/reducers/auth/user.reducer";
import { RootState } from "../../../redux/store";
import { userColumns } from "../../../utils/datatablesource";
import { failureNoti, successNoti } from "../../../utils/notifications";

const ListUserPage = () => {
  const [reload, setReload] = useState<boolean>(false);

  const dispatch = useDispatch();

  const users = useSelector<RootState, usersState>((state) => state.listUser);
  const { userInfo, isFetching } = users;

  useEffect(() => {
    dispatch(getListUser());
  }, [dispatch, reload]);

  const deletedUser = useSelector<RootState, userState>(
    (state) => state.deleteProduct
  );
  const { success, error } = deletedUser;
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
          title="Danh sách người dùng"
          type="user"
          columns={userColumns}
          rows={userInfo}
          reload={reload}
          setReload={setReload}
        />
      )}
    </div>
  );
};

export default ListUserPage;
