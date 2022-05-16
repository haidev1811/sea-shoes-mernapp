import { AnyAction } from "redux";
import {
  DELETE_COMMENT_FAILURE,
  DELETE_COMMENT_REQUEST,
  DELETE_COMMENT_SUCCESS,
  GET_COMMENT_FAILURE,
  GET_COMMENT_REQUEST,
  GET_COMMENT_SUCCESS,
  POST_COMMENT_FAILURE,
  POST_COMMENT_REQUEST,
  POST_COMMENT_SUCCESS,
  UPDATE_COMMENT_FAILURE,
  UPDATE_COMMENT_REQUEST,
  UPDATE_COMMENT_SUCCESS,
} from "../../constants/news/comment.constant";

interface commentInfo {
  _id?: string;
  product?: string;
  user?: any;
  comment?: string;
  image?: string;
  createdAt?: any;
}

export interface reviewState {
  commentInfo?: commentInfo | null;
  isFetching?: boolean;
  success?: boolean;
  error?: boolean;
}

export interface commentsState {
  commentInfo?: Array<commentInfo>;
  isFetching?: boolean;
  success?: boolean;
  error?: boolean;
}

export const commentReducer = (state: commentInfo, action: AnyAction) => {
  switch (action.type) {
    case GET_COMMENT_REQUEST:
      return {
        isFetching: true,
        success: false,
        error: false,
      };
    case GET_COMMENT_SUCCESS:
      return {
        commentInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case GET_COMMENT_FAILURE:
      return {
        isFetching: false,
        success: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export const postCommentReducer = (state: commentInfo, action: AnyAction) => {
  switch (action.type) {
    case POST_COMMENT_REQUEST:
      return {
        isFetching: true,
        success: false,
        error: false,
      };
    case POST_COMMENT_SUCCESS:
      return {
        commentInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case POST_COMMENT_FAILURE:
      return {
        isFetching: false,
        error: true,
        success: false,
      };
    default:
      return { ...state };
  }
};

export const updateCommentReducer = (state: commentInfo, action: AnyAction) => {
  switch (action.type) {
    case UPDATE_COMMENT_REQUEST:
      return {
        isFetching: true,
        error: false,
        success: false,
      };
    case UPDATE_COMMENT_SUCCESS:
      return {
        commentInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case UPDATE_COMMENT_FAILURE:
      return {
        isFetching: false,
        error: true,
        success: false,
      };
    default:
      return { ...state };
  }
};

export const deleteCommentReducer = (state: commentInfo, action: AnyAction) => {
  switch (action.type) {
    case DELETE_COMMENT_REQUEST:
      return {
        isFetching: true,
        error: false,
        success: false,
      };
    case DELETE_COMMENT_SUCCESS:
      return {
        commentInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case DELETE_COMMENT_FAILURE:
      return {
        isFetching: false,
        error: true,
        success: false,
      };
    default:
      return { ...state };
  }
};
