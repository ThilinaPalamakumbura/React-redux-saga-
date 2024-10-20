import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./cart.css";


function Cart() {
	const cartData = useSelector((state) => state.cartData);

	const amount = cartData.length && cartData.map((item) => item.price).reduce((prev, next) => prev + next)
	console.log("amount", amount)
	return (
		<Fragment>
			<Link to="/">
				<h3>Go to Products link</h3>
			</Link>
			<div>
				<h1>Cart page</h1>
			</div>
			<div className="cart-page-container">
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Price</th>
							<th>Category</th>
						</tr>
					</thead>
					<tbody>
						{cartData.map((item) => (
							<tr key={item.key}>
								<td>{item.name}</td>
								<td>{item.price}</td>
								<td>{item.category}</td>
							</tr>
						))}
					</tbody>
				</table>

				<div className="price-details">
					<div className="adjust-price">
						<span>Amount</span>
						<span>{amount}</span>
					</div>
					<div className="adjust-price">
						<span>Discount</span>
						<span>{amount / 10}</span>
					</div>
					<div className="adjust-price">
						<span>Tax</span>
						<span>{200}</span>
					</div>
					<div className="adjust-price">
						<span>Total</span>
						<span>000</span>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default Cart;
