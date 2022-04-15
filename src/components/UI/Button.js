import React from "react";
import classes from "./Button.module.css";

const button = (props) => {
  return (
    <button
      className={props.className || classes["button-default"]}
      onClick={props.onClick}
    >
      <p>{props.label || "button"}</p>
    </button>
  );
};

export default button;
