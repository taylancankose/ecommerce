import axios from "axios";

export const useAxios = () => {
  const token = JSON.parse(localStorage.getItem("credentials"));
  const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
  });

  if (token) {
    instance.defaults.headers.common["Authorization"] = token;
    instance.defaults.headers.common["Content-Type"] = "application/json";
  } else {
    delete instance.defaults.headers.common["Authorization"];
  }
  return instance;
};

export let API = useAxios();
