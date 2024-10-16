import {SET_PRODUCT_LIST} from "./constant";

export const productData = (data = [], action) => {
  console.log("Product List Reducer being called  called -", action.type);

  switch (action.type) {
    case SET_PRODUCT_LIST:
      console.warn("SAGA PRODUCT_LIST CART CONDITION --", action.data);
      return [...action.data];
    default:
      return data;
  }
};
