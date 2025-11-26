import React from "react";
import classes from "./About.module.css";

import Card from "../../utils/Card";
import LinkButton from "../../utils/LinkButton";
import { motion } from "framer-motion";
import domenicoPicture from "../../assets/immagine-curriculum.jpg";
import Welcome from "../Welcome/Welcome";
import { useLanguage } from "../../contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
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
              alt={t("common.smilingPerson")}
            />
          </motion.div>

          <motion.div
            className={classes.motion}
            initial={{ opacity: 0, translateX: "100%" }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <blockquote className={classes.quote}>
              {t("common.quote")}
              <footer style={{ marginTop: "1rem", fontWeight: 600, color: "var(--accent-color)" }}>
                {t("common.quoteAuthor")}
              </footer>
            </blockquote>
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
