import React from "react";
import classes from "./MenuItemForm.module.css";

const MenuItemForm = (props) => {
  const [itemCount, setItemCount] = React.useState(0);

  const incrementCountHandler = () => {
    setItemCount((prevState) => {
      return prevState + 1;
    });
    props.onUpdateCart(itemCount + 1);
  };

  const decrementCountHandler = () => {
    setItemCount((prevState) => {
      return prevState - 1;
    });
    props.onUpdateCart(itemCount - 1);
  };

  return (
    <div className={classes["item-count"]}>
      <button onClick={incrementCountHandler} disabled={itemCount === 99}>
        +
      </button>
      <label>{itemCount}</label>
      <button onClick={decrementCountHandler} disabled={itemCount === 0}>
        -
      </button>
    </div>
  );
};

export default MenuItemForm;
