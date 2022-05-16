import { AnyAction } from "redux";
import {
  CREATE_CONTACT_FAILURE,
  CREATE_CONTACT_REQUEST,
  CREATE_CONTACT_SUCCESS,
} from "../../constants/auth/contact.constant";

interface contactInfo {
  phoneNumber?: string;
  email?: string;
  message?: string;
}

export interface contactState {
  contactInfo?: contactInfo | null;
  isFetching?: boolean;
  success?: boolean;
  error?: boolean;
}

export const newContactReducer = (state: contactInfo, action: AnyAction) => {
  switch (action.type) {
    case CREATE_CONTACT_REQUEST:
      return {
        isFetching: true,
        success: false,
        error: false,
      };
    case CREATE_CONTACT_SUCCESS:
      return {
        contactInfo: action.payload,
        isFetching: false,
        success: true,
        error: false,
      };
    case CREATE_CONTACT_FAILURE:
      return {
        isFetching: false,
        success: false,
        error: true,
      };
    default:
      return { ...state };
  }
};
