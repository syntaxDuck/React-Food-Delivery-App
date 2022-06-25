import React from "react";
import Card from "../UI/Card";
import MenuItem from "./MenuItem";
import classes from "./Menu.module.css";
import Button from "../UI/Button";

//Functional Imports
import { useCart } from "../Cart/CartContext/CartCtxProvider";

//import project specific variables
import { PROJECT_ID } from "../../private/PRIVATE";

const Menu = () => {
  console.log("Rendering Menu");
  const updateCart = useCart().updateCart;

  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const dbUrl = React.useRef("https://" + [PROJECT_ID] + ".firebaseio.com/");

  // Retreive menu data from database
  React.useEffect(() => {
    const getMenu = async () => {
      try {
        const response = await fetch(dbUrl.current + "Menu.json", {
          method: "GET",
        });

        if (!response.status) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }

        let actualData = await response.json();

        setData(actualData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    getMenu();
  }, [dbUrl]);

  let preCart = [];

  const addToPreCartHandler = (newItem) => {
    const existingCartItemIndex = preCart.findIndex(
      (item) => item.id === newItem.id
    );
    const existingCartItem = preCart[existingCartItemIndex];
    if (existingCartItem) {
      const updatedItem = {
        ...preCart[existingCartItemIndex],
        amount: newItem.amount,
      };
      preCart[existingCartItemIndex] = updatedItem;
    } else {
      preCart.push(newItem);
    }
  };

  const updateCartHandler = (event) => {
    event.preventDefault();
    if (preCart.length !== 0) {
      updateCart(preCart);
    }
  };

  if (error) console.log(error);

  // Create Menu item components if data was retreived from database
  let menuContent;
  if (loading) {
    menuContent = <p>Loading...</p>;
  } else {
    menuContent = (
      <ul className={classes["menu-items"]}>
        {Object.keys(data).map((menuItem) => {
          return (
            <MenuItem
              key={data[menuItem].id}
              id={data[menuItem].id}
              price={data[menuItem].price}
              name={menuItem}
              description={data[menuItem].description}
              onAddToPreCart={addToPreCartHandler}
            />
          );
        })}
      </ul>
    );
  }

  return (
    <Card className={classes["menu-card"]}>
      <a id="menu" className={classes["menu-anchor"]} />
      <form onSubmit={updateCartHandler}>
        {menuContent}
        <Button className={classes["menu-submit"]} label="Add to Cart" />
        <Button className={classes["menu-clear"]} label="Clear" />
      </form>
    </Card>
  );
};

export default React.memo(Menu);
