import { SET_ADDRESS, SET_CART, SET_PAYMENT } from "../types/cart/types";

export const setCart = (product, count, checked) => ({
  type: SET_CART,
  payload: {
    product,
    count,
    checked,
  },
});

export const setPayment = (payment, qty, checked) => ({
  type: SET_PAYMENT,
  payload: payment,
});

export const setAddress = (address) => ({
  type: SET_ADDRESS,
  payload: address,
});
