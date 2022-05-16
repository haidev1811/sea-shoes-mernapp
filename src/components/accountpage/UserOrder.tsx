import { CircularProgress } from "@mui/material";
import React from "react";
import dayjs from "dayjs";
import {
  checkPaymentStatus,
  checkDeliveryStatus,
} from "../../utils/datatablesource";

interface Props {
  orderInfo?: any;
  isFetching?: boolean;
}

const UserOrder = ({ orderInfo, isFetching }: Props) => {
  const toVND = (price: any) => {
    let vnd =
      typeof price === "undefined"
        ? 0
        : price.toLocaleString("vi-VN", {
            currency: "VND",
          });
    return vnd;
  };

  return (
    <div className="orders-my">
      <div className="heading">ĐƠN HÀNG CỦA TÔI</div>
      {isFetching ? (
        <CircularProgress />
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Ngày</th>
              <th>Tổng tiền</th>
              <th>Phí ship</th>
              <th>TT thanh toán</th>
              <th>TT vận chuyển</th>
            </tr>
          </thead>
          <tbody>
            {orderInfo.length === 0 ? (
              <td className="orders__no">Không có đơn hàng nào</td>
            ) : (
              orderInfo.map((order: any) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{dayjs(order.createdAt).format("DD/MM/YYYY")}</td>
                  <td>{toVND(order.totalPrice)}</td>
                  <td>{toVND(order.shippingPrice)}</td>
                  <td>{checkPaymentStatus(order.paymentStatus)}</td>
                  <td>{checkDeliveryStatus(order.deliveryStatus)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserOrder;
