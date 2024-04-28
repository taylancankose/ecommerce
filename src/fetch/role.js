import { API } from "../api/useAxios";

export const getRoles = async () => {
  try {
    const response = await API.get("/roles");
    return await response.data;
  } catch (error) {
    console.log(error);
  }
};
