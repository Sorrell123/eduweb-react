import React, { Component } from "react";
import CartButton from "./cartButton";

class CartDetails extends Component {
  render() {
    return <CartButton additionalClass="btn-block" in_cart={true} />;
  }
}

export default CartDetails;
