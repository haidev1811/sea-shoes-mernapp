import React from "react";

interface Props {
  userInfo?: any;
}

const UserInformation = ({ userInfo }: Props) => {
  return (
    <div className="profile">
      <div className="heading">THÔNG TIN TÀI KHOẢN</div>
      <div className="avatar-profile">
        <div className="avatar-picture">
          <img
            src={
              userInfo?.avatar
                ? userInfo?.avatar
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
            alt=""
          />
        </div>
      </div>
      <ul className="profile__list">
        <li className="profile__item">
          Họ tên:{" "}
          <span>
            {userInfo?.firstname} {userInfo?.lastname}
          </span>
        </li>
        <li className="profile__item">
          Email: <span>{userInfo?.email}</span>
        </li>
      </ul>
    </div>
  );
};

export default UserInformation;
