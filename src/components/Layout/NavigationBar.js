import React from "react";
import classes from "./navigationBar.module.css";
import Button from "../UI/Button";
import CartButton from "../Cart/CartButton";

const NavigationBar = () => {
  const menuElements = [
    {
      id: "menu",
      text: "menu",
    },
    {
      id: "location",
      text: "location",
    },
    {
      id: "about-us",
      text: "About Us",
    },
  ];

  const Buttons = (
    <ul className={classes["nav-buttons"]}>
      {menuElements.map((menuElement) => (
        <Button key={menuElement.id} className={classes["nav-button"]} label={menuElement.text} />
      ))}
    </ul>
  );

  return (
    <header className={classes["nav-bar"]}>
      <span className={classes.title}>
        chrono delivery
        <span className="material-icons md-36">rocket_launch</span>
      </span>
      <div className={classes["button-container"]}>
        {Buttons}
        <CartButton />
      </div>
    </header>
  );
};

export default NavigationBar;
