import React from "react";
import classes from "./navigationBar.module.css";
import Button from "../../UI/button/Button";

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
    {
      id: "cart",
      text: "cart",
    },
  ];

  const Buttons = (
    <ul className={classes.buttons}>
      {menuElements.map((menuElement) => (
        <Button key={menuElement.id} label={menuElement.text} />
      ))}
    </ul>
  );

  return (
    <header className={classes["nav-bar"]}>
      <span className={classes.name}>
        chrono delivery
        <span className="material-icons md-36">rocket_launch</span>
      </span>
      <div>
        {Buttons}
      </div>
    </header>
  );
};

export default NavigationBar;
