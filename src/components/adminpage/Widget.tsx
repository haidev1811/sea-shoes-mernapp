import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { Link } from "react-router-dom";

interface Props {
  type: any;
}

const Widget = ({ type }: Props) => {
  let data;

  switch (type) {
    case "user":
      data = {
        title: "KHÁCH HÀNG",
        isMoney: false,
        link: "Xem danh sách khách hàng",
        amount: 20,
        diff: 10,
        url: "/admin/user",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ĐƠN HÀNG",
        isMoney: false,
        link: "Xem tất cả đơn hàng",
        amount: 15,
        diff: 20,
        url: "/admin/order",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "DOANH THU",
        isMoney: true,
        link: "Xem doanh thu",
        amount: "45.000.000",
        diff: 14,
        url: "/admin",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "LỢI NHUẬN",
        isMoney: true,
        link: "Xem chi tiết",
        amount: "15.000.000",
        diff: 20,
        url: "/admin",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data?.title}</span>
        <span className="counter">
          {data?.amount}
          {data?.isMoney && "₫"}
        </span>
        <Link to={`${data?.url}`} className="link">
          {data?.link}
        </Link>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {data?.diff} %
        </div>
        {data?.icon}
      </div>
    </div>
  );
};

export default Widget;
