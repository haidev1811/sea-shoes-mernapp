import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../../store";
import axios from "../../../utils/axios";
import {
  GET_LIST_CATEGORY_REQUEST,
  GET_LIST_CATEGORY_SUCCESS,
  GET_LIST_CATEGORY_FAILURE,
  GET_DETAIL_CATEGORY_REQUEST,
  GET_DETAIL_CATEGORY_SUCCESS,
  GET_DETAIL_CATEGORY_FAILURE,
  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_FAILURE,
  UPDATE_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_REQUEST,
  UPDATE_CATEGORY_FAILURE,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAILURE,
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAILURE,
} from "../../constants/product/category.constant";

export const getListCategory =
  (): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: GET_LIST_CATEGORY_REQUEST });

      const { data } = await axios.get("/category/list");
      dispatch({
        type: GET_LIST_CATEGORY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_LIST_CATEGORY_FAILURE,
        payload: error,
      });
    }
  };

export const getCategory =
  (): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: GET_CATEGORY_REQUEST });

      const token = JSON.parse(localStorage.getItem("sea-user")!).token;

      const config = {
        headers: {
          Authorization: token,
        },
      };

      const { data } = await axios.get("/category", config);
      dispatch({
        type: GET_CATEGORY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_CATEGORY_FAILURE,
        payload: error,
      });
    }
  };

export const getDetailCategory =
  (id: string): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: GET_DETAIL_CATEGORY_REQUEST });

      const token = JSON.parse(localStorage.getItem("sea-user")!).token;

      const config = {
        headers: {
          Authorization: token,
        },
      };

      const { data } = await axios.get(`/category/${id}`, config);
      dispatch({
        type: GET_DETAIL_CATEGORY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_DETAIL_CATEGORY_FAILURE,
        payload: error,
      });
    }
  };

export const createCategory =
  (name: string): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: CREATE_CATEGORY_REQUEST });

      const token = JSON.parse(localStorage.getItem("sea-user")!).token;

      const config = {
        headers: {
          Authorization: token,
        },
      };

      const { data } = await axios.post(`/category/add`, { name }, config);
      dispatch({
        type: CREATE_CATEGORY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_CATEGORY_FAILURE,
        payload: error,
      });
    }
  };

export const updateCategory =
  (
    id: string,
    name: string
  ): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: UPDATE_CATEGORY_REQUEST });

      const token = JSON.parse(localStorage.getItem("sea-user")!).token;

      const config = {
        headers: {
          Authorization: token,
        },
      };

      const { data } = await axios.put(`/category/${id}`, { name }, config);
      dispatch({
        type: UPDATE_CATEGORY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_CATEGORY_FAILURE,
        payload: error,
      });
    }
  };

export const deleteCategory =
  (id: string): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: DELETE_CATEGORY_REQUEST });

      const token = JSON.parse(localStorage.getItem("sea-user")!).token;

      const config = {
        headers: {
          Authorization: token,
        },
      };

      const { data } = await axios.delete(`/category/${id}`, config);
      dispatch({
        type: DELETE_CATEGORY_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DELETE_CATEGORY_FAILURE,
        payload: error,
      });
    }
  };
