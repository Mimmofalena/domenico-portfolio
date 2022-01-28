import React from "react";
import classes from "./Projects.module.css";

import doctorPicture from "../../assets/marina-studio-medico.jpeg";
import pigGamePicture from "../../assets/pig-game.png";
import theBankistPicture from "../../assets/the-bankist.png";
import maptyPicture from "../../assets/mapty.png";
import natoursPicture from "../../assets/natours.png";
import weatherPicture from "../../assets/weather-app.png";
import Card from "../../utils/Card";
import LinkButton from "../../utils/LinkButton";

const Projects = () => {
  return (
    <Card>
      <h3 className={classes.title}>My Projects</h3>
      <ul className={classes.listContainer}>
        <li className={classes.listItem}>
          <h4 className={classes.linkTitle}>Doctor page</h4>
          <a href="https://mimmofalena.github.io/dottoressa-marina/">
            <img className={classes.itemImg} src={doctorPicture} alt="Doctor" />
          </a>
        </li>
        <li className={classes.listItem}>
          <h4 className={classes.linkTitle}>Weather App</h4>
          <a href="https://checktheclouds.netlify.app/">
            <img
              className={classes.itemImg}
              src={weatherPicture}
              alt="Weather app"
            />
          </a>
        </li>
        <li className={classes.listItem}>
          <h4 className={classes.linkTitle}>Pig game</h4>
          <a href="https://mimmofalena.github.io/pig-game/">
            <img
              className={classes.itemImg}
              src={pigGamePicture}
              alt="Game app"
            />
          </a>
        </li>
        <li className={classes.listItem}>
          <h4 className={classes.linkTitle}>Natours</h4>
          <a href="https://natours-domenico.herokuapp.com/">
            <img
              className={classes.itemImg}
              src={natoursPicture}
              alt="Tour booking app"
            />
          </a>
        </li>
        {/* <li className={classes.listItem}>
          <h4 className={classes.linkTitle}>Natours</h4>
          <a href="https://natours-domenico.herokuapp.com/">
            <img
              className={classes.itemImg}
              src={natoursPicture}
              alt="Tour booking app"
            />
          </a>
        </li>
        
        <li className={classes.listItem}>
          <h4 className={classes.linkTitle}>The Bankist</h4>
          <a href="https://mimmofalena.github.io/The-bankist/">
            <img
              className={classes.itemImg}
              src={theBankistPicture}
              alt="Bank app"
            />
          </a>
        </li>
        <li className={classes.listItem}>
          <h4 className={classes.linkTitle}>Mapty</h4>
          <a href="https://mimmofalena.github.io/Mapty/">
            <img className={classes.itemImg} src={maptyPicture} alt="Mapty" />
          </a>
        </li> */}
      </ul>
      <LinkButton to="/domenico-portfolio/projects" />
    </Card>
  );
};

export default Projects;
