import React from "react";

//Component Imports
import Cart from "./components/Cart/Cart";
import image from "./assets/images/sushi.jpg";
import NavigationBar from "./components/Layout/NavigationBar";
import Menu from "./components/Layout/Menu";
import AboutUs from "./components/Layout/AboutUs";

//Styles Imports
import "./App.css";

function App() {
  const [cartActive, setCartActive] = React.useState(false);

  const cartStateHandler = () => {
    setCartActive((prevState) => !prevState);
  };

  if (cartActive) document.body.style.overflow = "hidden";
  else document.body.style.overflow = "auto";

  console.log("Rendering");
  return (
    <div className="App">
      {cartActive && <Cart onCartStateChange={cartStateHandler} />}
      <img src={image} alt="Sushi" />
      <NavigationBar onCartStateChange={cartStateHandler} />
      <div className="content">
        <AboutUs />
        <Menu />
      </div>
    </div>
  );
}

export default App;
