import React from "react";
import classes from "./Projects.module.css";

import Card from "../../utils/Card";
import doctorPicture from "../../assets/marina-studio-medico.jpeg";
import pigGamePicture from "../../assets/pig-game.png";
import theBankistPicture from "../../assets/the-bankist.png";
import maptyPicture from "../../assets/mapty.png";
import natoursPicture from "../../assets/natours.png";
import weatherPicture from "../../assets/weather-app.png";
import todoAppImage from "../../assets/Todo-app-redux.png";

const ProjectsDetail = (props) => {
  return (
    <Card>
      <li className={classes.listItem}>
        <h3 className={classes.linkTitle}>{props.title}</h3>
        <a href={props.href}>
          <img className={classes.itemImg} src={props.src} alt={props.alt} />
        </a>
        <p className={classes.detailDescription}>
          About the project:&nbsp;
          <span className={classes.detailText}>{props.descriptionProject}</span>
        </p>

        <p className={classes.detailDescription}>
          Technologies used:&nbsp;
          <span className={classes.detailText}>{props.descriptionTech}</span>
        </p>
      </li>

      {/* <li className={classes.listItem}>
            <h4 className={classes.linkTitle}>Natours</h4>
            <a href="https://natours-domenico.herokuapp.com/">
              <img
                className={classes.itemImg}
                src={natoursPicture}
                alt="Natours"
              />
            </a>
            <p className={classes.detailDescription}>
              Project created to book online tours. <br />
              <br />I have created this project as part of 'Node.js, Express,
              MongoDB & More: The Complete Bootcamp 2022'. This is a tour
              booking APP which allows you to book tours, pay the with
              stripe(test only), and login onto your account.
            </p>
          </li> */}
      {/* 
         
          <li className={classes.listItem}>
            <h4 className={classes.linkTitle}>The Bankist</h4>
            <a href="https://mimmofalena.github.io/The-bankist/">
              <img
                className={classes.itemImg}
                src={theBankistPicture}
                alt="bank app"
              />
            </a>
            <p className={classes.detailDescription}>
              <strong>
                **NOT mobile friendly, please open it on a desktop**
              </strong>
              <br />
              <br /> A mockup bank webapp as part of a JS course. I have
              implemented the concept of Modal which can be seen in the login
              form
            </p>
          </li>
          <li className={classes.listItem}>
            <h4 className={classes.linkTitle}>Mapty</h4>
            <a href="https://mimmofalena.github.io/Mapty/">
              <img
                className={classes.itemImg}
                src={maptyPicture}
                alt="map app"
              />
            </a>
            <p className={classes.detailDescription}>
              <strong>
                **NOT mobile friendly, please open it on a desktop**
              </strong>
              <br />
              <br /> Part of a JS course. Tech used HTML,JS and CSS. This webapp
              purpose is to add workouts which can be either running or cycling
              on a map. I have used Leaflet as a map library.
            </p>
          </li> */}
    </Card>
  );
};

export default ProjectsDetail;
