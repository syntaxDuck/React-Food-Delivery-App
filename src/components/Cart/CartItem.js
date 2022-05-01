import React from "react";
import CartItemAmount from "./CartItemAmount";

import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const calculateItemDifferential = (newAmount) => {
    props.onUpdateCartItem([{
      id: props.id,
      amount: newAmount - props.itemAmountInCart,
    }]);
  };

  return (
    <li key={props.id}>
      <div className={classes["item-name"]}>
        <h3>{props.name}</h3>
      </div>
      <CartItemAmount
        onUpdateCart={calculateItemDifferential}
        amountInCart={props.itemAmountInCart}
      />
    </li>
  );
};

export default CartItem;
