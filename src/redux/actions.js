import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";


export const addToCart = (data) => {
  console.warn("action addToCart pass--", data);

  return {
    type: ADD_TO_CART,
    data,
  };
};
export const removeFromCart = (data) => {
  console.warn("action removeFromCart pass--", data);

  return {
    type: REMOVE_FROM_CART,
    data,
  };
};
export const emptyFromCart = (data) => {
  console.warn("action emptyFromCart pass--", data);

  return {
    type: EMPTY_CART,
    data,
  };
};
