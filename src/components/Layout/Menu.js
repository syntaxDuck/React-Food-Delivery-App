import React from "react";
import Card from "../UI/Card";
import MenuItem from "./MenuItem";

import classes from "./Menu.module.css";

const Menu = () => {
  const menuItems = [
    {
      id: "i1",
      name: "california roll",
      description: "a sushi roll dumby",
      price: 10,
    },
    {
      id: "i2",
      name: "angus burger",
      description: "moooooooooooooooooooo",
      price: 12,
    },
    {
      id: "i3",
      name: "romen",
      description: "shit thrown into a pot... pretty good",
      price: 8,
    },
  ];

  const menuContent = (
    <ul className={classes["menu-items"]}>
      {menuItems.map((menuItem) => {
        const price = `$${menuItem.price}`;

        return (
          <MenuItem
            key={menuItem.id}
            id={menuItem.id}
            price={price}
            name={menuItem.name}
            description={menuItem.description}
          />
        );
      })}
    </ul>
  );
  return <Card>{menuContent}</Card>;
};

export default Menu;
