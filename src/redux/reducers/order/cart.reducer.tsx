import { AnyAction } from "redux";
import {
  ADD_CART_FAILURE,
  ADD_CART_REQUEST,
  ADD_CART_SUCCESS,
  DELETE_CART_FAILURE,
  DELETE_CART_REQUEST,
  DELETE_CART_SUCCESS,
  GET_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  UPDATE_QTY_CART_FAILURE,
  UPDATE_QTY_CART_REQUEST,
  UPDATE_QTY_CART_SUCCESS,
} from "../../constants/order/cart.constant";

interface cartInfo {
  _id?: string;
  product?: string;
  name?: string;
  slug?: string;
  image?: string;
  price?: number;
  discount?: number;
  inStock?: number;
  quantity?: number;
  size?: string;
  colour?: string;
}

export interface cartState {
  cartInfo?: cartInfo | null;
  isFetching?: boolean;
  success?: boolean;
  error?: boolean;
}

export interface cartsState {
  cartInfo: Array<cartInfo>;
  isFetching?: boolean;
  success?: boolean;
  error?: boolean;
}

export const cartReducer = (state: cartInfo, action: AnyAction) => {
  switch (action.type) {
    case GET_CART_REQUEST:
      return {
        isFetching: true,
        success: false,
        error: false,
      };
    case GET_CART_SUCCESS:
      return {
        cartInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case GET_CART_FAILURE:
      return {
        isFetching: false,
        success: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export const addCartReducer = (state: cartInfo, action: AnyAction) => {
  switch (action.type) {
    case ADD_CART_REQUEST:
      return {
        isFetching: true,
        success: false,
        error: false,
      };
    case ADD_CART_SUCCESS:
      return {
        cartInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case ADD_CART_FAILURE:
      return {
        isFetching: false,
        error: true,
        success: false,
      };
    default:
      return { ...state };
  }
};

export const updateQtyCartReducer = (state: cartInfo, action: AnyAction) => {
  switch (action.type) {
    case UPDATE_QTY_CART_REQUEST:
      return {
        isFetching: true,
        error: false,
        success: false,
      };
    case UPDATE_QTY_CART_SUCCESS:
      return {
        cartInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case UPDATE_QTY_CART_FAILURE:
      return {
        isFetching: false,
        error: true,
        success: false,
      };
    default:
      return { ...state };
  }
};

export const deleteCartReducer = (state: cartInfo, action: AnyAction) => {
  switch (action.type) {
    case DELETE_CART_REQUEST:
      return {
        isFetching: true,
        error: false,
        success: false,
      };
    case DELETE_CART_SUCCESS:
      return {
        cartInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case DELETE_CART_FAILURE:
      return {
        isFetching: false,
        error: true,
        success: false,
      };
    default:
      return { ...state };
  }
};
