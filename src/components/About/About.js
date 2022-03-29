import React from "react";
import classes from "./About.module.css";

import Card from "../../utils/Card";
import LinkButton from "../../utils/LinkButton";
import { motion } from "framer-motion";
import domenicoPicture from "../../assets/immagine-curriculum.jpg";
import Welcome from "../Welcome/Welcome";
const About = () => {
  const text = `My name is Domenico and I am a front end developer from Italy. I am passionate about developing and I have been coding
  since 2020 despite the pandemic and a full time job as a front line ICU nurse. I am excited to be applying for new jobs and take on new challenges.
`;

  return (
    <div className={classes.container}>
      <Card>
        {/* <h2 className={classes.title}>About</h2> */}
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
