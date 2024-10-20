import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { productSearch } from "../redux/productAction";
import "./header.css";

export const Header = () => {
  const result = useSelector((state) => state);
  console.warn("data in header", result);
  const dispatch = useDispatch();
  return (
    <div className="header">
      <Link to="/"><h1 className="logo">Kitty Crafts</h1>


      </Link>

      <div className="search-box">
        <input type="text" placeholder="Search Product" onChange={(event) =>
          dispatch(productSearch(event.target.value))}></input>
      </div>


      <Link to="/cart">
        <div className="cart-div">
          <span>{result.cartData.length}</span>
          <MdAddShoppingCart size={50} />
        </div>
      </Link>
    </div>
  );
};
