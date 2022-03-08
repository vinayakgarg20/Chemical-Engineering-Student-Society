import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div className={classes.Layout}>
      <Navbar />
      <HeroSection />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
