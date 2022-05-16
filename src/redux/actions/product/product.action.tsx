import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../../store";
import axios from "../../../utils/axios";
import {
  CREATE_PRODUCT_FAILURE,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  GET_DETAIL_ID_PRODUCT_FAILURE,
  GET_DETAIL_ID_PRODUCT_REQUEST,
  GET_DETAIL_ID_PRODUCT_SUCCESS,
  GET_DETAIL_PRODUCT_FAILURE,
  GET_DETAIL_PRODUCT_REQUEST,
  GET_DETAIL_PRODUCT_SUCCESS,
  GET_LIST_PRODUCT_FAILURE,
  GET_LIST_PRODUCT_REQUEST,
  GET_LIST_PRODUCT_SUCCESS,
  GET_PRODUCT_BRAND_FAILURE,
  GET_PRODUCT_BRAND_REQUEST,
  GET_PRODUCT_BRAND_SUCCESS,
  GET_PRODUCT_FILTER_FAILURE,
  GET_PRODUCT_FILTER_REQUEST,
  GET_PRODUCT_FILTER_SUCCESS,
  SEARCH_NAME_PRODUCT_FAILURE,
  SEARCH_NAME_PRODUCT_REQUEST,
  SEARCH_NAME_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILURE,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
} from "../../constants/product/product.constant";

export const getListProduct =
  (): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: GET_LIST_PRODUCT_REQUEST });

      const { data } = await axios.get("/product");
      dispatch({
        type: GET_LIST_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_LIST_PRODUCT_FAILURE,
        payload: error,
      });
    }
  };

export const getProductByBrand =
  (id: string): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: GET_PRODUCT_BRAND_REQUEST });

      const { data } = await axios.get(`/product/brand/${id}`);
      dispatch({
        type: GET_PRODUCT_BRAND_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_PRODUCT_BRAND_FAILURE,
        payload: error,
      });
    }
  };

export const getProductFilter =
  ({
    category,
    brand,
    type,
    colour,
    size,
    sort,
    pageNumber,
  }: any): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: GET_PRODUCT_FILTER_REQUEST });

      let payload = {};

      if (category) {
        payload = {
          ...payload,
          category,
        };
      }
      if (brand) {
        payload = {
          ...payload,
          brand,
        };
      }
      if (type) {
        payload = {
          ...payload,
          type,
        };
      }
      if (colour) {
        payload = {
          ...payload,
          colour,
        };
      }
      if (size) {
        payload = {
          ...payload,
          size,
        };
      }
      if (sort) {
        payload = {
          ...payload,
          sort,
        };
      }
      if (pageNumber) {
        payload = {
          ...payload,
          pageNumber,
        };
      }

      const { data } = await axios.get("/product/list", { params: payload });
      dispatch({
        type: GET_PRODUCT_FILTER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_PRODUCT_FILTER_FAILURE,
        payload: error,
      });
    }
  };

export const searchProductByName =
  ({ name }: any): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: SEARCH_NAME_PRODUCT_REQUEST });

      const { data } = await axios.get(`/product/search/${name}`);
      dispatch({
        type: SEARCH_NAME_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: SEARCH_NAME_PRODUCT_FAILURE,
        payload: error,
      });
    }
  };

export const getDetailProduct =
  (slug: string): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: GET_DETAIL_PRODUCT_REQUEST });

      const { data } = await axios.get(`/product/${slug}`);
      dispatch({
        type: GET_DETAIL_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_DETAIL_PRODUCT_FAILURE,
        payload: error,
      });
    }
  };

export const getDetailProductById =
  (id: string): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: GET_DETAIL_ID_PRODUCT_REQUEST });

      const token = JSON.parse(localStorage.getItem("sea-user")!).token;

      const config = {
        headers: {
          Authorization: token,
        },
      };

      const { data } = await axios.get(`/product/item/${id}`, config);
      dispatch({
        type: GET_DETAIL_ID_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_DETAIL_ID_PRODUCT_FAILURE,
        payload: error,
      });
    }
  };

export const createProduct =
  ({
    name,
    image1,
    image2,
    image3,
    image4,
    image5,
    price,
    inStock,
    discount,
    description,
    size,
    colour,
    brand,
    category,
    type,
  }: any): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: CREATE_PRODUCT_REQUEST });

      const token = JSON.parse(localStorage.getItem("sea-user")!).token;

      const config = {
        headers: {
          Authorization: token,
        },
      };

      const { data } = await axios.post(
        `/product`,
        {
          name,
          image1,
          image2,
          image3,
          image4,
          image5,
          price,
          inStock,
          discount,
          description,
          size,
          colour,
          brand,
          category,
          type,
        },
        config
      );
      dispatch({
        type: CREATE_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_PRODUCT_FAILURE,
        payload: error,
      });
    }
  };

export const updateProduct =
  ({
    id,
    name,
    image1,
    image2,
    image3,
    image4,
    image5,
    price,
    inStock,
    discount,
    description,
    size,
    colour,
    brand,
    category,
    type,
  }: any): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: UPDATE_PRODUCT_REQUEST });

      const token = JSON.parse(localStorage.getItem("sea-user")!).token;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      };

      const { data } = await axios.put(
        `/product/item/${id}`,
        {
          name,
          image1,
          image2,
          image3,
          image4,
          image5,
          price,
          inStock,
          discount,
          description,
          size,
          colour,
          brand,
          category,
          type,
        },
        config
      );
      dispatch({
        type: UPDATE_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_PRODUCT_FAILURE,
        payload: error,
      });
    }
  };

export const deleteProduct =
  (id: string): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: DELETE_PRODUCT_REQUEST });

      const token = JSON.parse(localStorage.getItem("sea-user")!).token;

      const config = {
        headers: {
          Authorization: token,
        },
      };

      const { data } = await axios.delete(`/product/item/${id}`, config);
      dispatch({
        type: DELETE_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DELETE_PRODUCT_FAILURE,
        payload: error,
      });
    }
  };
