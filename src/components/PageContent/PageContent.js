import React, { createRef, useEffect, useRef } from "react";
import classes from "./PageContent.module.css";
import TypeWriter from "typewriter-effect";

import domImgCover from "../../assets/domImgCover.jpg";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import StackList from "../Stack/StackList";

import { motion } from "framer-motion";
import Welcome from "../Welcome/Welcome";

const PageContent = () => {
  return (
    <div className={classes.container}>
      <Welcome />
      <About />

      <StackList />
      <Projects />
      <Contact />
    </div>
  );
};

export default PageContent;
