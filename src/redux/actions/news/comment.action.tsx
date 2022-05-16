import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../../store";
import axios from "../../../utils/axios";
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

export const getComment =
  (id: string): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: GET_COMMENT_REQUEST });

      const { data } = await axios.get(`/comment/list/${id}`);
      dispatch({
        type: GET_COMMENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_COMMENT_FAILURE,
        payload: error,
      });
    }
  };

export const postComment =
  ({
    news,
    user,
    comment,
    image,
  }: any): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: POST_COMMENT_REQUEST });

      const token = JSON.parse(localStorage.getItem("sea-user")!).token;

      const config = {
        headers: {
          Authorization: token,
        },
      };

      const { data } = await axios.post(
        `/comment/add`,
        { news, user, comment, image },
        config
      );
      dispatch({
        type: POST_COMMENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: POST_COMMENT_FAILURE,
        payload: error,
      });
    }
  };

export const updateComment =
  ({
    id,
    comment,
    image,
  }: any): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: UPDATE_COMMENT_REQUEST });

      const token = JSON.parse(localStorage.getItem("sea-user")!).token;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      };

      const { data } = await axios.put(
        `/comment/${id}`,
        { comment, image },
        config
      );
      dispatch({
        type: UPDATE_COMMENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_COMMENT_FAILURE,
        payload: error,
      });
    }
  };

export const deleteComment =
  (id: string): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: DELETE_COMMENT_REQUEST });

      const token = JSON.parse(localStorage.getItem("sea-user")!).token;

      const config = {
        headers: {
          Authorization: token,
        },
      };

      const { data } = await axios.delete(`/comment/${id}`, config);
      dispatch({
        type: DELETE_COMMENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DELETE_COMMENT_FAILURE,
        payload: error,
      });
    }
  };
