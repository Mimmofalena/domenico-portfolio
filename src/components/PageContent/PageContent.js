import React, { createRef, useEffect, useRef } from "react";
import classes from "./PageContent.module.css";
import TypeWriter from "typewriter-effect";

import domImgCover from "../../assets/domImgCover.jpg";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import StackList from "../Stack/StackList";

import { motion } from "framer-motion";

const PageContent = () => {
  const myContainer = useRef(null);
  useEffect(() => {
    console.log(myContainer, myContainer.current);
  });
  return (
    <div className={classes.container}>
      <motion.div
        initial={{ opacity: 0, translateX: "-100%" }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className={classes.imgContainer}>
          <div className={classes.typewriter}>
            <TypeWriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    `  Hello, My name is Domenico and I am a web developer...`
                  )
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Welcome to my page 😊")
                  .start();
              }}
            />
          </div>
          <img
            className={classes.image}
            src={domImgCover}
            alt="Ragazzo con vista nei tetti di Palermo"
          />
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
