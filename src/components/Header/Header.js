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
      <NavLink
        to="projects"
        className={({ isActive }) =>
          isActive ? classes.active : classes.inactive
        }
      >
        Projects
      </NavLink>
      <NavLink
        to="stack"
        className={({ isActive }) =>
          isActive ? classes.active : classes.inactive
        }
      >
        Stack
      </NavLink>

      <HeaderItem name="Contact" />
    </div>
  );
};

export default Header;
