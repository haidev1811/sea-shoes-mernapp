import { AnyAction } from "redux";
import {
  DELETE_USER_FAILURE,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  GET_DETAIL_USER_FAILURE,
  GET_DETAIL_USER_REQUEST,
  GET_DETAIL_USER_SUCCESS,
  GET_LIST_USER_FAILURE,
  GET_LIST_USER_REQUEST,
  GET_LIST_USER_SUCCESS,
  GET_PROFILE_USER_FAILURE,
  GET_PROFILE_USER_REQUEST,
  GET_PROFILE_USER_SUCCESS,
  UPDATE_PROFILE_USER_FAILURE,
  UPDATE_PROFILE_USER_REQUEST,
  UPDATE_PROFILE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
} from "../../constants/auth/user.constant";

interface userInfo {
  _id?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  avatar?: string;
  role?: any;
}

export interface userState {
  userInfo?: userInfo | null;
  isFetching?: boolean;
  success?: boolean;
  error?: boolean;
}

export interface usersState {
  userInfo?: Array<userInfo>;
  isFetching?: boolean;
  success?: boolean;
  error?: boolean;
}

export const listUserReducer = (state: userInfo, action: AnyAction) => {
  switch (action.type) {
    case GET_LIST_USER_REQUEST:
      return {
        isFetching: true,
        success: false,
        error: false,
      };
    case GET_LIST_USER_SUCCESS:
      return {
        userInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case GET_LIST_USER_FAILURE:
      return {
        isFetching: false,
        success: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export const userIdReducer = (state: userInfo, action: AnyAction) => {
  switch (action.type) {
    case GET_DETAIL_USER_REQUEST:
      return {
        isFetching: true,
        error: false,
        success: false,
      };
    case GET_DETAIL_USER_SUCCESS:
      return {
        userInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case GET_DETAIL_USER_FAILURE:
      return {
        isFetching: false,
        success: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export const profileUserReducer = (state: userInfo, action: AnyAction) => {
  switch (action.type) {
    case GET_PROFILE_USER_REQUEST:
      return {
        isFetching: true,
        success: false,
        error: false,
      };
    case GET_PROFILE_USER_SUCCESS:
      return {
        userInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case GET_PROFILE_USER_FAILURE:
      return {
        isFetching: false,
        error: true,
        success: false,
      };
    default:
      return { ...state };
  }
};

export const updateProfileUserReducer = (
  state: userInfo,
  action: AnyAction
) => {
  switch (action.type) {
    case UPDATE_PROFILE_USER_REQUEST:
      return {
        isFetching: true,
        success: false,
        error: false,
      };
    case UPDATE_PROFILE_USER_SUCCESS:
      return {
        userInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case UPDATE_PROFILE_USER_FAILURE:
      return {
        isFetching: false,
        error: true,
        success: false,
      };
    default:
      return { ...state };
  }
};

export const updateUserReducer = (state: userInfo, action: AnyAction) => {
  switch (action.type) {
    case UPDATE_USER_REQUEST:
      return {
        isFetching: true,
        error: false,
        success: false,
      };
    case UPDATE_USER_SUCCESS:
      return {
        userInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case UPDATE_USER_FAILURE:
      return {
        isFetching: false,
        error: true,
        success: false,
      };
    default:
      return { ...state };
  }
};

export const deleteUserReducer = (state: userInfo, action: AnyAction) => {
  switch (action.type) {
    case DELETE_USER_REQUEST:
      return {
        isFetching: true,
        error: false,
        success: false,
      };
    case DELETE_USER_SUCCESS:
      return {
        userInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case DELETE_USER_FAILURE:
      return {
        isFetching: false,
        error: true,
        success: false,
      };
    default:
      return { ...state };
  }
};
