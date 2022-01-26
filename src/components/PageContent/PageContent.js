import React from "react";
import classes from "./PageContent.module.css";

import domImgCover from "../../assets/domImgCover.jpg";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import StackList from "../Stack/StackList";

import FadeInWhenVisible from "../../utils/FadeInWhenVisible";
import { motion } from "framer-motion";

const PageContent = () => {
  return (
    <div className={classes.container}>
      <motion.div
        initial={{ opacity: 0, translateX: "-100%" }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className={classes.imgContainer}>
          <h1>
            Hello,
            <br /> My name is Domenico and I am a web developer
          </h1>

          <img src={domImgCover} alt="Ragazzo con vista nei tetti di Palermo" />
        </div>
      </motion.div>

      <About />
      <StackList />

      <Projects />

      <Contact />
    </div>
  );
};

export default PageContent;
