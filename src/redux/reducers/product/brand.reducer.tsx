import { AnyAction } from "redux";
import {
  CREATE_BRAND_FAILURE,
  CREATE_BRAND_REQUEST,
  CREATE_BRAND_SUCCESS,
  DELETE_BRAND_FAILURE,
  DELETE_BRAND_REQUEST,
  DELETE_BRAND_SUCCESS,
  GET_BRAND_FAILURE,
  GET_BRAND_REQUEST,
  GET_BRAND_SUCCESS,
  GET_DETAIL_BRAND_FAILURE,
  GET_DETAIL_BRAND_REQUEST,
  GET_DETAIL_BRAND_SUCCESS,
  GET_LIST_BRAND_FAILURE,
  GET_LIST_BRAND_REQUEST,
  GET_LIST_BRAND_SUCCESS,
  UPDATE_BRAND_FAILURE,
  UPDATE_BRAND_REQUEST,
  UPDATE_BRAND_SUCCESS,
} from "../../constants/product/brand.constant";

interface brandInfo {
  _id?: string;
  name?: string;
  slug?: string;
  image?: string;
}

export interface brandState {
  brandInfo?: brandInfo | null;
  isFetching?: boolean;
  success?: boolean;
  error?: boolean;
}

export interface brandsState {
  brandInfo?: Array<brandInfo>;
  isFetching?: boolean;
  success?: boolean;
  error?: boolean;
}

export const listBrandReducer = (state: brandInfo, action: AnyAction) => {
  switch (action.type) {
    case GET_LIST_BRAND_REQUEST:
      return {
        isFetching: true,
        success: false,
        error: false,
      };
    case GET_LIST_BRAND_SUCCESS:
      return {
        brandInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case GET_LIST_BRAND_FAILURE:
      return {
        isFetching: false,
        success: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export const brandReducer = (state: brandInfo, action: AnyAction) => {
  switch (action.type) {
    case GET_BRAND_REQUEST:
      return {
        isFetching: true,
        error: false,
        success: false,
      };
    case GET_BRAND_SUCCESS:
      return {
        brandInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case GET_BRAND_FAILURE:
      return {
        isFetching: false,
        success: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export const detailBrandReducer = (state: brandInfo, action: AnyAction) => {
  switch (action.type) {
    case GET_DETAIL_BRAND_REQUEST:
      return {
        isFetching: true,
        success: false,
        error: false,
      };
    case GET_DETAIL_BRAND_SUCCESS:
      return {
        brandInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case GET_DETAIL_BRAND_FAILURE:
      return {
        isFetching: false,
        error: true,
        success: false,
      };
    default:
      return { ...state };
  }
};

export const createBrandReducer = (state: brandState, action: AnyAction) => {
  switch (action.type) {
    case CREATE_BRAND_REQUEST:
      return {
        isFetching: true,
        success: false,
        error: false,
      };
    case CREATE_BRAND_SUCCESS:
      return {
        brandInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case CREATE_BRAND_FAILURE:
      return {
        isFetching: false,
        error: true,
        success: false,
      };
    default:
      return { ...state };
  }
};

export const updateBrandReducer = (state: brandInfo, action: AnyAction) => {
  switch (action.type) {
    case UPDATE_BRAND_REQUEST:
      return {
        isFetching: true,
        error: false,
        success: false,
      };
    case UPDATE_BRAND_SUCCESS:
      return {
        brandInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case UPDATE_BRAND_FAILURE:
      return {
        isFetching: false,
        error: true,
        success: false,
      };
    default:
      return { ...state };
  }
};

export const deleteBrandReducer = (state: brandInfo, action: AnyAction) => {
  switch (action.type) {
    case DELETE_BRAND_REQUEST:
      return {
        isFetching: true,
        error: false,
        success: false,
      };
    case DELETE_BRAND_SUCCESS:
      return {
        brandInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case DELETE_BRAND_FAILURE:
      return {
        isFetching: false,
        error: true,
        success: false,
      };
    default:
      return { ...state };
  }
};
