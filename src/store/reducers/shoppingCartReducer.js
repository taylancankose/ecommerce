import {
  REMOVE_CART,
  SET_ADDRESS,
  SET_CART,
  SET_PAYMENT,
} from "../types/cart/types";

const initialState = {
  cart: [],
  address: {},
  payment: {},
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART:
      const existingItemIndex = state.cart.findIndex(
        (item) => item.product.id === action.payload.product.id
      );
      if (existingItemIndex !== -1) {
        // Eğer ürün sepette ise, miktarı güncelle
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex], // Mevcut ürünün kopyasını oluştur
          checked: action.payload.checked, // Güncelleme yap
        };
        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        // Eğer ürün sepette yoksa, yeni bir öğe olarak ekle
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }
    case REMOVE_CART:
      const removedCart = state.cart.filter(
        (item) => item.product.id !== action.payload
      );
      return {
        ...state,
        cart: removedCart,
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
