import {
  SET_LANGUAGE,
  SET_ROLES,
  SET_ROLES_ERROR,
  SET_ROLES_REQUEST,
  SET_THEME,
  SET_USER,
  SET_USER_REQUEST,
  SET_USER_ERROR,
} from "../types/client/types";

const initialState = {
  user: {},
  addressList: [],
  creditCards: [],
  roles: [],
  theme: "light",
  language: "tr",

  loading: false,
  error: null,
};

const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_REQUEST:
    case SET_ROLES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SET_USER_ERROR:
    case SET_ROLES_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case SET_ROLES:
      return {
        ...state,
        roles: action.payload,
        loading: false,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};

export default clientReducer;
