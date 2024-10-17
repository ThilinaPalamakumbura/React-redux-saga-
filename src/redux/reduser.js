import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";

export const cartData = (data = [], action) => {
  console.log("Reducer being called -", action.type);

  var myArray = [];
  switch (action.type) {
    case ADD_TO_CART:
      console.log("ADD_TO_CART CART CONDITION --", action);
      return [action.data, ...data];
    case REMOVE_FROM_CART:
      console.warn("REMOVE_FROM_CART CONDITION --", action);

      myArray = data.filter((item) => item.id !== action.data);

      return [...myArray];
    case EMPTY_CART:
      console.log("EMPTY_CART CONDITION --", action.data);
      return [];
    default:
      return data;
  }
};
