import React from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "UPDATE_COUNT") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    let updatedItems;
    const existingCartItem = state.items[existingCartItemIndex];

    if (existingCartItem) {
      if (action.item.amount === 0) {
        updatedItems = state.items.filter((item) => item.id !== action.item.id);
      } else {
        const updatedItem = { ...existingCartItem, amount: action.item.amount };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }
    } else {
      updatedItems = state.items.concat(action.item);
    }

    const totalAmount = updatedItems.reduce((total, item) => {
      return total + item.amount * item.price;
    }, 0);

    return { items: updatedItems, totalAmount: totalAmount };
  };
  return defaultCartState;
};

const CartCtxProvider = (props) => {
  const [cartState, dispatchCartAction] = React.useReducer(
    cartReducer,
    defaultCartState
  );

  const updateItemCountHandler = (item) => {
    dispatchCartAction({ type: "UPDATE_COUNT", item: item });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    updateItemCount: updateItemCountHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartCtxProvider;
