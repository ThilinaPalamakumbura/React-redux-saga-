import { ADD_TO_CART } from "./constraints";


export const addToCart = (data) => {
  console.warn("action pass--", data);

  return {
    type: ADD_TO_CART,
    data,
  };
};
