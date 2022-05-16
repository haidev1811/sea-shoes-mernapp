import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../../store";
import axios from "../../../utils/axios";
import {
  ADD_CART_FAILURE,
  ADD_CART_REQUEST,
  ADD_CART_SUCCESS,
  DELETE_CART_FAILURE,
  DELETE_CART_REQUEST,
  DELETE_CART_SUCCESS,
  GET_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  UPDATE_QTY_CART_FAILURE,
  UPDATE_QTY_CART_REQUEST,
  UPDATE_QTY_CART_SUCCESS,
} from "../../constants/order/cart.constant";

export const getCart =
  (): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: GET_CART_REQUEST });

      const token = JSON.parse(localStorage.getItem("sea-user")!).token;

      const config = {
        headers: {
          Authorization: token,
        },
      };

      const { data } = await axios.get("/cart", config);
      dispatch({
        type: GET_CART_SUCCESS,
        payload: data,
      });
      localStorage.setItem("sea-cart-items", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: GET_CART_FAILURE,
        payload: error,
      });
    }
  };

export const addToCart =
  ({
    productId,
    name,
    image,
    price,
    discount,
    inStock,
    quantity,
    size,
    colour,
  }: any): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: ADD_CART_REQUEST });

      const token = JSON.parse(localStorage.getItem("sea-user")!).token;

      const config = {
        headers: {
          Authorization: token,
        },
      };

      const { data } = await axios.post(
        "/cart/add",
        {
          productId,
          name,
          image,
          price,
          discount,
          inStock,
          quantity,
          size,
          colour,
        },
        config
      );
      dispatch({
        type: ADD_CART_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ADD_CART_FAILURE,
        payload: error,
      });
    }
  };

export const updateQtyCartItem =
  (
    id: string,
    quantity: number
  ): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: UPDATE_QTY_CART_REQUEST });

      const token = JSON.parse(localStorage.getItem("sea-user")!).token;

      const config = {
        headers: {
          Authorization: token,
        },
      };

      const { data } = await axios.put(
        `/cart/update/${id}`,
        { id, quantity },
        config
      );
      dispatch({
        type: UPDATE_QTY_CART_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_QTY_CART_FAILURE,
        payload: error,
      });
    }
  };

export const deleteCartItem =
  (id: string): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: DELETE_CART_REQUEST });

      const token = JSON.parse(localStorage.getItem("sea-user")!).token;

      const config = {
        headers: {
          Authorization: token,
        },
      };

      const { data } = await axios.delete(`/cart/delete/${id}`, config);
      dispatch({
        type: DELETE_CART_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: DELETE_CART_FAILURE,
        payload: error,
      });
    }
  };
