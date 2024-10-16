import React from "react";
import { useSelector } from "react-redux";

export const Header = () => {
  const result = useSelector((state) => state);
  console.warn("data in header", result);

  return (
    <div className="header">
      <div className="cart-div">
        <span>{result.cartData.length}</span>
        <img
          src=""
          alt="CartImage"
          height="80px"
        />
      </div>
    </div>
  );
};
