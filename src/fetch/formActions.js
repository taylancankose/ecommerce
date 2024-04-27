import { API } from "../api/useAxios";

export const handleSignUp = async (data) => {
  try {
    const response = await API.post("/signup", data);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
