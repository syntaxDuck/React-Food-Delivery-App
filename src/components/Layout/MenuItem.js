import React from "react";
import MenuItemAmount from "./MenuItemAmount";
import classes from "./MenuItem.module.css";

const MenuItem = React.memo((props) => {
  console.log("Rendering MenuItem");
  const price = `$${props.price.toFixed(2)}`;

  const updatePreCartHandler = (itemQuantity) => {
    props.onAddToPreCart({
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
      <MenuItemAmount onUpdatePreCart={updatePreCartHandler} />
    </li>
  );
});

export default MenuItem;
