import React from "react";
import CartReducer, { defaultCartState } from "./CartReducer";

// Define Context for Cart
export const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  cartActive: false,
  updateCart: (items) => {},
  clearCart: () => {},
  toggleCart: () => {},
});

const CartCtxProvider = (props) => {
  const [cartState, dispatchCartAction] = React.useReducer(
    CartReducer,
    defaultCartState
  );

  const updateCartHandler = React.useCallback((items) => {
    dispatchCartAction({ type: "UPDATE_CART", items: items });
  }, []);

  const clearCartHandler = React.useCallback(() => {
    dispatchCartAction({ type: null });
  }, []);

  const toggleCartHandler = React.useCallback(() => {
    dispatchCartAction({ type: "TOGGLE_CART" });
  }, []);

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    cartActive: cartState.cartActive,
    updateCart: updateCartHandler,
    clearCart: clearCartHandler,
    toggleCart: toggleCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartCtxProvider;
