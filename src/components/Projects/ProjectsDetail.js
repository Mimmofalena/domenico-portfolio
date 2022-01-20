import React from "react";
import classes from "./Projects.module.css";

import Card from "../../utils/Card";
import doctorPicture from "../../assets/marina-studio-medico.jpeg";
import pigGamePicture from "../../assets/pig-game.png";
import theBankistPicture from "../../assets/the-bankist.png";
import maptyPicture from "../../assets/mapty.png";
import natoursPicture from "../../assets/natours.png";
import weatherPicture from "../../assets/weather-app.png";

const ProjectsDetail = () => {
  return (
    <>
      <h3 className={classes.detailTitle}>My Projects</h3>
      <Card>
        <ul className={classes.listContainer}>
          <li className={classes.listItem}>
            <h4 className={classes.linkTitle}>Doctor page</h4>
            <a href="https://mimmofalena.github.io/dottoressa-marina/">
              <img
                className={classes.itemImg}
                src={doctorPicture}
                alt="Doctor"
              />
            </a>
            <p className={classes.detailDescription}>
              This Doctor landing page created with React and Material UI.
              <br /> I have created this project right after completing React
              Course. I have set it up using create-react-app. In this project I
              have used for my first time Material UI learning it from online
              resources. I also used EmailJS and Formik library to implement the
              contact form. Consumed google MAPS API.
            </p>
          </li>
          <li className={classes.listItem}>
            <h4 className={classes.linkTitle}>Weather App</h4>
            <a href="https://mimmofalena.github.io/weather-app/">
              <img
                className={classes.itemImg}
                src={weatherPicture}
                alt="Weather app"
              />
            </a>
            <p className={classes.detailDescription}>
              Created consuming Open weather API and Country Flags REST Api.
              Made with simple HTML, CSS and JS.
              <br /> You can search by city name and it gives you an overview of
              the current weather. If a city is not found, it gives an alert box
              shows.
            </p>
          </li>
          <li className={classes.listItem}>
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
              <br />I have created this project right after completing 'Node.js,
              Express, MongoDB & More: The Complete Bootcamp 2022'. This is a
              tour booking APP which allows you to book tours, pay the with
              stripe(test only), and login onto your account.
            </p>
          </li>
          <li className={classes.listItem}>
            <h4 className={classes.linkTitle}>Pig game</h4>
            <a href="https://mimmofalena.github.io/pig-game/">
              <img
                className={classes.itemImg}
                src={pigGamePicture}
                alt="game app"
              />
            </a>
            <p className={classes.detailDescription}>
              <strong>
                **NOT mobile friendly, please open it on a desktop**
              </strong>
              <br />
              <br /> Simple game using static HTML completed as part of a JS
              course. It improved my overall basic JS skills.
            </p>
          </li>
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
          </li>
        </ul>
      </Card>
    </>
  );
};

export default ProjectsDetail;
