import { API } from "../api/useAxios";

export const fetchCategories = async () => {
  try {
    const response = await API.get("/categories");
    return await response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const fetchProducts = async () => {
  try {
    const response = await API.get("/products");
    return await response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const fetchProductsByCategory = async (id) => {
  try {
    const response = await API.get(`/products?category=${id}`);
    return await response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const fetchProductsByFilter = async (filter) => {
  try {
    const response = await API.get(`/products?sort=${filter}`);
    return await response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
