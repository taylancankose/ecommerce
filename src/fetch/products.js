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

export const fetchProductsByCategory = async (
  categoryId,
  filter,
  sort,
  limit,
  offset
) => {
  try {
    const response = await API.get(
      `/products?${categoryId ? `category=${categoryId}` : ""}${
        filter ? `&filter=${filter}` : ""
      }${sort ? `&sort=${sort}` : ""}${limit ? `&limit=${limit}` : ""}${
        offset ? `&offset=${offset}` : ""
      }`
    );
    console.log(
      `/products?${categoryId ? `category=${categoryId}` : ""}${
        filter ? `&filter=${filter}` : ""
      }${sort ? `&sort=${sort}` : ""}`
    );
    return await response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
