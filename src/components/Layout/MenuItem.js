import React from "react";
import MenuItemForm from "./MenuItemForm";
import classes from "./MenuItem.module.css";

import CartContext from "../Cart/cart-context";

const MenuItem = (props) => {
  const cartCtx = React.useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  const updateCartHandler = (itemQuantity) => {
    cartCtx.updateItemCount({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: itemQuantity,
    });
  };

  return (
    <li id={props.id} className={classes["menu-item"]}>
      <div className={classes["item-details"]}>
        <h3>{props.name}</h3>
        <div className={classes["item-price"]}>{price}</div>
        <div className={classes["item-description"]}>{props.description}</div>
      </div>
      <MenuItemForm onUpdateCart={updateCartHandler} />
    </li>
  );
};

export default MenuItem;
