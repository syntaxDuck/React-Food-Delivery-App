import React from "react";
import classes from "./CartItemAmount.module.css";

const CartItemAmount = ({ amountInCart, onUpdateCart }) => {
  const [amount, setAmount] = React.useState(amountInCart);
  const isMounted = React.useRef(false);

  // React.useEffect(() => {
  //   //Logic help avoid double render on mounting
  //   //And reset
  //   if(isMounted.current) setAmount(0);
  //   else isMounted.current=true;
  // }, [onUpdateCart]);

  const incrementCountHandler = () => {
    onUpdateCart(amount + 1);
    setAmount((prevState) => {
      return prevState + 1;
    });

  };

  const decrementCountHandler = () => {
    onUpdateCart(amount - 1);
    setAmount((prevState) => {
      return prevState - 1;
    });
  };

  return (
    <div className={classes["item-count"]}>
      <button
        type="button"
        onClick={incrementCountHandler}
        disabled={amount === 99}
      >
        +
      </button>
      <label>{amount}</label>
      <button
        type="button"
        onClick={decrementCountHandler}
        disabled={amount === 0}
      >
        -
      </button>
    </div>
  );
};

export default CartItemAmount;
