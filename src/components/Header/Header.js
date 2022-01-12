import React from "react";
import HeaderItem from "./HeaderItem";
import classes from "./Header.module.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={classes.header}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? classes.active : classes.inactive
        }
      >
        Home
      </NavLink>
      <NavLink
        to="about"
        className={({ isActive }) =>
          isActive ? classes.active : classes.inactive
        }
      >
        About
      </NavLink>

      <HeaderItem name="Stack" />
      <HeaderItem name="Projects" />
      <HeaderItem name="GitHub" />
      <HeaderItem name="Contact" />
    </div>
  );
};

export default Header;
