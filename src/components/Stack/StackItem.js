import React from "react";
import classes from "./Stack.module.css";

const StackItem = (props) => {
  return (
    <li className={classes.listItem}>
      <div className={classes.icon}>{props.icon}</div>
      <p>{props.name}</p>
    </li>
  );
};

export default StackItem;
