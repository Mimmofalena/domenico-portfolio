import React from "react";

import Card from "../../utils/Card";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import classes from "./About.module.css";
import Timeline from "./Timeline";
import { useLanguage } from "../../contexts/LanguageContext";

const AboutDetail = (props) => {
  const location = useLocation();
  const { t } = useLanguage();
  const facts = t("aboutPage.facts");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div>
      <Card>
        <Timeline />
        <div>
          <h2 className={classes.title}>{t("aboutPage.didYouKnow")}</h2>
          <ul>
            {Array.isArray(facts) && facts.map((fact, index) => (
              <li key={index} className={classes.text}>
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default AboutDetail;
