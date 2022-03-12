import React from "react";
import classes from "./About.module.css";
import Card from "../../utils/Card";
import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { aboutData } from "./aboutData";

const AboutDetail = () => {
  const ref = useRef();

  const [showSection, setShowSection] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  console.log(selectedItem);

  const showSectionHandler = (e) => {
    setShowSection(!showSection);

    setSelectedItem(e.target.id);
    console.log(showSection);
    console.log("clicked item", selectedItem);
  };

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <h3 className={classes.detailTitle}>About</h3>
      <Card>
        {aboutData.map((item, index) => (
          <>
            <section
              ref={ref}
              id={item.id}
              onClick={showSectionHandler}
              className={
                showSection && +selectedItem === item.id
                  ? [classes.section]
                  : [classes.section, classes.section_hide].join(" , ")
              }
            >
              {showSection && +selectedItem === item.id ? (
                <>
                  <h3 className={classes.title}>{item.title}</h3>
                  <p className={classes.text}>{item.text}</p>
                </>
              ) : (
                <>
                  <h2 className={classes.title_hide}>{item.title}</h2>
                  <h2 className={classes.subtitle}>Reveal</h2>
                </>
              )}
            </section>
          </>
        ))}
      </Card>
    </>
  );
};

export default AboutDetail;
