import React from "react";
import domImgCover from "../../assets/domImgCover.jpg";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Form from "../Form/Form";
import Projects from "../Projects/Projects";
import SkillList from "../SkillList/SkillList";

import classes from "./Body.module.css";

const Body = () => {
  return (
    <div className={classes.container}>
      <div className={classes.imgContainer}>
        <h1>
          Hello,
          <br /> My name is Domenico and I am a web developer
        </h1>
        <img src={domImgCover} alt="Ragazzo con vista nei tetti di Palermo" />
      </div>
      {/* <Slider /> */}

      <About />
      <SkillList />
      <Projects />
      {/* <Contact /> */}
      {/* <Form /> */}
    </div>
  );
};

export default Body;
