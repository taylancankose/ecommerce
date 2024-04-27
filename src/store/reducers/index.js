import { combineReducers } from "redux";
import clientReducer from "./clientReducer";
import productReducer from "./productReducer";
import shoppingCartReducer from "./shoppingCartReducer";

export default combineReducers({
  clientReducer: clientReducer,
  productReducer: productReducer,
  shoppingCartReducer: shoppingCartReducer,
});
