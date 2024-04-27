import { SET_ADDRESS, SET_CART, SET_PAYMENT } from "../types/cart/types";

const initialState = {
  cart: [],
  address: {},
  payment: {},
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case SET_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
    case SET_PAYMENT:
      return {
        ...state,
        payment: action.payload,
      };
    default:
      return state;
  }
};

export default shoppingCartReducer;
