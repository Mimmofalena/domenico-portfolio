import React from "react";
import classes from "./Projects.module.css";

import pigGamePicture from "../../assets/pig-game.png";
import todoAppImage from "../../assets/Todo-app-redux.png";
import theBankistPicture from "../../assets/the-bankist.png";
import maptyPicture from "../../assets/mapty.png";
import DocLandingPagePicture from "../../assets/Doctor-landing-page.png";
import natoursPicture from "../../assets/natours.png";
import weatherPicture from "../../assets/weather-app.png";
import { FaHammer } from "react-icons/fa";

import weather from "../../assets/weather-app-new.jpg";
import doc from "../../assets/doc-1.png";
import pig from "../../assets/pig-game.jpg";
import todo from "../../assets/todo-app-redux-new.jpg";

import Card from "../../utils/Card";
import LinkButton from "../../utils/LinkButton";
import { motion } from "framer-motion";
import ProjectsList from "./ProjectsList";

const Projects = () => {
  return (
    <div className={classes.container}>
      <div className={classes["custom-shape-divider-top-1647591263"]}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={classes["shape-fill"]}
          ></path>
        </svg>
      </div>
      <Card>
        {/* <h2 className={classes.title}>My Projects</h2> */}
        <div className={classes.iconContainer}>
          <FaHammer />
        </div>

        <div className={classes.gridContainer}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <a href="https://mimmofalena.github.io/dottoressa-marina/">
              <img src={doc} alt="Doctor web page link" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            // className={classes["image-grid-col-2"]}
          >
            <a href="https://mimmofalena.github.io/pig-game/">
              <img alt="pig game link" src={pig} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            // className={classes["image-grid-col-2"]}
          >
            <a href="https://checktheclouds.netlify.app/">
              <img src={weather} alt="weather app link" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            // className={classes["image-grid-col-2"]}
          >
            <a href="https://mimmofalena.github.io/Todo-REDUX/">
              <img alt="todo app link" src={todo} />
            </a>
          </motion.div>
        </div>
        <LinkButton to="/domenico-portfolio/projects" />
      </Card>
      <div className={classes["custom-shape-divider-bottom-1648543190"]}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={classes["shape-fill"]}
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Projects;

{
  /* <li className={classes.listItem}>
          <h4 className={classes.linkTitle}>Natours</h4>
          <a href="https://natours-domenico.herokuapp.com/">
          <img
          className={classes.itemImg}
              src={natoursPicture}
              alt="Tour booking app"
            />
          </a>
        </li> */
}
{
  /* <li className={classes.listItem}>
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
        </li> */
}
