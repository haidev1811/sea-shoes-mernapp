import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../../store";
import axios from "../../../utils/axios";
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

export const getListUser =
  (): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: GET_LIST_USER_REQUEST });

      const token = JSON.parse(localStorage.getItem("sea-user")!).token;

      const config = {
        headers: {
          Authorization: token,
        },
      };

      const { data } = await axios.get("/user", config);
      dispatch({
        type: GET_LIST_USER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_LIST_USER_FAILURE,
        payload: error,
      });
    }
  };

export const getUserId =
  (id: string): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: GET_DETAIL_USER_REQUEST });

      const token = JSON.parse(localStorage.getItem("sea-user")!).token;

      const config = {
        headers: {
          Authorization: token,
        },
      };

      const { data } = await axios.get(`/user/${id}`, config);
      dispatch({
        type: GET_DETAIL_USER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_DETAIL_USER_FAILURE,
        payload: error,
      });
    }
  };

export const getProfileUser =
  (): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: GET_PROFILE_USER_REQUEST });

      const token = JSON.parse(localStorage.getItem("sea-user")!).token;

      const config = {
        headers: {
          Authorization: token,
        },
      };

      const { data } = await axios.get("/user/profile", config);
      dispatch({
        type: GET_PROFILE_USER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_PROFILE_USER_FAILURE,
        payload: error,
      });
    }
  };

export const updateProfileUser =
  ({
    firstname,
    lastname,
    avatar,
    password,
  }: any): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: UPDATE_PROFILE_USER_REQUEST });

      let payload = {};
      if (firstname) {
        payload = {
          ...payload,
          firstname,
        };
      }
      if (lastname) {
        payload = {
          ...payload,
          lastname,
        };
      }
      if (avatar) {
        payload = {
          ...payload,
          avatar,
        };
      }
      if (password) {
        payload = {
          ...payload,
          password,
        };
      }

      const token = JSON.parse(localStorage.getItem("sea-user")!).token;

      const config = {
        headers: {
          Authorization: token,
        },
      };

      const { data } = await axios.put("/user/profile", payload, config);
      dispatch({
        type: UPDATE_PROFILE_USER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_PROFILE_USER_FAILURE,
        payload: error,
      });
    }
  };

export const updateUser =
  ({
    id,
    firstname,
    lastname,
    email,
    role,
  }: any): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: UPDATE_USER_REQUEST });

      const token = JSON.parse(localStorage.getItem("sea-user")!).token;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      };

      const { data } = await axios.put(
        `/user/${id}`,
        { firstname, lastname, email, role },
        config
      );
      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_USER_FAILURE,
        payload: error,
      });
    }
  };

export const deleteUser =
  (id: string): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: DELETE_USER_REQUEST });

      const token = JSON.parse(localStorage.getItem("sea-user")!).token;

      const config = {
        headers: {
          Authorization: token,
        },
      };

      const { data } = await axios.delete(`/user/${id}`, config);
      dispatch({
        type: DELETE_USER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DELETE_USER_FAILURE,
        payload: error,
      });
    }
  };
