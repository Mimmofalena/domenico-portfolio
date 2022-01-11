import React from "react";
import HeaderItem from "./HeaderItem";
import classes from "./Header.module.css";
import { Routes, Route, Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={classes.header}>
      <Link to="/about" target="_blank">
        <HeaderItem name="About" />
      </Link>
      <HeaderItem name="Stack" />
      <HeaderItem name="Projects" />
      <HeaderItem name="GitHub" />
      <HeaderItem name="Contact" />
    </div>
  );
};

export default Header;
