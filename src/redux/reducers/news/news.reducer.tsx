import { AnyAction } from "redux";
import {
  CREATE_NEWS_FAILURE,
  CREATE_NEWS_REQUEST,
  CREATE_NEWS_SUCCESS,
  DELETE_NEWS_FAILURE,
  DELETE_NEWS_REQUEST,
  DELETE_NEWS_SUCCESS,
  GET_DETAIL_NEWS_FAILURE,
  GET_DETAIL_NEWS_REQUEST,
  GET_DETAIL_NEWS_SUCCESS,
  GET_LIST_NEWS_FAILURE,
  GET_LIST_NEWS_REQUEST,
  GET_LIST_NEWS_SUCCESS,
  GET_NEWS_FAILURE,
  GET_NEWS_ID_FAILURE,
  GET_NEWS_ID_REQUEST,
  GET_NEWS_ID_SUCCESS,
  GET_NEWS_REQUEST,
  GET_NEWS_SUCCESS,
  UPDATE_NEWS_FAILURE,
  UPDATE_NEWS_REQUEST,
  UPDATE_NEWS_SUCCESS,
} from "../../constants/news/news.constant";

interface newsInfo {
  _id?: string;
  author?: string;
  imgTitle?: string;
  title?: string;
  slug?: string;
  content?: any;
  createdAt?: any;
}

export interface newssInfo {
  news?: Array<newsInfo>;
  page?: number;
  pages?: number;
}

export interface newsState {
  newsInfo?: newsInfo | null;
  isFetching?: boolean;
  success?: boolean;
  error?: boolean;
}

export interface newssState {
  newsInfo?: Array<newsInfo>;
  isFetching?: boolean;
  success?: boolean;
  error?: boolean;
}

export interface listNewsState {
  newsInfo?: newssInfo | null;
  isFetching?: boolean;
  success?: boolean;
  error?: boolean;
}

export const listNewsReducer = (state: newsInfo, action: AnyAction) => {
  switch (action.type) {
    case GET_LIST_NEWS_REQUEST:
      return {
        isFetching: true,
        success: false,
        error: false,
      };
    case GET_LIST_NEWS_SUCCESS:
      return {
        newsInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case GET_LIST_NEWS_FAILURE:
      return {
        isFetching: false,
        success: false,
        error: true,
      };
    default:
      return { ...state };
  }
};
export const newsReducer = (state: newssInfo, action: AnyAction) => {
  switch (action.type) {
    case GET_NEWS_REQUEST:
      return {
        isFetching: true,
        success: false,
        error: false,
      };
    case GET_NEWS_SUCCESS:
      return {
        newsInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case GET_NEWS_FAILURE:
      return {
        isFetching: false,
        success: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export const detailNewsReducer = (state: newsInfo, action: AnyAction) => {
  switch (action.type) {
    case GET_DETAIL_NEWS_REQUEST:
      return {
        isFetching: true,
        error: false,
        success: false,
      };
    case GET_DETAIL_NEWS_SUCCESS:
      return {
        newsInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case GET_DETAIL_NEWS_FAILURE:
      return {
        isFetching: false,
        success: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export const newsIdReducer = (state: newsInfo, action: AnyAction) => {
  switch (action.type) {
    case GET_NEWS_ID_REQUEST:
      return {
        isFetching: true,
        success: false,
        error: false,
      };
    case GET_NEWS_ID_SUCCESS:
      return {
        newsInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case GET_NEWS_ID_FAILURE:
      return {
        isFetching: false,
        error: true,
        success: false,
      };
    default:
      return { ...state };
  }
};

export const createNewsReducer = (state: newsInfo, action: AnyAction) => {
  switch (action.type) {
    case CREATE_NEWS_REQUEST:
      return {
        isFetching: true,
        success: false,
        error: false,
      };
    case CREATE_NEWS_SUCCESS:
      return {
        newsInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case CREATE_NEWS_FAILURE:
      return {
        isFetching: false,
        error: true,
        success: false,
      };
    default:
      return { ...state };
  }
};

export const updateNewsReducer = (state: newsInfo, action: AnyAction) => {
  switch (action.type) {
    case UPDATE_NEWS_REQUEST:
      return {
        isFetching: true,
        error: false,
        success: false,
      };
    case UPDATE_NEWS_SUCCESS:
      return {
        newsInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case UPDATE_NEWS_FAILURE:
      return {
        isFetching: false,
        error: true,
        success: false,
      };
    default:
      return { ...state };
  }
};

export const deleteNewsReducer = (state: newsInfo, action: AnyAction) => {
  switch (action.type) {
    case DELETE_NEWS_REQUEST:
      return {
        isFetching: true,
        error: false,
        success: false,
      };
    case DELETE_NEWS_SUCCESS:
      return {
        newsInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case DELETE_NEWS_FAILURE:
      return {
        isFetching: false,
        error: true,
        success: false,
      };
    default:
      return { ...state };
  }
};
