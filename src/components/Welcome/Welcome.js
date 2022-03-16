import React from "react";
import TypeWriter from "typewriter-effect";
import { motion } from "framer-motion";
import classes from "./Welcome.module.css";
import Card from "../../utils/Card";

const Welcome = () => {
  return (
    <div className={classes.container}>
      <Card>
        <div className={classes.container}>
          <motion.div
            initial={{ opacity: 0, translateX: "-100%" }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1.5 }}
          >
            <div className={classes.imgContainer}>
              <h2 className={classes.typewriter}>
                <TypeWriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        `  Hello, My name is Domenico and I am a web developer...`
                      )
                      .pauseFor(500)
                      .deleteAll()
                      .typeString("Welcome to my page 😊")
                      .start();
                  }}
                />
              </h2>
              {/* <img
            className={classes.image}
            src={domImgCover}
            alt="Ragazzo con vista nei tetti di Palermo"
          /> */}
            </div>
          </motion.div>
        </div>
      </Card>
    </div>
  );
};

export default Welcome;
