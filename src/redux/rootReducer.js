import { combineReducers } from "redux";
import { cartData } from "./reduser";
import { productData } from "./productReducer";

export default combineReducers({
  cartData,
  productData,
});


