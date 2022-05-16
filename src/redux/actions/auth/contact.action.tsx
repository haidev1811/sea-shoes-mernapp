import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../../store";
import axios from "../../../utils/axios";
import {
  CREATE_CONTACT_FAILURE,
  CREATE_CONTACT_REQUEST,
  CREATE_CONTACT_SUCCESS,
} from "../../constants/auth/contact.constant";

export const addNewContact =
  ({
    email,
    phoneNumber,
    message,
  }: any): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (
    dispatch: ThunkDispatch<RootState, unknown, AnyAction>
  ): Promise<void> => {
    try {
      dispatch({ type: CREATE_CONTACT_REQUEST });

      const { data } = await axios.post("/contact/add", {
        email,
        phoneNumber,
        message,
      });
      dispatch({
        type: CREATE_CONTACT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_CONTACT_FAILURE,
        payload: error,
      });
    }
  };
