import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  updateCart: (items) => {},
  clearCart: () => {}
});

export default CartContext;
