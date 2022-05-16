import { AnyAction } from "redux";
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

interface orderInfo {
  _id?: string;
  user?: string;
  orderItems?: any;
  email?: string;
  phoneNumber?: string;
  shippingAddress?: string;
  shippingPrice?: number;
  totalPrice?: number;
  paymentStatus?: string;
  deliveryStatus?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface orderState {
  orderInfo?: orderInfo | null;
  isFetching?: boolean;
  success?: boolean;
  error?: boolean;
}

export interface ordersState {
  orderInfo: Array<orderInfo>;
  isFetching?: boolean;
  success?: boolean;
  error?: boolean;
}

export const orderReducer = (state: orderInfo, action: AnyAction) => {
  switch (action.type) {
    case ORDER_LIST_REQUEST:
      return {
        isFetching: true,
        success: false,
        error: false,
      };
    case ORDER_LIST_SUCCESS:
      return {
        orderInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case ORDER_LIST_FAILURE:
      return {
        isFetching: false,
        success: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export const createOrderReducer = (state: orderInfo, action: AnyAction) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return {
        isFetching: true,
        success: false,
        error: false,
      };
    case ORDER_CREATE_SUCCESS:
      return {
        orderInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case ORDER_CREATE_FAILURE:
      return {
        isFetching: false,
        error: true,
        success: false,
      };
    default:
      return { ...state };
  }
};

export const detailOrderReducer = (state: orderInfo, action: AnyAction) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return {
        isFetching: true,
        success: false,
        error: false,
      };
    case ORDER_DETAILS_SUCCESS:
      return {
        orderInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case ORDER_DETAILS_FAILURE:
      return {
        isFetching: false,
        error: true,
        success: false,
      };
    default:
      return { ...state };
  }
};

export const myOrderReducer = (state: orderInfo, action: AnyAction) => {
  switch (action.type) {
    case ORDER_LIST_MY_REQUEST:
      return {
        isFetching: true,
        success: false,
        error: false,
      };
    case ORDER_LIST_MY_SUCCESS:
      return {
        orderInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case ORDER_LIST_MY_FAILURE:
      return {
        isFetching: false,
        error: true,
        success: false,
      };
    default:
      return { ...state };
  }
};

export const updateStatusOrderReducer = (
  state: orderInfo,
  action: AnyAction
) => {
  switch (action.type) {
    case ORDER_UPDATE_STATUS_REQUEST:
      return {
        isFetching: true,
        error: false,
        success: false,
      };
    case ORDER_UPDATE_STATUS_SUCCESS:
      return {
        orderInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case ORDER_UPDATE_STATUS_FAILURE:
      return {
        isFetching: false,
        error: true,
        success: false,
      };
    default:
      return { ...state };
  }
};

export const cancelOrderReducer = (state: orderInfo, action: AnyAction) => {
  switch (action.type) {
    case ORDER_CANCEL_REQUEST:
      return {
        isFetching: true,
        error: false,
        success: false,
      };
    case ORDER_CANCEL_SUCCESS:
      return {
        orderInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case ORDER_CANCEL_FAILURE:
      return {
        isFetching: false,
        error: true,
        success: false,
      };
    default:
      return { ...state };
  }
};
