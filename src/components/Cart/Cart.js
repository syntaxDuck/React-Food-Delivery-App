import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  return (
    <div className={classes["modal-background"]} onClick={props.onCartStateChange}>
      <Modal className={classes["cart-modal"]}>Yo</Modal>
    </div>
  );
};

export default Cart;
