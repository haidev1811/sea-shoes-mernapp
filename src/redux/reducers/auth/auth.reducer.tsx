import { AnyAction } from "redux";
import {
  AUTH_LOGIN_FAILED,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
  AUTH_REGISTER_FAILED,
  AUTH_REGISTER_REQUEST,
  AUTH_REGISTER_SUCCESS,
} from "../../constants/auth/auth.constant";

interface userInfo {
  _id?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  avatar?: string;
  role?: any;
}

interface authInfo {
  user?: userInfo;
  token?: string;
}

export interface authState {
  authInfo?: authInfo | null;
  isFetching?: boolean;
  success?: boolean;
  error?: boolean;
}

export const authLoginReducer = (state: authInfo, action: AnyAction) => {
  switch (action.type) {
    case AUTH_LOGIN_REQUEST:
      return {
        isFetching: true,
        success: false,
        error: false,
      };
    case AUTH_LOGIN_SUCCESS:
      return {
        authInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case AUTH_LOGIN_FAILED:
      return {
        isFetching: false,
        success: false,
        error: true,
      };
    case AUTH_LOGOUT:
      return {
        authInfo: null,
        isFetching: false,
        success: false,
        error: false,
      };
    default:
      return { ...state };
  }
};

export const authRegisterReducer = (state: authInfo, action: AnyAction) => {
  switch (action.type) {
    case AUTH_REGISTER_REQUEST:
      return {
        isFetching: true,
        success: false,
        error: false,
      };
    case AUTH_REGISTER_SUCCESS:
      return {
        authInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case AUTH_REGISTER_FAILED:
      return {
        isFetching: false,
        success: false,
        error: true,
      };
    case AUTH_LOGOUT:
      return {
        authInfo: null,
        isFetching: false,
        success: false,
        error: false,
      };
    default:
      return { ...state };
  }
};
