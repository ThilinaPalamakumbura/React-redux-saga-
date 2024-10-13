import { useDispatch } from "react-redux";
import { addToCart, removeFromCart, emptyFromCart } from "../redux/actions";
import { productList } from "../redux/productAction";

function Main() {
  const dispatch = useDispatch();

  const product = {
    name: "Thilina",
    age: 34,
    city: "Katunayake",
  };

  return (
    <div className="App">
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
      <div>
        <button onClick={() => dispatch(removeFromCart(product))}>
          Remove from Cart
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(emptyFromCart())}>Empty Cart</button>
      </div>
      <div>
        <button onClick={() => dispatch(productList())}>Product List</button>
      </div>
    </div>
  );
}

export default Main;
