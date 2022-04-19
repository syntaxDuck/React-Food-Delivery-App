import React from "react";
import classes from "./MenuItem.module.css";

const MenuItem = (props) => {
  return (
    <li className={classes["menu-item"]}>
      <div className={classes["item-details"]}>
        <div>
          {props.price} {props.name}
        </div>
        <span>{props.description}</span>
      </div>
      <div className={classes["item-count"]}>
        <button>+</button>
        <label>10</label>
        <button>-</button>
      </div>
    </li>
  );
};

export default MenuItem;
