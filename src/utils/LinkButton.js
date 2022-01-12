import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import classes from "./LinkButton.module.css";

const LinkButton = (props) => {
  return (
    <Link className={classes.link} to={props.to}>
      Discover more...
    </Link>
  );
};

export default LinkButton;
