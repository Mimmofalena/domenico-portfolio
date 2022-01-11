import React from "react";
import classes from "./Projects.module.css";
import doctorPicture from "../../assets/marina-studio-medico.jpeg";
import pigGamePicture from "../../assets/pig-game.png";
import theBankistPicture from "../../assets/the-bankist.png";
import maptyPicture from "../../assets/mapty.png";
import Card from "../../utils/Card";

const Projects = () => {
  return (
    <Card>
      <section className={classes.container}>
        <h3>My Projects</h3>
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
          </li>
          <li className={classes.listItem}>
            <h4 className={classes.linkTitle}>Pig game</h4>
            <a href="https://mimmofalena.github.io/pig-game/">
              <img
                className={classes.itemImg}
                src={pigGamePicture}
                alt="Doctor"
              />
            </a>
          </li>
          <li className={classes.listItem}>
            <h4 className={classes.linkTitle}>The Bankist</h4>
            <a href="https://mimmofalena.github.io/The-bankist/">
              <img
                className={classes.itemImg}
                src={theBankistPicture}
                alt="Doctor"
              />
            </a>
          </li>
          <li className={classes.listItem}>
            <h4 className={classes.linkTitle}>Mapty</h4>
            <a href="https://mimmofalena.github.io/Mapty/">
              <img
                className={classes.itemImg}
                src={maptyPicture}
                alt="Doctor"
              />
            </a>
          </li>
        </ul>
      </section>
    </Card>
  );
};

export default Projects;
