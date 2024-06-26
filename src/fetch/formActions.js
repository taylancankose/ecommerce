import { Bounce, toast } from "react-toastify";
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

export const handleSignIn = async (data) => {
  try {
    const response = await API.post("/login", {
      email: data.email,
      password: data.password,
    });
    const user = await response.data;
    localStorage.setItem("credentials", JSON.stringify(user.token));
    return user;
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
