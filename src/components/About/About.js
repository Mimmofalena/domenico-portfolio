import React from "react";
import classes from "./About.module.css";

import Card from "../../utils/Card";
import LinkButton from "../../utils/LinkButton";
import domImgCover from "../../assets/domImgCover.jpg";

const About = () => {
  const text = `My name is Domenico and I am a front end developer from Italy. I am passionate about developing and I have been coding
  since 2020 despite the pandemic and a full time job as a front line ICU nurse. I am excited to be applying for new jobs and take on new challenges.
`;

  return (
    <div>
      <Card>
        <h2 className={classes.title}>About</h2>
        <img
          className={classes.image}
          src={domImgCover}
          alt="Ragazzo con vista nei tetti di Palermo"
        />

        <p className={classes.text}>{`${text}`}</p>

        <LinkButton to="/domenico-portfolio/about" />
      </Card>
    </div>
  );
};

export default About;
