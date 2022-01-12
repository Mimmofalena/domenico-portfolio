import React from "react";
import classes from "./Header.module.css";

const HeaderItem = (props) => {
  return (
    <a href={props.href} className={classes.divItem}>
      {props.name}
    </a>
  );
};

export default HeaderItem;
