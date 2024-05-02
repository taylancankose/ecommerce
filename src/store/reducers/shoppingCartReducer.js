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

const initialState = {
  cart: [],
  address: [],
  payment: [],
  newAddress: {},
  shippingAddress: {},
  receiptAddress: {},
  paymentCard: {},
  order: {},
  orderHistory: [],

  loading: false,
  error: null,
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
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    case SET_ADDRESS:
      const addressArray = Array.isArray(action.payload)
        ? action.payload
        : [action.payload]; // Gelen adresleri diziye dönüştür
      return {
        ...state,
        address: addressArray,
        loading: false,
      };
    case SET_ONE_ADDRESS:
      return {
        ...state,
        newAddress: action.payload,
      };
    case SET_ORDER_HISTORY_ERROR:
    case SET_PAYMENT_ERROR:
    case SET_ORDER_ERROR:
    case SET_ADDRESS_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case SET_ORDER_HISTORY_REQUEST:
    case SET_PAYMENT_REQUEST:
    case SET_ORDER_REQUEST:
    case SET_ADDRESS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_ADDRESS:
      const otherAddresses = state.address.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        address: otherAddresses,
      };
    case UPDATE_ADDRESS:
      const updtdAddress = state.address.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      return {
        ...state,
        address: updtdAddress,
      };
    case SET_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    case SET_RECEIPT_ADDRESS:
      return {
        ...state,
        receiptAddress: action.payload,
      };
    case SET_PAYMENT:
      return {
        ...state,
        payment: action.payload,
      };
    case SET_ORDER:
      return {
        ...state,
        order: action.payload,
      };
    case SELECT_CARD:
      return {
        ...state,
        paymentCard: action.payload,
      };
    case SET_ORDER_HISTORY:
      return {
        ...state,
        orderHistory: action.payload,
      };
    default:
      return state;
  }
};

export default shoppingCartReducer;
