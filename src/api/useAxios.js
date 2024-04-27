import axios from "axios";

export const useAxios = () => {
  return axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    headers: {},
  });
};

export let API = useAxios();
