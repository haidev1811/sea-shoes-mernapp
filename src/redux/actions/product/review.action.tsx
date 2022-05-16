import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../../store";
import axios from "../../../utils/axios";
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

export const getReview =
  (id: string): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: GET_REVIEW_REQUEST });

      const { data } = await axios.get(`/review/list/${id}`);
      dispatch({
        type: GET_REVIEW_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_REVIEW_FAILURE,
        payload: error,
      });
    }
  };

export const postReview =
  ({
    product,
    user,
    comment,
    image,
  }: any): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: POST_REVIEW_REQUEST });

      const token = JSON.parse(localStorage.getItem("sea-user")!).token;

      const config = {
        headers: {
          Authorization: token,
        },
      };

      const { data } = await axios.post(
        `/review/add`,
        { product, user, comment, image },
        config
      );
      dispatch({
        type: POST_REVIEW_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: POST_REVIEW_FAILURE,
        payload: error,
      });
    }
  };

export const updateReview =
  ({
    id,
    comment,
    image,
  }: any): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: UPDATE_REVIEW_REQUEST });

      const token = JSON.parse(localStorage.getItem("sea-user")!).token;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      };

      const { data } = await axios.put(
        `/review/${id}`,
        { comment, image },
        config
      );
      dispatch({
        type: UPDATE_REVIEW_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_REVIEW_FAILURE,
        payload: error,
      });
    }
  };

export const deleteReview =
  (id: string): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: DELETE_REVIEW_REQUEST });

      const token = JSON.parse(localStorage.getItem("sea-user")!).token;

      const config = {
        headers: {
          Authorization: token,
        },
      };

      const { data } = await axios.delete(`/review/${id}`, config);
      dispatch({
        type: DELETE_REVIEW_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DELETE_REVIEW_FAILURE,
        payload: error,
      });
    }
  };
