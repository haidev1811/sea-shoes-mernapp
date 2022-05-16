import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import { Navbar, DataTable } from "../../../components";
import { getListOrder } from "../../../redux/actions/order/order.action";
import {
  ordersState,
  orderState,
} from "../../../redux/reducers/order/order.reducer";
import { RootState } from "../../../redux/store";
import { orderColumns } from "../../../utils/datatablesource";
import { failureNoti, successNoti } from "../../../utils/notifications";

const ListUserPage = () => {
  const [reload, setReload] = useState<boolean>(false);

  const dispatch = useDispatch();

  const orderList = useSelector<RootState, ordersState>((state) => state.order);
  const { orderInfo, isFetching } = orderList;

  useEffect(() => {
    dispatch(getListOrder());
  }, [dispatch, reload]);

  const deletedOrder = useSelector<RootState, orderState>(
    (state) => state.cancelOrder
  );
  const { success, error } = deletedOrder;

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
          title="Danh sách đơn hàng"
          type="order"
          columns={orderColumns}
          rows={orderInfo}
          reload={reload}
          setReload={setReload}
        />
      )}
    </div>
  );
};

export default ListUserPage;
