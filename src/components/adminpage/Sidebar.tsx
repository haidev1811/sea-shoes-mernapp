import React, { useContext } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import { Link, useHistory } from "react-router-dom";
import { DarkModeContext } from "../../context/darkmode/darkModeContext";
import { CustomLinkAdmin } from "../index";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/auth/auth.action";

const Sidebar = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { dispatch: dispatchContext } = useContext(DarkModeContext);

  const userInfoFromStorage = localStorage.getItem("sea-user")
    ? JSON.parse(localStorage.getItem("sea-user")!)
    : null;

  const checkRole = userInfoFromStorage.user.role[0];

  const linkToAccount = () => {
    history.push("/account");
  };

  const handleLogout = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(logout());
    history.push("/");
    window.location.reload();
  };

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/admin" style={{ textDecoration: "none" }}>
          <span className="logo">Sea Shoes</span>
        </Link>
      </div>
      <div className="hr"></div>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <CustomLinkAdmin
            to="/admin"
            activeOnlyWhenExact={true}
            label={
              <>
                <DashboardIcon className="icon" />
                <span>Dashboard</span>
              </>
            }
          />
          <p className="title">Danh sách</p>
          {checkRole === "admin" && (
            <CustomLinkAdmin
              to="/admin/user"
              activeOnlyWhenExact={false}
              label={
                <>
                  <PersonOutlineIcon className="icon" />
                  <span>Người dùng</span>
                </>
              }
            />
          )}
          <CustomLinkAdmin
            to="/admin/product"
            activeOnlyWhenExact={false}
            label={
              <>
                <StoreIcon className="icon" />
                <span>Sản phẩm</span>
              </>
            }
          />
          <CustomLinkAdmin
            to="/admin/order"
            activeOnlyWhenExact={false}
            label={
              <>
                <CreditCardIcon className="icon" />
                <span>Đơn hàng</span>
              </>
            }
          />
          <CustomLinkAdmin
            to="/admin/news"
            activeOnlyWhenExact={false}
            label={
              <>
                <NewspaperIcon className="icon" />
                <span>Bài viết</span>
              </>
            }
          />
          <CustomLinkAdmin
            to="/admin/brand"
            activeOnlyWhenExact={false}
            label={
              <>
                <StorefrontOutlinedIcon className="icon" />
                <span>Thương hiệu</span>
              </>
            }
          />
          <CustomLinkAdmin
            to="/admin/category"
            activeOnlyWhenExact={false}
            label={
              <>
                <BookOutlinedIcon className="icon" />
                <span>Danh mục</span>
              </>
            }
          />
          <p className="title">Tiện ích</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Thống kê</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Thông báo</span>
          </li>
          <p className="title">Dịch vụ</p>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Nhật kí</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Cài đặt</span>
          </li>
          <p className="title">Cá nhân</p>
          <li onClick={linkToAccount}>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Hồ sơ</span>
          </li>
          <li onClick={handleLogout}>
            <ExitToAppIcon className="icon" />
            <span>Đăng xuất</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatchContext({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatchContext({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
