import { AnyAction } from "redux";
import {
  CREATE_CATEGORY_FAILURE,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAILURE,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
  GET_CATEGORY_FAILURE,
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
  GET_DETAIL_CATEGORY_FAILURE,
  GET_DETAIL_CATEGORY_REQUEST,
  GET_DETAIL_CATEGORY_SUCCESS,
  GET_LIST_CATEGORY_FAILURE,
  GET_LIST_CATEGORY_REQUEST,
  GET_LIST_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_FAILURE,
  UPDATE_CATEGORY_REQUEST,
  UPDATE_CATEGORY_SUCCESS,
} from "../../constants/product/category.constant";

interface categoryInfo {
  _id?: string;
  name?: string;
  slug?: string;
}

export interface categoryState {
  categoryInfo?: categoryInfo | null;
  isFetching?: boolean;
  success?: boolean;
  error?: boolean;
}

export interface categoriesState {
  categoryInfo?: Array<categoryInfo>;
  isFetching?: boolean;
  success?: boolean;
  error?: boolean;
}

export const listCategoryReducer = (state: categoryInfo, action: AnyAction) => {
  switch (action.type) {
    case GET_LIST_CATEGORY_REQUEST:
      return {
        isFetching: true,
        error: false,
        success: false,
      };
    case GET_LIST_CATEGORY_SUCCESS:
      return {
        categoryInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case GET_LIST_CATEGORY_FAILURE:
      return {
        isFetching: false,
        error: true,
        success: false,
      };
    default:
      return { ...state };
  }
};

export const categoryReducer = (state: categoryInfo, action: AnyAction) => {
  switch (action.type) {
    case GET_CATEGORY_REQUEST:
      return {
        isFetching: true,
        error: false,
        success: false,
      };
    case GET_CATEGORY_SUCCESS:
      return {
        categoryInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case GET_CATEGORY_FAILURE:
      return {
        isFetching: false,
        error: true,
        success: false,
      };
    default:
      return { ...state };
  }
};

export const detailCategoryReducer = (
  state: categoryState,
  action: AnyAction
) => {
  switch (action.type) {
    case GET_DETAIL_CATEGORY_REQUEST:
      return {
        isFetching: true,
        error: false,
        success: false,
      };
    case GET_DETAIL_CATEGORY_SUCCESS:
      return {
        categoryInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case GET_DETAIL_CATEGORY_FAILURE:
      return {
        isFetching: false,
        error: true,
        success: false,
      };
    default:
      return { ...state };
  }
};

export const createCategoryReducer = (
  state: categoryState,
  action: AnyAction
) => {
  switch (action.type) {
    case CREATE_CATEGORY_REQUEST:
      return {
        isFetching: true,
        error: false,
        success: false,
      };
    case CREATE_CATEGORY_SUCCESS:
      return {
        categoryInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case CREATE_CATEGORY_FAILURE:
      return {
        isFetching: false,
        error: true,
        success: false,
      };
    default:
      return { ...state };
  }
};

export const updateCategoryReducer = (
  state: categoryState,
  action: AnyAction
) => {
  switch (action.type) {
    case UPDATE_CATEGORY_REQUEST:
      return {
        isFetching: true,
        error: false,
        success: false,
      };
    case UPDATE_CATEGORY_SUCCESS:
      return {
        categoryInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case UPDATE_CATEGORY_FAILURE:
      return {
        isFetching: false,
        error: true,
        success: false,
      };
    default:
      return { ...state };
  }
};

export const deleteCategoryReducer = (
  state: categoryState,
  action: AnyAction
) => {
  switch (action.type) {
    case DELETE_CATEGORY_REQUEST:
      return {
        isFetching: true,
        error: false,
        success: false,
      };
    case DELETE_CATEGORY_SUCCESS:
      return {
        categoryInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case DELETE_CATEGORY_FAILURE:
      return {
        isFetching: false,
        error: true,
        success: false,
      };
    default:
      return { ...state };
  }
};
