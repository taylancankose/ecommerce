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

// export const handleSignUp = async (data) => {
//   try {
//     const response = await API.post("https://reqres.in/api/users", data);
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// };
