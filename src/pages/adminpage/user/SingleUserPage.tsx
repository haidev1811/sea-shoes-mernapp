import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { Navbar, Chart } from "../../../components";
import { getUserId, updateUser } from "../../../redux/actions/auth/user.action";
import { userState } from "../../../redux/reducers/auth/user.reducer";
import { RootState } from "../../../redux/store";
import { failureNoti, successNoti } from "../../../utils/notifications";

interface Params {
  id: string;
}

const SingleUserPage = () => {
  const params: Params = useParams();
  const history = useHistory();

  const [firstname, setFirstname] = useState<string>("") as any;
  const [lastname, setLastname] = useState<string>("") as any;
  const [email, setEmail] = useState<string>("") as any;
  const [role, setRole] = useState([]) as any;

  const [reload, setReload] = useState<boolean>(false);

  const dispatch = useDispatch();

  const userDetail = useSelector<RootState, userState>((state) => state.userId);
  const { userInfo, success: successDetail } = userDetail;

  const userUpdate = useSelector<RootState, userState>(
    (state) => state.updateUser
  );
  const { success, error, isFetching } = userUpdate;

  useEffect(() => {
    dispatch(getUserId(params.id));
  }, [dispatch, reload, params.id]);

  const submitUpdateUser = async (e: any) => {
    e.preventDefault();
    await dispatch(
      updateUser({
        id: params.id,
        firstname,
        lastname,
        email,
        role,
      })
    );
    setReload(!reload);
  };

  const onChangeRole = (e: any) => {
    let role = e.target.value;
    if (role === "admin") {
      setRole(["admin", "staff"]);
    } else if (role === "staff") {
      setRole(["staff"]);
    } else {
      setRole(["user"]);
    }
  };

  useEffect(() => {
    if (successDetail) {
      setFirstname(userInfo?.firstname);
      setLastname(userInfo?.lastname);
      setEmail(userInfo?.email);
      let isRole = userInfo?.role;
      if (isRole[0] === "admin") {
        setRole("admin");
      } else if (isRole[0] === "staff") {
        setRole("staff");
      } else {
        setRole("user");
      }
    }
  }, [userInfo, successDetail]);

  useEffect(() => {
    if (success) {
      successNoti();
    }
    if (error) {
      failureNoti();
    }
  }, [success, error]);

  const onCancel = () => {
    history.push("/admin/user");
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
              <img src={userInfo?.avatar} alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">
                  {userInfo?.firstname} {userInfo?.lastname}
                </h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{userInfo?.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Quyền hạn:</span>
                  {userInfo?.role[0] === "admin" ? (
                    <span className="itemValue">Quản trị viên</span>
                  ) : userInfo?.role[0] === "staff" ? (
                    <span className="itemValue">Nhân viên</span>
                  ) : (
                    <span className="itemValue">Khách hàng</span>
                  )}
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
        <form onSubmit={submitUpdateUser} className="form-flex">
          <div className="formInput">
            <label>Tên</label>
            <input
              type="text"
              placeholder="Nhập tên"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div className="formInput">
            <label>Họ</label>
            <input
              type="text"
              placeholder="Nhập họ"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div className="formInput">
            <label>Email</label>
            <input
              type="text"
              placeholder="Nhập email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="formInput">
            <label>Quyền hạn</label>
            <select id="role_user" value={role} onChange={onChangeRole}>
              <option value="user">Khách hàng</option>
              <option value="staff">Nhân viên</option>
              <option value="admin">Quản trị viên</option>
            </select>
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
