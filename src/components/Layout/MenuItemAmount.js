import React from "react";
import classes from "./MenuItemAmount.module.css";

const MenuItemAmount = (props) => {
  console.log("Rendering Menu Item Form");
  //Directly manipulating DOM to avoid unecessary renders at the form level
  const [amount, setAmount] = React.useState(0);

  React.useEffect(() => {
    setAmount(0);
  }, [props.onUpdatePreCart]);

  const incrementCountHandler = () => {
    setAmount((prevState) => {
      props.onUpdatePreCart(prevState + 1);
      return prevState + 1;
    });
  };

  const decrementCountHandler = () => {
    setAmount((prevState) => {
      props.onUpdatePreCart(prevState - 1);
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
