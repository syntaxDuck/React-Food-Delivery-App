import React from "react";
import classes from "./Button.module.css";

const button = (props) => {
  return (
    <button
      className={props.className || classes["button-default"]}
      onClick={props.onClick}
    >
      <a href="">{props.label || "button"}</a>
    </button>
  );
};

export default button;
