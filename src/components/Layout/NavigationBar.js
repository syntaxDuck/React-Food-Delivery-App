import React from "react";

//Component Imports
import classes from "./navigationBar.module.css";
import Button from "../UI/Button";
import CartButton from "../Cart/CartButton";

//Functional Imports
import { useCart } from "../Cart/CartContext/CartCtxProvider";

const NavigationBar = () => {
  console.log("Rendering Nav");
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

  const toggleCart = useCart().toggleCart;

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
        <CartButton onCartStateChange={toggleCart} />
      </div>
    </header>
  );
};

export default React.memo(NavigationBar);
