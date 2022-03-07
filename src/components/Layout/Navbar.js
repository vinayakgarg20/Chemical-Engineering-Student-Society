import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Chess</div>
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/events">events</Link>
          </li>
          <li>
            <Link to="/blog">blog</Link>
          </li>
          <li>
            <Link to="/team">team</Link>
          </li>
          <li>
            <Link to="/aboutus">about us</Link>
          </li>
          <li>
            <Link to="/contactus">contact us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
