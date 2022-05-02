import React from "react";
import classes from "./Button.module.css";

const button = ({ className, onClick, disabled, label }) => {
  const buttonClasses = `${className || classes["button-default"]}`;

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
    >
      <p>{label || "button"}</p>
    </button>
  );
};

export default button;
