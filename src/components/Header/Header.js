import React from "react";
import HeaderItem from "./HeaderItem";
import classes from "./Header.module.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={classes.header}>
      <NavLink
        end
        // style={{ textDecoration: "none", color: "black" }}
        to="domenico-portfolio"
        className={({ isActive }) =>
          isActive ? classes.active : classes.inactive
        }
      >
        Home
      </NavLink>
      <NavLink
        to="domenico-portfolio/about"
        className={({ isActive }) =>
          isActive ? classes.active : classes.inactive
        }
      >
        About
      </NavLink>
      <NavLink
        to="domenico-portfolio/projects"
        className={({ isActive }) =>
          isActive ? classes.active : classes.inactive
        }
      >
        Projects
      </NavLink>
      <NavLink
        to="domenico-portfolio/stack"
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
