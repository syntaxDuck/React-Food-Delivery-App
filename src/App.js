import "./App.css";
import NavigationBar from "./components/Layout/NavigationBar";
import Menu from "./components/Layout/Menu";
import Cart from "./components/Cart/Cart";
import image from "./assets/images/sushi.jpg";
import React from "react";

function App() {
  const [cartActive,setCartActive] = React.useState(false);

  const cartStateHandler = () => {
    setCartActive((prevState) => !prevState);
  }

  if (cartActive) document.body.style.overflow = 'hidden';
  else document.body.style.overflow = 'auto';
  
  console.log("Rendering");
  return (
      <div className="App">
        {cartActive && <Cart onCartStateChange={cartStateHandler}/>}
        <img src={image} alt="Sushi"/>
        <NavigationBar onCartStateChange={cartStateHandler}/>
        <div className="content">
          <Menu />
        </div>
      </div>
  );
}

export default App;
