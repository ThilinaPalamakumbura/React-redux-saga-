import {SET_PRODUCT_LIST} from "./constant";

export const productData = (data1 = [], action) => {
  console.log("Product List Reducer being called  -", action);

  switch (action.type) {
    case SET_PRODUCT_LIST:
      console.warn("SAGA PRODUCT_LIST CART CONDITION --", action.data1);
      return [...action.data1];
    default:
      return data1;
  }
};
