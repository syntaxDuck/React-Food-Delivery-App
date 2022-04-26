import React from "react";
import classes from "./Button.module.css";

const button = (props) => {

  const buttonClasses = `${props.className || classes["button-default"]}`;

  return (
    <button
      className={buttonClasses}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <p>{props.label || "button"}</p>
    </button>
  );
};

export default button;
