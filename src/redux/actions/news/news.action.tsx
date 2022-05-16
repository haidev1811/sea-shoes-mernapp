import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../../store";
import axios from "../../../utils/axios";
import {
  CREATE_NEWS_FAILURE,
  CREATE_NEWS_REQUEST,
  CREATE_NEWS_SUCCESS,
  DELETE_NEWS_FAILURE,
  DELETE_NEWS_REQUEST,
  DELETE_NEWS_SUCCESS,
  GET_DETAIL_NEWS_FAILURE,
  GET_DETAIL_NEWS_REQUEST,
  GET_DETAIL_NEWS_SUCCESS,
  GET_LIST_NEWS_FAILURE,
  GET_LIST_NEWS_REQUEST,
  GET_LIST_NEWS_SUCCESS,
  GET_NEWS_FAILURE,
  GET_NEWS_ID_FAILURE,
  GET_NEWS_ID_REQUEST,
  GET_NEWS_ID_SUCCESS,
  GET_NEWS_REQUEST,
  GET_NEWS_SUCCESS,
  UPDATE_NEWS_FAILURE,
  UPDATE_NEWS_REQUEST,
  UPDATE_NEWS_SUCCESS,
} from "../../constants/news/news.constant";

export const getListNews =
  (): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: GET_LIST_NEWS_REQUEST });

      const { data } = await axios.get("/news/list");
      dispatch({
        type: GET_LIST_NEWS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_LIST_NEWS_FAILURE,
        payload: error,
      });
    }
  };

export const getNews =
  ({
    pageNumber,
  }: any): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: GET_NEWS_REQUEST });

      let payload = {};
      if (pageNumber) {
        payload = {
          ...payload,
          pageNumber,
        };
      }

      const { data } = await axios.get("/news", { params: payload });
      dispatch({
        type: GET_NEWS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_NEWS_FAILURE,
        payload: error,
      });
    }
  };

export const getDetailNews =
  (slug: string): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: GET_DETAIL_NEWS_REQUEST });

      const { data } = await axios.get(`/news/${slug}`);
      dispatch({
        type: GET_DETAIL_NEWS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_DETAIL_NEWS_FAILURE,
        payload: error,
      });
    }
  };

export const getNewsId =
  (id: string): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: GET_NEWS_ID_REQUEST });

      const token = JSON.parse(localStorage.getItem("sea-user")!).token;

      const config = {
        headers: {
          Authorization: token,
        },
      };

      const { data } = await axios.get(`/news/item/${id}`, config);
      dispatch({
        type: GET_NEWS_ID_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_NEWS_ID_FAILURE,
        payload: error,
      });
    }
  };

export const createNews =
  (
    author: string,
    imgTitle: string,
    title: string,
    content: string
  ): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: CREATE_NEWS_REQUEST });

      const token = JSON.parse(localStorage.getItem("sea-user")!).token;

      const config = {
        headers: {
          Authorization: token,
        },
      };

      const { data } = await axios.post(
        "/news/add",
        { author, imgTitle, title, content },
        config
      );
      dispatch({
        type: CREATE_NEWS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_NEWS_FAILURE,
        payload: error,
      });
    }
  };

export const updateNews =
  ({
    id,
    author,
    imgTitle,
    title,
    content,
  }: any): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: UPDATE_NEWS_REQUEST });

      const token = JSON.parse(localStorage.getItem("sea-user")!).token;

      const config = {
        headers: {
          Authorization: token,
        },
      };

      const { data } = await axios.put(
        `/news/item/${id}`,
        { author, imgTitle, title, content },
        config
      );
      dispatch({
        type: UPDATE_NEWS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_NEWS_FAILURE,
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
      dispatch({ type: DELETE_NEWS_REQUEST });

      const token = JSON.parse(localStorage.getItem("sea-user")!).token;

      const config = {
        headers: {
          Authorization: token,
        },
      };

      const { data } = await axios.delete(`/news//item/${id}`, config);
      dispatch({
        type: DELETE_NEWS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DELETE_NEWS_FAILURE,
        payload: error,
      });
    }
  };
