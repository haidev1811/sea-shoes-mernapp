import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../../store";
import axios from "../../../utils/axios";
import {
  ORDER_CANCEL_FAILURE,
  ORDER_CANCEL_REQUEST,
  ORDER_CANCEL_SUCCESS,
  ORDER_CREATE_FAILURE,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_DETAILS_FAILURE,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_LIST_FAILURE,
  ORDER_LIST_MY_FAILURE,
  ORDER_LIST_MY_REQUEST,
  ORDER_LIST_MY_SUCCESS,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_UPDATE_STATUS_FAILURE,
  ORDER_UPDATE_STATUS_REQUEST,
  ORDER_UPDATE_STATUS_SUCCESS,
} from "../../constants/order/order.constant";

export const getListOrder =
  (): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: ORDER_LIST_REQUEST });

      const token = JSON.parse(localStorage.getItem("sea-user")!).token;

      const config = {
        headers: {
          Authorization: token,
        },
      };

      const { data } = await axios.get("/order", config);
      dispatch({
        type: ORDER_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ORDER_LIST_FAILURE,
        payload: error,
      });
    }
  };

export const createOrder =
  ({
    orderItems,
    totalPrice,
    fullname,
    email,
    phoneNumber,
    shippingAddress,
    shippingPrice,
    paymentStatus,
  }: any): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: ORDER_CREATE_REQUEST });

      const token = JSON.parse(localStorage.getItem("sea-user")!).token;

      const config = {
        headers: {
          Authorization: token,
        },
      };

      const { data } = await axios.post(
        "/order/add",
        {
          orderItems,
          totalPrice,
          fullname,
          email,
          phoneNumber,
          shippingAddress,
          shippingPrice,
          paymentStatus,
        },
        config
      );
      dispatch({
        type: ORDER_CREATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ORDER_CREATE_FAILURE,
        payload: error,
      });
    }
  };

export const getDetailOrder =
  (id: string): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: ORDER_DETAILS_REQUEST });

      const token = JSON.parse(localStorage.getItem("sea-user")!).token;

      const config = {
        headers: {
          Authorization: token,
        },
      };

      const { data } = await axios.get(`/order/${id}`, config);
      dispatch({
        type: ORDER_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ORDER_DETAILS_FAILURE,
        payload: error,
      });
    }
  };

export const getMyOrder =
  (): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: ORDER_LIST_MY_REQUEST });

      const token = JSON.parse(localStorage.getItem("sea-user")!).token;

      const config = {
        headers: {
          Authorization: token,
        },
      };

      const { data } = await axios.get("/order/myorder", config);
      dispatch({
        type: ORDER_LIST_MY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ORDER_LIST_MY_FAILURE,
        payload: error,
      });
    }
  };

export const updateStatusOrder =
  ({
    id,
    paymentStatus,
    deliveryStatus,
  }: any): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: ORDER_UPDATE_STATUS_REQUEST });

      const token = JSON.parse(localStorage.getItem("sea-user")!).token;

      const config = {
        headers: {
          Authorization: token,
        },
      };

      const { data } = await axios.put(
        `/order/status/${id}`,
        { paymentStatus, deliveryStatus },
        config
      );
      dispatch({
        type: ORDER_UPDATE_STATUS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ORDER_UPDATE_STATUS_FAILURE,
        payload: error,
      });
    }
  };

export const cancelOrder =
  (id: string): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: ORDER_CANCEL_REQUEST });

      const token = JSON.parse(localStorage.getItem("sea-user")!).token;

      const config = {
        headers: {
          Authorization: token,
        },
      };

      const { data } = await axios.delete(`/order/${id}`, config);
      dispatch({
        type: ORDER_CANCEL_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ORDER_CANCEL_FAILURE,
        payload: error,
      });
    }
  };
