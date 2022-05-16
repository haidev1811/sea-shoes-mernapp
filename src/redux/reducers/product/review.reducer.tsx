import { AnyAction } from "redux";
import {
  DELETE_REVIEW_FAILURE,
  DELETE_REVIEW_REQUEST,
  DELETE_REVIEW_SUCCESS,
  GET_REVIEW_FAILURE,
  GET_REVIEW_REQUEST,
  GET_REVIEW_SUCCESS,
  POST_REVIEW_FAILURE,
  POST_REVIEW_REQUEST,
  POST_REVIEW_SUCCESS,
  UPDATE_REVIEW_FAILURE,
  UPDATE_REVIEW_REQUEST,
  UPDATE_REVIEW_SUCCESS,
} from "../../constants/product/review.constant";

interface reviewInfo {
  _id?: string;
  product?: string;
  user?: any;
  comment?: string;
  image?: string;
  createdAt?: any;
}

export interface reviewState {
  reviewInfo?: reviewInfo | null;
  isFetching?: boolean;
  success?: boolean;
  error?: boolean;
}

export interface reviewsState {
  reviewInfo?: Array<reviewInfo>;
  isFetching?: boolean;
  success?: boolean;
  error?: boolean;
}

export const reviewReducer = (state: reviewInfo, action: AnyAction) => {
  switch (action.type) {
    case GET_REVIEW_REQUEST:
      return {
        isFetching: true,
        success: false,
        error: false,
      };
    case GET_REVIEW_SUCCESS:
      return {
        reviewInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case GET_REVIEW_FAILURE:
      return {
        isFetching: false,
        success: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export const postReviewReducer = (state: reviewInfo, action: AnyAction) => {
  switch (action.type) {
    case POST_REVIEW_REQUEST:
      return {
        isFetching: true,
        success: false,
        error: false,
      };
    case POST_REVIEW_SUCCESS:
      return {
        reviewInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case POST_REVIEW_FAILURE:
      return {
        isFetching: false,
        error: true,
        success: false,
      };
    default:
      return { ...state };
  }
};

export const updateReviewReducer = (state: reviewInfo, action: AnyAction) => {
  switch (action.type) {
    case UPDATE_REVIEW_REQUEST:
      return {
        isFetching: true,
        error: false,
        success: false,
      };
    case UPDATE_REVIEW_SUCCESS:
      return {
        reviewInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case UPDATE_REVIEW_FAILURE:
      return {
        isFetching: false,
        error: true,
        success: false,
      };
    default:
      return { ...state };
  }
};

export const deleteReviewReducer = (state: reviewInfo, action: AnyAction) => {
  switch (action.type) {
    case DELETE_REVIEW_REQUEST:
      return {
        isFetching: true,
        error: false,
        success: false,
      };
    case DELETE_REVIEW_SUCCESS:
      return {
        reviewInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case DELETE_REVIEW_FAILURE:
      return {
        isFetching: false,
        error: true,
        success: false,
      };
    default:
      return { ...state };
  }
};
