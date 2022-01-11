import React from "react";
import classes from "./SkillList.module.css";

const SkillItem = (props) => {
  return (
    <li className={classes.listItem}>
      <div className={classes.icon}>{props.icon}</div>
      <p>{props.name}</p>
    </li>
  );
};

export default SkillItem;
