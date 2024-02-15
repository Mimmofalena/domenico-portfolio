import React from "react";
import classes from "./About.module.css";

import Card from "../../utils/Card";
import LinkButton from "../../utils/LinkButton";
import { motion } from "framer-motion";
import domenicoPicture from "../../assets/immagine-curriculum.jpg";
import Welcome from "../Welcome/Welcome";

const About = () => {
  return (
    <div className={classes.container}>
      <Card>
        <div className={classes.grid}>
          <motion.div
            className={classes.motion}
            initial={{ opacity: 0, translateX: "-100%" }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img
              className={classes.image}
              src={domenicoPicture}
              alt="Ragazzo sorridente"
            />
          </motion.div>

          <motion.div
            className={classes.motion}
            initial={{ opacity: 0, translateX: "100%" }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <q className={classes.quote}>
              Happiness is an attitude of mind, bord of the simple determination
              to be happy under all outward circumstances. <br />
              J.Donald Walters
            </q>
          </motion.div>
        </div>
        <Welcome />

        {/* <p className={classes.text}>{`${text}`}</p> */}

        <LinkButton to="/domenico-portfolio/about" />
      </Card>
    </div>
  );
};

export default About;
