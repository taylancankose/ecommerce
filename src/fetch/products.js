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
