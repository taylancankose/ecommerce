import {
  SET_CATEGORIES,
  SET_CATEGORIES_ERROR,
  SET_CATEGORIES_REQUEST,
  SET_FETCH_STATE,
  SET_FILTER,
  SET_LIMIT,
  SET_OFFSET,
  SET_PRODUCT_LIST,
  SET_TOTAL,
} from "../types/product/types";
import { fetchCategories } from "../../fetch/products";

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});

export const setCategoriesRequest = () => ({
  type: SET_CATEGORIES_REQUEST,
});

export const setCategoriesError = (error) => ({
  type: SET_CATEGORIES_ERROR,
  payload: error,
});

export const setProductList = (productList) => ({
  type: SET_PRODUCT_LIST,
  payload: productList,
});

export const setTotal = (total) => ({
  type: SET_TOTAL,
  payload: total,
});

export const setFetchState = (state) => ({
  type: SET_FETCH_STATE,
  payload: state,
});

export const setLimit = (limit) => ({
  type: SET_LIMIT,
  payload: limit,
});

export const setOffset = (offset) => ({
  type: SET_OFFSET,
  payload: offset,
});

export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});

export const getCategories = () => {
  return async (dispatch) => {
    try {
      dispatch(setCategoriesRequest());
      const response = await fetchCategories();
      dispatch(setCategories(response));
    } catch (error) {
      console.log(error, "category error");
      dispatch(setCategoriesError(error));
    }
  };
};
