import "./App.css";
import NavigationBar from "./components/Layout/NavigationBar";
import Menu from "./components/Layout/Menu";
import image from "./assets/images/sushi.jpg";

function App() {
  console.log("Rendering");
  return (
      <div className="App">
        <img src={image} alt="Sushi"/>
        <NavigationBar />
        <div className="content">
          <Menu />
        </div>
      </div>
  );
}

export default App;
