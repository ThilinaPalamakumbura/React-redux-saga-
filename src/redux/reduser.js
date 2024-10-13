import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";

export const cartData = (data = [5], action) => {
  console.log(action.type);
  
  switch (action.type) {
    case ADD_TO_CART:
      console.warn("ADD_TO_CART CART CONDITION --", action.data);
      return [action.data, ...data];
    case REMOVE_FROM_CART:
      console.warn("REMOVE_FROM_CART CONDITION --", action.data);
      data.length = data.length? data.length-1 : []
      return [...data];
    case EMPTY_CART:
      console.warn("EMPTY_CART CONDITION --", action.data);
      return [];
    default:
      return [];
  }
};
