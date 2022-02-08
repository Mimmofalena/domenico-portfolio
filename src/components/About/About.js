import React from "react";
import classes from "./About.module.css";

import Card from "../../utils/Card";
import LinkButton from "../../utils/LinkButton";

const About = () => {
  const text = `My name is Domenico and I am a front end developer from Italy. I am passionate about developing and I have been coding
  since 2020 despite the pandemic and a full time job as a front line ICU nurse. I am excited to be applying for new jobs and take on new challenges.
`;

  return (
    <Card>
      <h3 className={classes.title}>About me</h3>

      <p className={classes.text}>{`${text}`}</p>

      <LinkButton to="/domenico-portfolio/about" />
    </Card>
  );
};

export default About;
