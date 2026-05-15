import React from "react";
import TypeWriter from "typewriter-effect";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import classes from "./Welcome.module.css";
import { useLanguage } from "../../contexts/LanguageContext";
import domenicoPicture from "../../assets/immagine-curriculum.jpg";

const Welcome = () => {
  const { t } = useLanguage();

  const handleContactScroll = (e) => {
    e.preventDefault();
    const el = document.getElementById("contact-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.heroInner}>
        <motion.div
          className={classes.heroText}
          initial={{ opacity: 0, translateY: 40 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className={classes.greeting}>{t("welcome.greeting")}</p>
          <h1 className={classes.name}>Domenico Cucinotta</h1>
          <p className={classes.title}>{t("welcome.title")}</p>
          <div className={classes.typewriterWrap}>
            <TypeWriter
              key={t("welcome.typewriter1")}
              options={{
                strings: [
                  t("welcome.typewriter1"),
                  t("welcome.typewriter2"),
                  t("welcome.typewriter3"),
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 40,
                delay: 70,
              }}
            />
          </div>
          <div className={classes.ctaRow}>
            <Link to="/domenico-portfolio/projects" className={classes.ctaPrimary}>
              {t("welcome.ctaProjects")}
            </Link>
            <a href="#contact-section" onClick={handleContactScroll} className={classes.ctaSecondary}>
              {t("welcome.ctaContact")}
            </a>
          </div>
        </motion.div>

        <motion.div
          className={classes.heroImage}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <img src={domenicoPicture} alt="Domenico Cucinotta" className={classes.avatar} />
        </motion.div>
      </div>
    </div>
  );
};

export default Welcome;
