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
          src="https://media.istockphoto.com/id/1206806317/vector/shopping-cart-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=1RRQJs5NDhcB67necQn1WCpJX2YMfWZ4rYi1DFKlkNA="
          alt="CartImage"
          height="80px"
        />
      </div>
    </div>
  );
};
