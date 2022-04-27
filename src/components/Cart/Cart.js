import React from "react";
import Modal from "../UI/Modal";
import CartItemAmount from "./CartItemAmount";
import classes from "./Cart.module.css";
import CartContext from "./cart-context";

const Cart = (props) => {
  const crtCtx = React.useContext(CartContext);

  let cartContent;
  if (crtCtx.items.length === 0) {
    cartContent = <p>Cart is empty...</p>;
  } else {
    cartContent = (
      <ul>
        {crtCtx.items.map((item) => {
          return (
            <li key={item.id}>
              <div className={classes["item-name"]}>
                <h3>{item.name}</h3>
              </div>
              <CartItemAmount
                onUpdateCart={() => console.log("Hello from cart")}
                amountInCart={item.amount}
              />
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <div className={classes["modal-wrapper"]}>
      <div 
        className={classes["modal-background"]}
        onClick={props.onCartStateChange}
      ></div>
      <Modal className={classes["cart-modal"]}>{cartContent}</Modal>
    </div>
  );
};

export default Cart;
