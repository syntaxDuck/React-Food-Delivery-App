import React from "react";
import Card from "./Card";

const Modal = (props) => {
  return <Card className={props.className}>{props.children}</Card>;
};

export default Modal;
