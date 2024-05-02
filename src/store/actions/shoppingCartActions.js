import {
  addPayments,
  changeAddress,
  changePayment,
  deleteAddresses,
  deletePayment,
  fetchAddresses,
  fetchOrders,
  fetchPayments,
  makeOrder,
  saveAddresses,
} from "../../fetch/cart";
import {
  CLEAR_CART,
  DELETE_ADDRESS,
  REMOVE_CART,
  SELECT_CARD,
  SET_ADDRESS,
  SET_ADDRESS_ERROR,
  SET_ADDRESS_REQUEST,
  SET_CART,
  SET_ONE_ADDRESS,
  SET_ORDER,
  SET_ORDER_ERROR,
  SET_ORDER_HISTORY,
  SET_ORDER_HISTORY_ERROR,
  SET_ORDER_HISTORY_REQUEST,
  SET_ORDER_REQUEST,
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

export const clearCart = (payload) => ({
  type: CLEAR_CART,
  payload,
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

export const setOrderRequest = () => ({
  type: SET_ORDER_REQUEST,
});

export const setOrderError = (error) => ({
  type: SET_ORDER_ERROR,
  payload: error,
});

export const setOrder = (order) => ({
  type: SET_ORDER,
  payload: order,
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

export const setOrderHistoryRequest = () => ({
  type: SET_ORDER_HISTORY_REQUEST,
});

export const setOrderHistoryError = (error) => ({
  type: SET_ORDER_HISTORY_ERROR,
  payload: error,
});

export const setOrderHistory = (orderHistory) => ({
  type: SET_ORDER_HISTORY,
  payload: orderHistory,
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
      dispatch(getAddresses());
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
      dispatch(getAddresses());
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

export const editPayment = (data) => {
  return async (dispatch) => {
    try {
      dispatch(setPaymentRequest());
      await changePayment(data);
      dispatch(getPayment());
    } catch (error) {
      console.log(error, "address error");
      dispatch(setAddressError(error));
    }
  };
};

export const sendOrder = (data) => {
  return async (dispatch) => {
    try {
      dispatch(setOrderRequest());
      const response = await makeOrder(data);
      console.log(response, "ACTIONS");
      dispatch(setOrder(data));
    } catch (error) {
      console.log("sendORderError", error.message);
      dispatch(setOrderError(error));
    }
  };
};

export const getOrderHistory = () => {
  return async (dispatch) => {
    try {
      dispatch(setOrderHistoryRequest());
      const response = await fetchOrders();
      dispatch(setOrderHistory(response));
    } catch (error) {
      dispatch(setOrderHistoryError(error));
      console.log(error.message, "getorderHistory");
    }
  };
};
