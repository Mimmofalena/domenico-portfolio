import React from "react";
import { aboutData } from "./aboutData";
import AboutDetail from "./AboutDetail";
import classes from "./About.module.css";
const AboutList = () => {
  return (
    <div>
      <h2 className={classes.detailTitle}>About</h2>
      {aboutData.map((item) => {
        return <AboutDetail title={item.title} text={item.text} />;
      })}
    </div>
  );
};

export default AboutList;
