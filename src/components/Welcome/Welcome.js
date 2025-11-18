import React from "react";
import TypeWriter from "typewriter-effect";
import { motion } from "framer-motion";
import classes from "./Welcome.module.css";
import Card from "../../utils/Card";
import { useLanguage } from "../../contexts/LanguageContext";

const Welcome = () => {
  const { t } = useLanguage();
  return (
    <div className={classes.container}>
      <Card>
        <div className={classes.container}>
          <motion.div
            initial={{ opacity: 0, translateX: "-100%" }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 1 }}
          >
            <div className={classes.imgContainer}>
              <h2 className={classes.typewriter}>
                <TypeWriter
                  key={t("welcome.typewriter1")}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(t("welcome.typewriter1"))
                      .pauseFor(100)
                      .deleteAll()
                      .typeString(t("welcome.typewriter2"))
                      .start();
                  }}
                />
              </h2>
            </div>
          </motion.div>
        </div>
      </Card>
    </div>
  );
};

export default Welcome;
