import {
  addPayments,
  changeAddress,
  deleteAddresses,
  deletePayment,
  fetchAddresses,
  fetchPayments,
  saveAddresses,
} from "../../fetch/cart";
import {
  DELETE_ADDRESS,
  REMOVE_CART,
  SELECT_CARD,
  SET_ADDRESS,
  SET_ADDRESS_ERROR,
  SET_ADDRESS_REQUEST,
  SET_CART,
  SET_ONE_ADDRESS,
  SET_PAYMENT,
  SET_PAYMENT_ERROR,
  SET_PAYMENT_REQUEST,
  SET_RECEIPT_ADDRESS,
  SET_SHIPPING_ADDRESS,
  UPDATE_ADDRESS,
} from "../types/cart/types";

export const setCart = (product, count, checked) => ({
  type: SET_CART,
  payload: {
    product,
    count,
    checked,
  },
});

export const selectCard = (card) => ({
  type: SELECT_CARD,
  payload: card,
});

export const removeCart = (productId) => ({
  type: REMOVE_CART,
  payload: productId,
});

export const setPayment = (payment) => ({
  type: SET_PAYMENT,
  payload: payment,
});

export const setPaymentRequest = () => ({
  type: SET_PAYMENT_REQUEST,
});

export const setPaymentError = (error) => ({
  type: SET_PAYMENT_ERROR,
  payload: error,
});

export const setAddress = (address) => ({
  type: SET_ADDRESS,
  payload: address,
});

export const setOneAddress = (address) => ({
  type: SET_ONE_ADDRESS,
  payload: address,
});

export const deleteAddress = (addressId) => ({
  type: DELETE_ADDRESS,
  payload: addressId,
});

export const setShippingAddress = (address) => ({
  type: SET_SHIPPING_ADDRESS,
  payload: address,
});

export const setReceiptAddress = (address) => ({
  type: SET_RECEIPT_ADDRESS,
  payload: address,
});

export const updateAddress = (address) => ({
  type: UPDATE_ADDRESS,
  payload: address,
});

export const setAddressRequest = () => ({
  type: SET_ADDRESS_REQUEST,
});

export const setAddressError = (error) => ({
  type: SET_ADDRESS_ERROR,
  payload: error,
});

export const getAddresses = () => {
  return async (dispatch) => {
    try {
      dispatch(setAddressRequest());
      const response = await fetchAddresses();
      dispatch(setAddress(response));
    } catch (error) {
      console.log(error, "address error");
      dispatch(setAddressError(error));
    }
  };
};

export const postAddresses = (data) => {
  return async (dispatch) => {
    try {
      dispatch(setAddressRequest());
      await saveAddresses(data);
      dispatch(setOneAddress(data));
      getAddresses();
    } catch (error) {
      console.log(error, "address error");
      dispatch(setAddressError(error));
    }
  };
};

export const editAddress = (data) => {
  return async (dispatch) => {
    try {
      dispatch(setAddressRequest());
      await changeAddress(data);
    } catch (error) {
      console.log(error, "address error");
      dispatch(setAddressError(error));
    }
  };
};

export const removeAddress = (id) => {
  return async (dispatch) => {
    try {
      dispatch(setAddressRequest());
      await deleteAddresses(id);
      dispatch(getAddresses());
    } catch (error) {
      console.log(error, "address error");
      dispatch(setAddressError(error));
    }
  };
};

export const getPayment = () => {
  return async (dispatch) => {
    try {
      dispatch(setPaymentRequest());
      const response = await fetchPayments();
      dispatch(setPayment(response));
    } catch (error) {
      console.log(error, "payment error");
      dispatch(setPaymentError(error));
    }
  };
};

export const savePayment = (data) => {
  return async (dispatch) => {
    try {
      dispatch(setPaymentRequest());
      const response = await addPayments(data);
      dispatch(getPayment());
      console.log(response);
    } catch (error) {
      console.log(error, "payment error");
      dispatch(setPaymentError(error));
    }
  };
};

export const removePayment = (id) => {
  return async (dispatch) => {
    try {
      dispatch(setPaymentRequest());
      await deletePayment(id);
      dispatch(getPayment());
    } catch (error) {
      console.log(error, "address error");
      dispatch(setAddressError(error));
    }
  };
};
