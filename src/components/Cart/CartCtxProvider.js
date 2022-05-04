import React from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "UPDATE_CART") {
    let updatedItems = [...state.items];

    action.items.forEach((newItem) => {
      //Get existing item index and existing object if item exists in cart
      const existingCartItemIndex = updatedItems.findIndex(
        (item) => item.id === newItem.id
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      //If item already exists in cart add items to existing object
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + newItem.amount,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
        //Else push new item into cart
      } else {
        updatedItems.push(newItem);
      }
    });

    //Sum total cart amount
    const totalAmount = updatedItems.reduce((total, item) => {
      return total + item.amount * item.price;
    }, 0);

    return { items: updatedItems, totalAmount: totalAmount };
  }
  console.log("Here");
  return defaultCartState;
};

const CartCtxProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = React.useReducer(
    cartReducer,
    defaultCartState
  );

  const updateCartHandler = React.useCallback((items) => {
    dispatchCartAction({ type: "UPDATE_CART", items: items });
  }, []);

  const clearCartHandler = React.useCallback(() => {
    console.log("Clear"); 
    dispatchCartAction({ type: null });
  }, []);

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    updateCart: updateCartHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartCtxProvider;
