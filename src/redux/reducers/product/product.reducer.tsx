import { AnyAction } from "redux";
import {
  CREATE_PRODUCT_FAILURE,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  GET_DETAIL_ID_PRODUCT_FAILURE,
  GET_DETAIL_ID_PRODUCT_REQUEST,
  GET_DETAIL_ID_PRODUCT_SUCCESS,
  GET_DETAIL_PRODUCT_FAILURE,
  GET_DETAIL_PRODUCT_REQUEST,
  GET_DETAIL_PRODUCT_SUCCESS,
  GET_LIST_PRODUCT_FAILURE,
  GET_LIST_PRODUCT_REQUEST,
  GET_LIST_PRODUCT_SUCCESS,
  GET_PRODUCT_BRAND_FAILURE,
  GET_PRODUCT_BRAND_REQUEST,
  GET_PRODUCT_BRAND_SUCCESS,
  GET_PRODUCT_FILTER_FAILURE,
  GET_PRODUCT_FILTER_REQUEST,
  GET_PRODUCT_FILTER_SUCCESS,
  SEARCH_NAME_PRODUCT_FAILURE,
  SEARCH_NAME_PRODUCT_REQUEST,
  SEARCH_NAME_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILURE,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
} from "../../constants/product/product.constant";

interface productInfo {
  _id: string;
  name: string;
  slug: string;
  image1: any;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  price: number;
  sold: number;
  inStock: number;
  discount: number;
  description: any;
  size: any;
  colour: any;
  brand: string;
  category: string;
  type: string;
}

interface productsInfo {
  products?: Array<productInfo>;
}

export interface productFilterInfo {
  products?: Array<productInfo>;
  page?: number;
  pages?: number;
}

export interface productState {
  productInfo?: productInfo | null;
  isFetching?: boolean;
  success?: boolean;
  error?: boolean;
}

export interface productsState {
  productInfo?: productsInfo | null;
  isFetching?: boolean;
  success?: boolean;
  error?: boolean;
}

export interface productFilterState {
  productInfo?: productFilterInfo | null;
  isFetching?: boolean;
  success?: boolean;
  error?: boolean;
}

export const listProductReducer = (state: productsInfo, action: AnyAction) => {
  switch (action.type) {
    case GET_LIST_PRODUCT_REQUEST:
      return {
        isFetching: true,
        success: false,
        error: false,
      };
    case GET_LIST_PRODUCT_SUCCESS:
      return {
        productInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case GET_LIST_PRODUCT_FAILURE:
      return {
        isFetching: false,
        success: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export const listProductFilterReducer = (
  state: productFilterInfo,
  action: AnyAction
) => {
  switch (action.type) {
    case GET_PRODUCT_FILTER_REQUEST:
      return {
        isFetching: true,
        success: false,
        error: false,
      };
    case GET_PRODUCT_FILTER_SUCCESS:
      return {
        productInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case GET_PRODUCT_FILTER_FAILURE:
      return {
        isFetching: false,
        success: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export const listProductBrandReducer = (
  state: productFilterInfo,
  action: AnyAction
) => {
  switch (action.type) {
    case GET_PRODUCT_BRAND_REQUEST:
      return {
        isFetching: true,
        success: false,
        error: false,
      };
    case GET_PRODUCT_BRAND_SUCCESS:
      return {
        productInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case GET_PRODUCT_BRAND_FAILURE:
      return {
        isFetching: false,
        success: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export const searchProductReducer = (
  state: productFilterInfo,
  action: AnyAction
) => {
  switch (action.type) {
    case SEARCH_NAME_PRODUCT_REQUEST:
      return {
        isFetching: true,
        success: false,
        error: false,
      };
    case SEARCH_NAME_PRODUCT_SUCCESS:
      return {
        productInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case SEARCH_NAME_PRODUCT_FAILURE:
      return {
        isFetching: false,
        success: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export const detailProductReducer = (state: productInfo, action: AnyAction) => {
  switch (action.type) {
    case GET_DETAIL_PRODUCT_REQUEST:
      return {
        isFetching: true,
        error: false,
        success: false,
      };
    case GET_DETAIL_PRODUCT_SUCCESS:
      return {
        productInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case GET_DETAIL_PRODUCT_FAILURE:
      return {
        isFetching: false,
        success: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export const detailProductIdReducer = (
  state: productInfo,
  action: AnyAction
) => {
  switch (action.type) {
    case GET_DETAIL_ID_PRODUCT_REQUEST:
      return {
        isFetching: true,
        success: false,
        error: false,
      };
    case GET_DETAIL_ID_PRODUCT_SUCCESS:
      return {
        productInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case GET_DETAIL_ID_PRODUCT_FAILURE:
      return {
        isFetching: false,
        error: true,
        success: false,
      };
    default:
      return { ...state };
  }
};

export const createProductReducer = (state: productInfo, action: AnyAction) => {
  switch (action.type) {
    case CREATE_PRODUCT_REQUEST:
      return {
        isFetching: true,
        success: false,
        error: false,
      };
    case CREATE_PRODUCT_SUCCESS:
      return {
        productInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case CREATE_PRODUCT_FAILURE:
      return {
        isFetching: false,
        error: true,
        success: false,
      };
    default:
      return { ...state };
  }
};

export const updateProductReducer = (state: productInfo, action: AnyAction) => {
  switch (action.type) {
    case UPDATE_PRODUCT_REQUEST:
      return {
        isFetching: true,
        error: false,
        success: false,
      };
    case UPDATE_PRODUCT_SUCCESS:
      return {
        productInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case UPDATE_PRODUCT_FAILURE:
      return {
        isFetching: false,
        error: true,
        success: false,
      };
    default:
      return { ...state };
  }
};

export const deleteProductReducer = (state: productInfo, action: AnyAction) => {
  switch (action.type) {
    case DELETE_PRODUCT_REQUEST:
      return {
        isFetching: true,
        error: false,
        success: false,
      };
    case DELETE_PRODUCT_SUCCESS:
      return {
        productInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case DELETE_PRODUCT_FAILURE:
      return {
        isFetching: false,
        error: true,
        success: false,
      };
    default:
      return { ...state };
  }
};
