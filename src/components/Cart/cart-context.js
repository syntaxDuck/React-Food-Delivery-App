import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  updateCart: (item) => {},
});

export default CartContext;
