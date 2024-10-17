import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <Fragment>
      <Link to ="/" ><h3>Go to Products link</h3></Link>
      <div><h4>Cart page</h4></div>;
    </Fragment>
  );
}

export default Cart;
