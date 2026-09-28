import React from "react";
import classes from "./Timeline.module.css";
import FadeInWhenVisible from "../../utils/FadeInWhenVisible";
import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";

const Timeline = () => {
  const { t } = useLanguage();
  return (
    <ul className={classes.timeline}>
      {/* //item 1 - Always visible immediately */}
      <motion.li
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className={classes["direction-l"]}>
          <div className={classes["flag-wrapper"]}>
            <span className={classes.hexa}></span>
            <span className={classes.flag}>{t("timeline.current.flag")}</span>
            <span className={classes["time-wrapper"]}>
              <span className={classes.time}>{t("timeline.current.time")}</span>
            </span>
          </div>
          <div className={classes.desc}>
            {t("timeline.current.desc")}
          </div>
        </div>
      </motion.li>
      <FadeInWhenVisible delay={0.2}>
        <li>
          <div className={classes["direction-r"]}>
            <div className={classes["flag-wrapper"]}>
              <span className={classes.hexa}></span>
              <span className={classes.flag}>
                {t("timeline.digitalPayments.flag")}
              </span>
              <span className={classes["time-wrapper"]}>
                <span className={classes.time}>{t("timeline.digitalPayments.time")}</span>
              </span>
            </div>
            <div className={classes.desc}>
              {t("timeline.digitalPayments.desc")}
            </div>
          </div>
        </li>
      </FadeInWhenVisible>
      <FadeInWhenVisible delay={0.2}>
        <li>
          <div className={classes["direction-l"]}>
            <div className={classes["flag-wrapper"]}>
              <span className={classes.hexa}></span>
              <span className={classes.flag}>{t("timeline.developedIT.flag")}</span>
              <span className={classes["time-wrapper"]}>
                <span className={classes.time}>{t("timeline.developedIT.time")}</span>
              </span>
            </div>
            <div className={classes.desc}>
              {t("timeline.developedIT.desc")}
            </div>
          </div>
        </li>
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.2}>
        <li>
          <div className={classes["direction-r"]}>
            <div className={classes["flag-wrapper"]}>
              <span className={classes.hexa}></span>
              <span className={classes.flag}>{t("timeline.backToItaly.flag")}</span>
              <span className={classes["time-wrapper"]}>
                <span className={classes.time}>{t("timeline.backToItaly.time")}</span>
              </span>
            </div>
            <div className={classes.desc}>
              {t("timeline.backToItaly.desc")}
            </div>
          </div>
        </li>
      </FadeInWhenVisible>
      <FadeInWhenVisible delay={0.2}>
        <li>
          <div className={classes["direction-l"]}>
            <div className={classes["flag-wrapper"]}>
              <span className={classes.hexa}></span>
              <span className={classes.flag}>{t("timeline.australia.flag")}</span>
              <span className={classes["time-wrapper"]}>
                <span className={classes.time}>{t("timeline.australia.time")}</span>
              </span>
            </div>
            <div className={classes.desc}>
              {t("timeline.australia.desc")}
            </div>
          </div>
        </li>
      </FadeInWhenVisible>
      <FadeInWhenVisible delay={0.2}>
        <li>
          <div className={classes["direction-r"]}>
            <div className={classes["flag-wrapper"]}>
              <span className={classes.hexa}></span>
              <span className={classes.flag}>{t("timeline.movedToUK.flag")}</span>
              <span className={classes["time-wrapper"]}>
                <span className={classes.time}>{t("timeline.movedToUK.time")}</span>
              </span>
            </div>
            <div className={classes.desc}>
              {t("timeline.movedToUK.desc")} <br />
              <br />
              {t("timeline.movedToUK.desc2")}
            </div>
          </div>
        </li>
      </FadeInWhenVisible>
      <FadeInWhenVisible delay={0.2}>
        <li>
          <div className={classes["direction-l"]}>
            <div className={classes["flag-wrapper"]}>
              <span className={classes.hexa}></span>
              <span className={classes.flag}>{t("timeline.nursingDegree.flag")}</span>
              <span className={classes["time-wrapper"]}>
                <span className={classes.time}>{t("timeline.nursingDegree.time")}</span>
              </span>
            </div>
            <div className={classes.desc}>
              {t("timeline.nursingDegree.desc")}
            </div>
          </div>
        </li>
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.2}>
        <li>
          <div className={classes["direction-r"]}>
            <div className={classes["flag-wrapper"]}>
              <span className={classes.hexa}></span>
              <span className={classes.flag}>{t("timeline.italianArmy.flag")}</span>
              <span className={classes["time-wrapper"]}>
                <span className={classes.time}>{t("timeline.italianArmy.time")}</span>
              </span>
            </div>
            <div className={classes.desc}>
              {t("timeline.italianArmy.desc")}
            </div>
          </div>
        </li>
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.2}>
        <li>
          <div className={classes["direction-l"]}>
            <div className={classes["flag-wrapper"]}>
              <span className={classes.hexa}></span>
              <span className={classes.flag}>{t("timeline.highSchool.flag")}</span>
              <span className={classes["time-wrapper"]}>
                <span className={classes.time}>{t("timeline.highSchool.time")}</span>
              </span>
            </div>
            <div className={classes.desc}>
              {t("timeline.highSchool.desc")}
            </div>
          </div>
        </li>
      </FadeInWhenVisible>
    </ul>
  );
};

export default Timeline;
