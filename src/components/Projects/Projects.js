import React from "react";
import classes from "./Projects.module.css";

import weather from "../../assets/weather-app.png";
import doc from "../../assets/doctor-webapp.png";
import pig from "../../assets/pig-game.png";
import todo from "../../assets/todoapp-with-redux.png";
import bnb from "../../assets/bnb-casa-vacanza.png";

import Card from "../../utils/Card";
import LinkButton from "../../utils/LinkButton";
import CarouselComponent from "../Carousel/CarouselComponent";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLanguage } from "../../contexts/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();

  const carouselItems = [
    {
      image: bnb,
      description: t("projectsPage.carousel.bnb"),
      href: "https://casa-vacanza.vercel.app/en/services",
    },
    {
      image: doc,
      description: t("projectsPage.carousel.doctor"),
      href: "https://www.dottoressatricolimarina.it/",
    },
    {
      image: todo,
      description: t("projectsPage.carousel.todo"),
      href: "https://mimmofalena.github.io/Todo-REDUX/",
    },
    {
      image: weather,
      description: t("projectsPage.carousel.weather"),
      href: "https://checktheclouds.netlify.app/",
    },
    {
      image: pig,
      description: t("projectsPage.carousel.pig"),
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
          {/* <div className={classes.iconContainer}>
            <FaHammer />
          </div> */}
          <p style={{ color: "#DDD", padding: "1rem" }}>
            {t("projectsPage.intro")}
          </p>
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
