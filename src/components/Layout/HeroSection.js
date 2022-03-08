import React from "react";
import classes from "./HeroSection.module.css";
import { Link } from "react-router-dom";
import Main from "../../Data/Images/main2.jpg";
const HeroSection = () => {
  return (
    <div className={classes.hero}>
      <div className={classes.text}>
        <div className={classes.collegename}>
          <p>Indian Institute of Technology Roorkee</p>
        </div>

        <div className={classes.chess}>
          <p>CHEMICAL ENGINEERING</p>
          <p>STUDENT</p>
          <p>SOCIETY</p>
        </div>
        <div className={classes.button}>
          <Link to="/aboutus">About Us</Link>
        </div>
      </div>
      <div className={classes.box}>
        <div className={classes.image}>
          <img src={Main} alt={"IIT Roorkee"} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
