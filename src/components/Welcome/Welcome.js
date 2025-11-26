import React from "react";
import TypeWriter from "typewriter-effect";
import { motion } from "framer-motion";
import classes from "./Welcome.module.css";
import { useLanguage } from "../../contexts/LanguageContext";

const Welcome = () => {
  const { t } = useLanguage();
  return (
    <div className={classes.container}>
      <motion.div
        initial={{ opacity: 0, translateY: 30 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.8 }}
        className={classes.heroContent}
      >
        <h1 className={classes.typewriter}>
          <TypeWriter
            key={t("welcome.typewriter1")}
            options={{
              strings: [
                t("welcome.typewriter1"),
                t("welcome.typewriter2"),
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 80,
            }}
          />
        </h1>
      </motion.div>
    </div>
  );
};

export default Welcome;
