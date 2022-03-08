import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li className={classes.button}>
            <Link to="/contactus">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
