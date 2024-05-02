import { API } from "../api/useAxios";

export const fetchAddresses = async () => {
  try {
    const response = await API.get("/user/address");
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
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("changeAddress error:", error);
    throw error;
  }
};

export const deleteAddresses = async (id) => {
  try {
    const response = await API.delete(`/user/address/${id}`);
    return await response.data;
  } catch (error) {
    console.error("deleteAddresses error:", error);
    throw error.message;
  }
};

export const fetchPayments = async () => {
  try {
    const response = await API.get("/user/card");
    return await response.data;
  } catch (error) {
    console.error("fetchCarts error:", error);
    throw error.message;
  }
};

export const addPayments = async (data) => {
  try {
    const response = await API.post("/user/card", {
      card_no: data.card_no,
      expire_month: data.expire_month,
      expire_year: data.expire_year,
      name_on_card: data.name_on_card,
    });
    return await response.data;
  } catch (error) {
    console.error("fetchCarts error:", error);
    throw error.message;
  }
};

export const deletePayment = async (id) => {
  try {
    const response = await API.delete("/user/card/" + id);
    return await response.data;
  } catch (error) {
    console.error("deletePayment error:", error);
    throw error.message;
  }
};

export const changePayment = async (data) => {
  try {
    const response = await API.put("/user/card", data);
    return response.data;
  } catch (error) {
    console.error("changePayment error:", error);
    throw error;
  }
};
