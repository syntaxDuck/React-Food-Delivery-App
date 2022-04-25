import React from "react";
import Card from "../UI/Card";
import MenuItem from "./MenuItem";
import classes from "./Menu.module.css";
import Button from "../UI/Button";
import CartContext from "../Cart/cart-context";

//import project specific variables
import { PROJECT_ID } from "../../private/PRIVATE";

const Menu = () => {
  console.log("Rendering Menu");
  const cartCtx = React.useContext(CartContext);
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const dbUrl = 'https://' + [PROJECT_ID] + ".firebaseio.com/";


  // Retreive menu data from database
  React.useEffect(() => {
    const getMenu = async () => {
      try {
        const response = await fetch(dbUrl + "Menu.json", {
          method: "GET",
        });

        console.log(JSON.stringify(response.json));

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
  }, []);
  
  let order = [];

  const addToPreCartHandler = (newItem) => {
    const existingCartItemIndex = order.findIndex(
      (item) => item.id === newItem.id
    );
    const existingCartItem = order[existingCartItemIndex];
    if (existingCartItem) {
      const updatedItem = {
        ...order[existingCartItemIndex],
        amount: newItem.amount,
      };
      order[existingCartItemIndex] = updatedItem;
    } else {
      order.push(newItem);
    }
  };

  const updateCartHandler = (event) => {
    event.preventDefault();
    const postRequest = async () => {
      const post = dbUrl + "/" + "orders.json";
      console.log(post);
      const response = await fetch(post, {
        method: "POST",
        headers: { contentType: "application/json" },
        body: JSON.stringify(order),
      });
      return response;
    };

    const response = postRequest();
    console.log(response);
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
      <form onSubmit={updateCartHandler}>
        {menuContent}
        <Button className={classes["menu-submit"]} label="Add to Cart" />
      </form>
    </Card>
  );
};

export default Menu;
