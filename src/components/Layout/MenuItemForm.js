import React from "react";
import classes from "./MenuItemForm.module.css";

const MenuItemForm = (props) => {
  const [itemCount, setItemCount] = React.useState(0);
  const isMounted = React.useRef(false);

  const incrementCountHandler = () => {
    setItemCount((prevState) => {
      return prevState + 1;
    });
  };

  const decrementCountHandler = () => {
    setItemCount((prevState) => {
      return prevState - 1;
    });
  };

  React.useEffect(() => {
    if (isMounted.current) {
      const timeout = 1000;
      const timer = setTimeout(() => {
        props.onUpdateCart(itemCount);
      }, timeout);
      return () => clearTimeout(timer);
    } else {
      isMounted.current = true;
    }
  }, [itemCount]);

  return (
    <div className={classes["item-count"]}>
      <button onClick={incrementCountHandler} disabled={itemCount == 99}>
        +
      </button>
      <label>{itemCount}</label>
      <button onClick={decrementCountHandler} disabled={itemCount == 0}>
        -
      </button>
    </div>
  );
};

export default MenuItemForm;
