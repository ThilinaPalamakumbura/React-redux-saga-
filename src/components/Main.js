import { useDispatch } from "react-redux";
import { addToCart, removeFromCart, emptyFromCart } from "../redux/actions";
import { productList } from "../redux/productAction";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Main() {
    const dispatch = useDispatch();

    let data = useSelector((state) => state.productData);
    console.log("data---", data);

    useEffect(()=>{
        dispatch(productList())
    },[]);

    return (
        <div className="App">
         <div className="product-container">
             {data.map((item) =>
                <div className="product-item">
                        <div>
                        <img src={item.image}/>
                        </div>
                        <div>Name : {item.name}</div> 
                        <div>Price : {item.price}</div>
                        <button onClick={() => dispatch(addToCart(item))}>ADD TO CART</button>
                        <button onClick={() => dispatch(removeFromCart(item.id))}>REMOVE FROM CART</button>
                        <button onClick={() => dispatch(emptyFromCart())}>EMPTY CART</button>
                </div>)}
            </div>
        </div>
    );
}

export default Main;
