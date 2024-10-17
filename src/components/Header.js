import React from "react";
import { useSelector } from "react-redux";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import "./header.css";

export const Header = () => {
  const result = useSelector((state) => state);
  console.warn("data in header", result);

  return (
    <div className="header">
      <Link to="/"><h1 className="logo">Kitty Crafts</h1>
      
      
      </Link>


      <Link to="/cart">
        <div className="cart-div">
          <span>{result.cartData.length}</span>
          <MdAddShoppingCart size={50} />
        </div>
      </Link>
    </div>
  );
};
