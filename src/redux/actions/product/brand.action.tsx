import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../../store";
import axios from "../../../utils/axios";
import {
  CREATE_BRAND_FAILURE,
  CREATE_BRAND_REQUEST,
  CREATE_BRAND_SUCCESS,
  DELETE_BRAND_FAILURE,
  DELETE_BRAND_REQUEST,
  DELETE_BRAND_SUCCESS,
  GET_BRAND_FAILURE,
  GET_BRAND_REQUEST,
  GET_BRAND_SUCCESS,
  GET_DETAIL_BRAND_FAILURE,
  GET_DETAIL_BRAND_REQUEST,
  GET_DETAIL_BRAND_SUCCESS,
  GET_LIST_BRAND_FAILURE,
  GET_LIST_BRAND_REQUEST,
  GET_LIST_BRAND_SUCCESS,
  UPDATE_BRAND_FAILURE,
  UPDATE_BRAND_REQUEST,
  UPDATE_BRAND_SUCCESS,
} from "../../constants/product/brand.constant";

export const getListBrand =
  (): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: GET_LIST_BRAND_REQUEST });

      const { data } = await axios.get("/brand/list");
      dispatch({
        type: GET_LIST_BRAND_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_LIST_BRAND_FAILURE,
        payload: error,
      });
    }
  };

export const getBrand =
  (): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: GET_BRAND_REQUEST });

      const token = JSON.parse(localStorage.getItem("sea-user")!).token;

      const config = {
        headers: {
          Authorization: token,
        },
      };

      const { data } = await axios.get("/brand", config);
      dispatch({
        type: GET_BRAND_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_BRAND_FAILURE,
        payload: error,
      });
    }
  };

export const getDetailBrand =
  (id: string): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: GET_DETAIL_BRAND_REQUEST });

      const token = JSON.parse(localStorage.getItem("sea-user")!).token;

      const config = {
        headers: {
          Authorization: token,
        },
      };

      const { data } = await axios.get(`/brand/${id}`, config);
      dispatch({
        type: GET_DETAIL_BRAND_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_DETAIL_BRAND_FAILURE,
        payload: error,
      });
    }
  };

export const createBrand =
  (
    name: string,
    image: string
  ): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: CREATE_BRAND_REQUEST });

      const token = JSON.parse(localStorage.getItem("sea-user")!).token;

      const config = {
        headers: {
          Authorization: token,
        },
      };

      const { data } = await axios.post(`/brand/add`, { name, image }, config);
      dispatch({
        type: CREATE_BRAND_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_BRAND_FAILURE,
        payload: error,
      });
    }
  };

export const updateBrand =
  (
    id: string,
    name: string,
    image: string
  ): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: UPDATE_BRAND_REQUEST });

      const token = JSON.parse(localStorage.getItem("sea-user")!).token;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      };

      const { data } = await axios.put(`/brand/${id}`, { name, image }, config);
      dispatch({
        type: UPDATE_BRAND_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_BRAND_FAILURE,
        payload: error,
      });
    }
  };

export const deleteBrand =
  (id: string): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: DELETE_BRAND_REQUEST });

      const token = JSON.parse(localStorage.getItem("sea-user")!).token;

      const config = {
        headers: {
          Authorization: token,
        },
      };

      const { data } = await axios.delete(`/brand/${id}`, config);
      dispatch({
        type: DELETE_BRAND_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DELETE_BRAND_FAILURE,
        payload: error,
      });
    }
  };
