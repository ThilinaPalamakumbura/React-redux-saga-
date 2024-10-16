import { useDispatch } from "react-redux";
import { addToCart, removeFromCart, emptyFromCart } from "../redux/actions";
import { productList } from "../redux/productAction";
import { useSelector } from "react-redux";

function Main() {
    const dispatch = useDispatch();

    let data = useSelector((state) => state.productData);
    console.log("data---", data);

    const product = {
        name: "Thilina",
        age: 34,
        city: "Katunayake",
    };

    return (
        <div className="App">
            <button onClick={() => dispatch(addToCart(product))}>
                Add to Cart
            </button>
            <div>
                <button onClick={() => dispatch(removeFromCart(product))}>
                    Remove from Cart
                </button>
            </div>
            <div>
                <button onClick={() => dispatch(emptyFromCart())}>
                    Empty Cart
                </button>
            </div>
            <div>
                <button onClick={() => dispatch(productList())}>
                    Call Product List
                </button>
            </div>
            <div className="product-container">
                
                {data.map((item) =><div className="product-item">
                    {item.name}
                        <div>
                        <img src={item.image}/>
                        </div>
                    </div>)}
            </div>
        </div>
    );
}

export default Main;
