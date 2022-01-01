import React from "react";
import HeaderItem from "./HeaderItem";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <HeaderItem name="About" />
      <HeaderItem name="Skills" />
      <HeaderItem name="Projects" />
      <HeaderItem name="GitHub" />
      <HeaderItem name="Contact" />
    </div>
  );
};

export default Header;
