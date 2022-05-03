import React from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "./cart-context";

const Cart = ({ onCartStateChange }) => {
  const crtCtx = React.useContext(CartContext);

  let cartContent;
  if (crtCtx.items.length === 0) {
    cartContent = (
      <div className={classes["empty-cart"]}>
        <h3>Cart is empty</h3>
        <span class="material-icons md-114">sentiment_dissatisfied</span>
      </div>
    );
  } else {
    cartContent = (
      <React.Fragment>
        <h2>{`Cart Total: $${crtCtx.totalAmount.toFixed(2)}`}</h2>
        <ul>
          {crtCtx.items.map((item) => {
            return (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                itemAmountInCart={item.amount}
                onUpdateCartItem={crtCtx.updateCart}
              />
            );
          })}
        </ul>
      </React.Fragment>
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
