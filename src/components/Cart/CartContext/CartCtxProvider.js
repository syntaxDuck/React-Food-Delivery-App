import React from "react";
import CartReducer, { defaultCartState } from "./CartReducer";


const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  cartActive: false,
  updateCart: (items) => {},
  clearCart: () => {},
  toggleCart: () => {},
});

export const useCart = () => React.useContext(CartContext);

const CartCtxProvider = (props) => {
  console.log("Rendering Ctx Provider");
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

  console.log(cartContext);

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartCtxProvider;
