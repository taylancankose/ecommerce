import { Bounce, toast } from "react-toastify";
import { API } from "../api/useAxios";

export const verifyToken = async (token) => {
  try {
    const response = await API.get("/verify", {
      Authorization: token,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    toast.error(error, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    return error;
  }
};
