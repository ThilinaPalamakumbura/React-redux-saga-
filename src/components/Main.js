import { useDispatch } from "react-redux";
import { addToCart, removeFromCart, emptyFromCart } from "../redux/actions";
import { productList } from "../redux/productAction";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import "./main.css";

function Main() {
  const dispatch = useDispatch();

  let data = useSelector((state) => state.productData);
  console.log("data---", data);

  useEffect(() => {
    dispatch(productList());
  }, []);

  return (
    <div className="App">
      <div className="product-container">
        {data.map((item) => (
          <div key={item.id} className="product-item">
            <div>
              <img src={item.image} height="100px" />
            </div>
            <div className="product-name">Name : {item.name}</div>
            <div className="price">Price : {item.price}</div>
            <button
              className="add-to-cart"
              onClick={() => dispatch(addToCart(item))}
            >
              ADD TO CART
            </button>
            <button
              className="remove-from-cart"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              REMOVE FROM CART
            </button>
            <button
              className="clear-cart"
              onClick={() => dispatch(emptyFromCart())}
            >
              EMPTY CART
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
