import React from "react";

import Card from "../../utils/Card";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import classes from "./About.module.css";
import Timeline from "./Timeline";

const AboutDetail = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div>
      <Card>
        <Timeline />
        <div>
          <h2 className={classes.title}>Did you know?</h2>
          <ul>
            <li className={classes.text}>
              I love sports. I did martial arts for almost 10 years. I won
              Italian light contact muay thai Championship in 2008 and 2nd place
              in 2009 in Rome. Currently doing Cross Fit.
            </li>
            <li className={classes.text}>
              {" "}
              I love to travel. I would like to see all the 7 wonders! I have
              already visited Chitchen Itza and the Coliseum. Also, I could not
              believe that the Reef in Mexico had brighter colors than the Great
              Barrier Reef in Australia!
            </li>
            <li className={classes.text}>
              {" "}
              I like videogames especially RTS. I was in top 10 in Age of
              Empires 3 in Italy and currenly between the first 1000 in Age of
              Empires 4. Currently enjoying streaming on Twitch.{" "}
            </li>
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default AboutDetail;
