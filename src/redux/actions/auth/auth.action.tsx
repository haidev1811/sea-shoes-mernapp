import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../../store";
import axios from "../../../utils/axios";
import {
  AUTH_LOGIN_FAILED,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGOUT,
  AUTH_REGISTER_FAILED,
  AUTH_REGISTER_REQUEST,
  AUTH_REGISTER_SUCCESS,
} from "../../constants/auth/auth.constant";

export const login =
  (
    email: string,
    password: string
  ): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: AUTH_LOGIN_REQUEST });

      const { data } = await axios.post("/auth/login", { email, password });
      dispatch({
        type: AUTH_LOGIN_SUCCESS,
        payload: data,
      });
      localStorage.setItem("sea-user", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: AUTH_LOGIN_FAILED,
        payload: error,
      });
    }
  };

export const register =
  (
    firstname: string,
    lastname: string,
    email: string,
    password: string
  ): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: AUTH_REGISTER_REQUEST });

      const { data } = await axios.post("/auth/register", {
        firstname,
        lastname,
        email,
        password,
      });
      dispatch({
        type: AUTH_REGISTER_SUCCESS,
        payload: data,
      });
      localStorage.setItem("sea-user", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: AUTH_REGISTER_FAILED,
        payload: error,
      });
    }
  };

export const logout =
  (): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    dispatch({
      type: AUTH_LOGOUT,
    });
    localStorage.removeItem("sea-user");
    localStorage.removeItem("sea-cart-items");
  };
