import React, { Component } from "react";
import ActionButton from "./actionButton";

class CartButton extends Component {
  render() {
    return this.props.in_cart ? (
      <ActionButton
        btnType="danger"
        icon="minus-circle"
        text="Usuń z koszyka"
        {...this.props}
      />
    ) : (
      <ActionButton
        btnType="success"
        icon="shopping-basket"
        text="Dodaj do koszyka"
        {...this.props}
      />
    );
  }
}

export default CartButton;
