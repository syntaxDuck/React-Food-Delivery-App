import React from "react";

//Component imports
import Card from "../UI/Card";

//Styles imports
import classes from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={classes["about-us-wrapper"]}>
      <Card className={classes["about-us-card"]}>
        <h3>Welcome to Chrono Delivery!</h3>
        <p>
          We have everything for your daily delivery needs! Please keep an eye
          out for new items for our menu is constantly being updated with local
          cuisine from several restaurants in your area.
        </p>
      </Card>
      <Card className={classes["about-us-card"]}>Goodbye</Card>
    </div>
  );
};

export default AboutUs;
