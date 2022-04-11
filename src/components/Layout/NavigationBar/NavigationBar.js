import React from "react";
import classes from "./navigationBar.module.css";

const NavigationBar = () => {
  return (
    <header className={classes["nav-bar"]}>
      <span className={classes.name}>
        <h1>chrono delivery</h1>
        <span class="material-icons md-36">rocket_launch</span>
      </span>
      <div>Test</div>
    </header>
  );
};

export default NavigationBar;
