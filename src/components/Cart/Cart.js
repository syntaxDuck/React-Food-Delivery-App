import React from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "./cart-context";

const Cart = ({ onCartStateChange }) => {
  const crtCtx = React.useContext(CartContext);

  let cartContent;
  if (crtCtx.items.length === 0) {
    cartContent = <p>Cart is empty...</p>;
  } else {
    cartContent = (
      <ul>
        {crtCtx.items.map((item) => {
          return (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              itemAmountInCart={item.amount}
              onUpdateCartItem={crtCtx.updateCart}
            />
          );
        })}
      </ul>
    );
  }

  return (
    <div className={classes["modal-wrapper"]}>
      <div
        className={classes["modal-background"]}
        onClick={onCartStateChange}
      ></div>
      <Modal className={classes["cart-modal"]}>{cartContent}</Modal>
    </div>
  );
};

export default Cart;
