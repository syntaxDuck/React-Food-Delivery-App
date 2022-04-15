import React from "react";
import Button from "../UI/Button";
import classes from "./CartButton.module.css";

const CartButton = () => {
  return (
    <React.Fragment>
      <button className={classes["cart-button"]}>
        <p className="material-icons md-36">shopping_cart</p>
      </button>
    </React.Fragment>
  );
};

export default CartButton;
