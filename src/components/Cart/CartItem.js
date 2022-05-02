import React from "react";
import CartItemAmount from "./CartItemAmount";

import classes from "./CartItem.module.css";

const CartItem = ({ id, name, itemAmountInCart, onUpdateCartItem }) => {
  const calculateItemDifferential = (newAmount) => {
    onUpdateCartItem([
      {
        id: id,
        amount: newAmount - itemAmountInCart,
      },
    ]);
  };

  return (
    <li key={id}>
      <div className={classes["item-name"]}>
        <h3>{name}</h3>
      </div>
      <CartItemAmount
        onUpdateCart={calculateItemDifferential}
        amountInCart={itemAmountInCart}
      />
    </li>
  );
};

export default CartItem;
