import React from "react";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const HeaderList = (props) => {
  return (
    <div className={props.className}>
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
      <NavLink
        to="domenico-portfolio/about"
        className={({ isActive }) =>
          isActive ? classes.active : classes.inactive
        }
      >
        About
      </NavLink>
    </div>
  );
};

export default HeaderList;
