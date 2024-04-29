import {
  SET_CATEGORIES,
  SET_CATEGORIES_ERROR,
  SET_CATEGORIES_REQUEST,
  SET_PRODUCT_LIST_ERROR,
  SET_PRODUCT_LIST_REQUEST,
  SET_FETCH_STATE,
  SET_FILTER,
  SET_LIMIT,
  SET_OFFSET,
  SET_PRODUCT_LIST,
  SET_TOTAL,
} from "../types/product/types";
import {
  fetchCategories,
  fetchProducts,
  fetchProductsByCategory,
  fetchProductsByFilter,
} from "../../fetch/products";

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

export const setProductListRequest = () => ({
  type: SET_PRODUCT_LIST_REQUEST,
});

export const setProductListError = (error) => ({
  type: SET_PRODUCT_LIST_ERROR,
  payload: error,
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

export const getProducts = (param) => {
  return async (dispatch) => {
    try {
      dispatch(setProductListRequest());
      const response = await fetchProductsByCategory(param);
      dispatch(setTotal(response?.total));
      dispatch(setProductList(response?.products));
    } catch (error) {
      console.log(error, "product error");
      dispatch(setProductListError(error));
    }
  };
};

export const getProductsByFilter = (param) => {
  return async (dispatch) => {
    try {
      dispatch(setProductListRequest());
      const response = await fetchProductsByFilter(param);
      dispatch(setTotal(response?.total));
      dispatch(setFilter(param));
      dispatch(setProductList(response?.products));
    } catch (error) {
      console.log(error, "product error");
      dispatch(setProductListError(error));
    }
  };
};
