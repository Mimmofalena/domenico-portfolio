import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const HeaderItem = (props) => {
  return (
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
  );
};

export default HeaderItem;
