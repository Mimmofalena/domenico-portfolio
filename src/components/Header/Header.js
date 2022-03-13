import React, { useState } from "react";
import HeaderItem from "./HeaderItem";
import classes from "./Header.module.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import { CgDetailsMore } from "react-icons/cg";
import HeaderList from "./HeaderList";

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);
  const menuHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={classes.header}>
      <h2 className={classes.logo}>DOMENICO PORTFOLIO</h2>
      <div className={classes.menu}>
        {!isOpen ? (
          <h2 className={classes.more} onClick={menuHandler}>
            <CgDetailsMore />
          </h2>
        ) : (
          <div className={classes.openMenu}>
            <h2 className={classes.close} onClick={menuHandler}>
              X
            </h2>
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
          </div>
        )}
      </div>
      <HeaderList className={classes.largeScreen} />
    </div>
    // </div>
  );
};

export default Header;
