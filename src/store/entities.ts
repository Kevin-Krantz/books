import { combineReducers } from "redux";
import cartReducer from "./cart";
import productsReducer from "./products";
import searchReducer from "./search";

export default combineReducers({
  products: productsReducer,
  cart: cartReducer,
  search: searchReducer,
});
