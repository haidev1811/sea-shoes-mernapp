import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProfileUser } from "../../redux/actions/auth/user.action";
import { getMyOrder } from "../../redux/actions/order/order.action";
import { userState } from "../../redux/reducers/auth/user.reducer";
import { ordersState } from "../../redux/reducers/order/order.reducer";
import { RootState } from "../../redux/store";
import UpdateUserInformation from "./UpdateUserInformation";
import UserAddress from "./UserAddress";
import UserInformation from "./UserInformation";
import UserOrder from "./UserOrder";

const AccountPage = () => {
  const [toggle, setToggle] = useState(1);

  const toggleHandler = (index: number) => {
    setToggle(index);
  };

  const dispatch = useDispatch();

  const userProfile = useSelector<RootState, userState>(
    (state) => state.profileUser
  );
  const { userInfo } = userProfile;

  const myOrders = useSelector<RootState, ordersState>(
    (state) => state.myOrder
  );
  const { orderInfo, isFetching } = myOrders;

  useEffect(() => {
    dispatch(getProfileUser());
    dispatch(getMyOrder());
  }, [dispatch]);

  return (
    <div className="container-ct">
      <div className="row mt-5">
        <div className="col-xl-3 col-md-12">
          <div className="account__left">
            <div className="heading">TRANG TÀI KHOẢN</div>
            <div className="hello">
              Xin chào, {userInfo?.firstname} {userInfo?.lastname}!
            </div>
            <ul className="list-acc">
              <li className={`item ${toggle === 1 ? "active" : ""}`}>
                <Link to="#" onClick={() => toggleHandler(1)} className="link">
                  Thông tin tài khoản
                </Link>
              </li>
              <li className={`item ${toggle === 2 ? "active" : ""}`}>
                <Link to="#" onClick={() => toggleHandler(2)} className="link">
                  Cập nhật thông tin tài khoản
                </Link>
              </li>
              <li className={`item ${toggle === 3 ? "active" : ""}`}>
                <Link to="#" onClick={() => toggleHandler(3)} className="link">
                  Đơn hàng của bạn
                </Link>
              </li>
              <li className={`item ${toggle === 4 ? "active" : ""}`}>
                <Link to="#" onClick={() => toggleHandler(4)} className="link">
                  Địa chỉ của bạn
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-9 col-md-12">
          {toggle === 1 && <UserInformation userInfo={userInfo} />}
          {toggle === 2 && <UpdateUserInformation />}
          {toggle === 3 && (
            <UserOrder orderInfo={orderInfo} isFetching={isFetching} />
          )}
          {toggle === 4 && <UserAddress />}
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
