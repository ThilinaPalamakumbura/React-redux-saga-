import {PRODUCT_LIST} from "./constant";

export const productData = (data = [], action) => {
  console.log("Product List Reducer being called  called -", action.type);

  switch (action.type) {
    case PRODUCT_LIST:
      console.warn("PRODUCT_LIST CART CONDITION --", action.data);
      return [action.data];
    default:
      return data;
  }
};
