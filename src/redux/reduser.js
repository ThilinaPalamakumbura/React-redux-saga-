import { ADD_TO_CART } from "./constraints";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.warn("ADD TO CART CONDITION --", action.data.city);
      return [action.data, ...data];
    default:
      return [];
  }
};
