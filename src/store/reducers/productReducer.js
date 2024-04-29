import {
  SET_CATEGORIES,
  SET_CATEGORIES_ERROR,
  SET_CATEGORIES_REQUEST,
  SET_FETCH_STATE,
  SET_FILTER,
  SET_LIMIT,
  SET_OFFSET,
  SET_PRODUCT_LIST,
  SET_PRODUCT_LIST_ERROR,
  SET_PRODUCT_LIST_REQUEST,
  SET_TOTAL,
} from "../types/product/types";

const initialState = {
  categories: [],
  productList: [],
  total: 0,
  limit: 25,
  offset: 0,
  filter: "Popularity",
  fetchState: "NOT_FETCHED",

  loading: false,
  error: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT_LIST_ERROR:
    case SET_CATEGORIES_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case SET_CATEGORIES_REQUEST:
    case SET_PRODUCT_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };
    case SET_PRODUCT_LIST:
      return {
        ...state,
        loading: true,
        productList: action.payload,
        loading: false,
      };
    case SET_TOTAL:
      return {
        ...state,
        total: action.payload,
      };
    case SET_FETCH_STATE:
      return {
        ...state,
        fetchState: action.payload,
      };
    case SET_LIMIT:
      return {
        ...state,
        limit: action.payload,
      };
    case SET_OFFSET:
      return {
        ...state,
        offset: action.payload,
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
