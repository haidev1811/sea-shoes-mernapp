import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../../redux/actions/auth/auth.action";
import { authState } from "../../../redux/reducers/auth/auth.reducer";
import { RootState } from "../../../redux/store";

const TopHeader = () => {
  const dispatch = useDispatch();

  const auth = useSelector<RootState, authState>((state) => state.authLogin);
  const { authInfo } = auth;

  const handleLogout = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(logout());
    window.location.reload();
  };

  return (
    <div className="topheader">
      <div className="container-ct">
        <div className="row-ct">
          <div className="topheader__contact col-ct">
            <a href="mailto:seateam1811@gmail.com" className="link">
              seateam1811@gmail.com
            </a>
            <span>/</span>
            <a href="tel:0123456789" className="link">
              0123456789
            </a>
          </div>
          <div className="d-flex">
            {authInfo ? (
              <>
                {authInfo.user?.role[0] === "admin" ? (
                  <div className="topheader__auth col-ct">
                    <Link to="/admin" className="link">
                      Quản trị viên
                    </Link>
                  </div>
                ) : authInfo.user?.role[0] === "staff" ? (
                  <div className="topheader__auth col-ct">
                    <Link to="/admin" className="link">
                      Nhân viên
                    </Link>
                  </div>
                ) : (
                  <></>
                )}
                <div className="topheader__auth col-ct">
                  <Link to="/account" className="link">
                    Xin chào, {authInfo.user?.firstname}{" "}
                    {authInfo.user?.lastname}
                  </Link>
                  <span>/</span>
                  <Link to="/" className="link" onClick={handleLogout}>
                    Thoát
                  </Link>
                </div>
              </>
            ) : (
              <div className="topheader__auth col-ct">
                <Link to="/signup" className="link">
                  Đăng ký
                </Link>
                <span>/</span>
                <Link to="/login" className="link">
                  Đăng nhập
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
