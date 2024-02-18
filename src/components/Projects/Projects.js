import React from "react";
import classes from "./Projects.module.css";
import { FaHammer } from "react-icons/fa";

import weather from "../../assets/weather-app-new.jpg";
import doc from "../../assets/doc-1.png";
import pig from "../../assets/pig-game.jpg";
import todo from "../../assets/todo-app-redux-new.png";

import Card from "../../utils/Card";
import LinkButton from "../../utils/LinkButton";
import CarouselComponent from "../Carousel/CarouselComponent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const carouselItems = [
    {
      image: doc,
      description:
        "GP Doctor landing page made with REACT, HTML, CSS, JS, NODEJS, NODEMAILER, FORMIK, MATERIAL UI, FRAMER MOTION, GOOGLE MAPS API,",
      href: "https://mimmofalena.github.io/dottoressa-marina/",
    },
    {
      image: todo,
      description:
        "Todo App which helped me improving Javascript methods such as filtering objects.Made using REACT, HTML, CSS, JS, REDUX, Local storage",
      href: "https://mimmofalena.github.io/Todo-REDUX/",
    },
    {
      image: weather,
      description:
        "Simple weather app to practice fetching data. Made with HTML, CSS, JS, AJAX, OPEN WEATHER API, COUNTRY FLAGS API ",
      href: "https://checktheclouds.netlify.app/",
    },
    {
      image: pig,
      description:
        "Simple turn based game that helped me practice JS fundamentals. Made using plain HTML, CSS, JS",
      href: "https://mimmofalena.github.io/pig-game/",
    },
  ];
  return (
    <>
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
          <div className={classes.iconContainer}>
            <FaHammer />
          </div>
          <CarouselComponent items={carouselItems} autoplay="false" />
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
    </>
  );
};

export default Projects;
