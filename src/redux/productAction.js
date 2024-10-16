import { PRODUCT_LIST } from "./constant";

export const productList = () => {
  
   let data = "hi"
  console.warn("action productData pass--", data);
  return {
    type: PRODUCT_LIST,
  };
};
