import React from "react";
import classes from "./Projects.module.css";

import pigGamePicture from "../../assets/pig-game.png";
import todoAppImage from "../../assets/Todo-app-redux.png";
import theBankistPicture from "../../assets/the-bankist.png";
import maptyPicture from "../../assets/mapty.png";
import DocLandingPagePicture from "../../assets/Doctor-landing-page.png";
import natoursPicture from "../../assets/natours.png";
import weatherPicture from "../../assets/weather-app.png";

import weather from "../../assets/weather-1.png";
import doc from "../../assets/doc-1.png";
import pig from "../../assets/pig-1.png";
import todo from "../../assets/todo-1.png";

import Card from "../../utils/Card";
import LinkButton from "../../utils/LinkButton";

const Projects = () => {
  return (
    <div>
      <Card>
        <h2 className={classes.title}>My Projects</h2>
        <ul className={classes.listContainer}>
          <li className={classes.listItem}>
            <h3 className={classes.linkTitle}>Doctor page</h3>
            <a href="https://mimmofalena.github.io/dottoressa-marina/">
              <img className={classes.itemImg} src={doc} alt="Doctor" />
            </a>
          </li>
          <li className={classes.listItem}>
            <h3 className={classes.linkTitle}>Todo app using Redux</h3>
            <a href="https://mimmofalena.github.io/Todo-REDUX/">
              <img className={classes.itemImg} src={todo} alt="redux app" />
            </a>
          </li>
          <li className={classes.listItem}>
            <h3 className={classes.linkTitle}>Weather App</h3>
            <a href="https://checktheclouds.netlify.app/">
              <img
                className={classes.itemImg}
                src={weather}
                alt="Weather app"
              />
            </a>
          </li>
          <li className={classes.listItem}>
            <h3 className={classes.linkTitle}>Pig game</h3>
            <a href="https://mimmofalena.github.io/pig-game/">
              <img className={classes.itemImg} src={pig} alt="Game app" />
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
        </li> */}
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
    </div>
  );
};

export default Projects;
