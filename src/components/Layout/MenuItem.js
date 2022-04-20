import React from "react";
import MenuItemForm from "./MenuItemForm";
import classes from "./MenuItem.module.css";

const MenuItem = (props) => {
  const updateCartHandler = (itemQuantity) => {
    console.log(itemQuantity);
  };

  return (
    <li id={props.id} className={classes["menu-item"]}>
      <div className={classes["item-details"]}>
        <h3>{props.name}</h3>
        <div className={classes["item-price"]}>{props.price}</div>
        <div className={classes["item-description"]}>{props.description}</div>
      </div>
      <MenuItemForm onUpdateCart={updateCartHandler} />
    </li>
  );
};

export default MenuItem;
