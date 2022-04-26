import React from "react";
import classes from "./CartButton.module.css";

const CartButton = ( props) => {
  return (
    <React.Fragment>
      <button onClick={props.onCartStateChange} className={classes["cart-button"]}>
        <p className="material-icons md-36">shopping_cart</p>
      </button>
    </React.Fragment>
  );
};

export default CartButton;
