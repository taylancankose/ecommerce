import { API } from "../api/useAxios";

export const fetchAddresses = async (token) => {
  try {
    const response = await API.get("/user/address");
    console.log(response);
    return await response?.data;
  } catch (error) {
    console.error("fetchAddresses error:", error);
    throw error;
  }
};

export const saveAddresses = async (data) => {
  try {
    const response = await API.post("/user/address", {
      title: data.title,
      name: data.name,
      surname: data.surname,
      phone: data.phone,
      city: data.city,
      district: data.district,
      neighborhood: data.neighborhood,
    });
    return await response?.data[0];
  } catch (error) {
    console.error("saveAddresses error:", error);
    throw error;
  }
};

export const changeAddress = async (data) => {
  try {
    const response = await API.put("/user/address", data);
    return response.data;
  } catch (error) {
    console.error("changeAddress error:", error);
    throw error;
  }
};

export const deleteAddresses = async (id) => {
  try {
    await API.delete(`/user/address/${id}`);
  } catch (error) {
    console.error("deleteAddresses error:", error);
    throw error.message;
  }
};
