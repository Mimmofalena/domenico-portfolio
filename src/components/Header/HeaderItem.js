import React from "react";
import classes from "./Header.module.css";

const HeaderItem = (props) => {
  return <div className={classes.divItem}>{props.name}</div>;
};

export default HeaderItem;
