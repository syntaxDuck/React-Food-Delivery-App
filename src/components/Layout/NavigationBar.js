import React from "react";

//Component Imports
import classes from "./navigationBar.module.css";
import Button from "../UI/Button";
import CartButton from "../Cart/CartButton";

//Functional Imports
import { CartContext } from "../Cart/CartContext/CartCtxProvider";

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

  const cartCtx = React.useContext(CartContext);

  const Buttons = (
    <ul className={classes["nav-buttons"]}>
      {menuElements.map((menuElement) => (
        <Button
          href={`#${menuElement.id}`}
          key={menuElement.id}
          className={classes["nav-button"]}
          label={menuElement.text}
        />
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
        <CartButton onCartStateChange={cartCtx.toggleCart} />
      </div>
    </header>
  );
};

export default NavigationBar;
