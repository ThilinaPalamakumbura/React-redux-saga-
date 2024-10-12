import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions";

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
    </div>
  );
}

export default Main;
