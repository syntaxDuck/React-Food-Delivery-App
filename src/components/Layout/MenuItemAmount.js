import React from "react";
import classes from "./MenuItemAmount.module.css";

const MenuItemAmount = ({ onAddToPreCart }) => {
  console.log("Rendering Menu Item Form"); 
  const [amount, setAmount] = React.useState(0);
  const isMounted = React.useRef(false);

  React.useEffect(() => {
    //Logic help avoid double render on mounting
    if (isMounted.current) setAmount(0);
    else isMounted.current = true;
  }, [onAddToPreCart]);

  const incrementCountHandler = () => {
    onAddToPreCart(amount + 1);
    setAmount((prevState) => {
      return prevState + 1;
    });
  };

  const decrementCountHandler = () => {
    onAddToPreCart(amount - 1);
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

export default MenuItemAmount;
