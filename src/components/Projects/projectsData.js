// import weatherPicture from "../../assets/weather-app.png";
// import todoAppImage from "../../assets/Todo-app-redux.png";
// import doctorPicture from "../../assets/marina-studio-medico.jpeg";
// import pigGamePicture from "../../assets/pig-game.png";

import weather from "../../assets/weather-app-new.jpg";
import doc from "../../assets/doc-1.png";
import pig from "../../assets/pig-game.jpg";
import todo from "../../assets/todo-app-redux-new.jpg";

export const projectsData = [
  {
    title: "Doctor page",
    href: "https://mimmofalena.github.io/dottoressa-marina/",
    src: doc,
    alt: "Doctor",
    descriptionProject: (
      <p>
        GP Doctor landing page. The aim of this project is to give essential
        informations, such as visiting time, COVID news and useful links. Hence,
        patients do no need to call the doctor all the time for minor problems.
        Patients can find the doctor contact details or send an email straight
        through the app. There is also google maps API to show where the GP
        practice is located.&nbsp; <br /> <br /> Ongoing changes: Awaiting for
        last content from the owner and the site will be live soon. The backend
        is working perfectly on development, I will need to host the backend on
        a server.,
      </p>
    ),
    descriptionTech:
      "REACT, HTML, CSS, JS, NODEJS, NODEMAILER, FORMIK, MATERIAL UI, FRAMER MOTION, GOOGLE MAPS API, ",
  },
  {
    title: "Todo app with redux",
    href: "https://mimmofalena.github.io/Todo-REDUX/",
    src: todo,
    alt: "todo app",
    descriptionProject: ` Todo app to keep track of what you need to do. You can add, remove and mark todos as completed.
    This app uses local storage to persist data.`,
    descriptionTech: "REACT, HTML, CSS, JS, REDUX, LOCALSTORAGE ",
  },
  {
    title: "Weather App",
    href: "https://mimmofalena.github.io/weather-app/",
    src: weather,
    alt: "Weather app",
    descriptionProject: `Weather forecast app, showcasing main weather information on a searched location.`,
    descriptionTech: "HTML, CSS, JS, AJAX, OPEN WEATHER API, COUNTRY FLAGS API",
  },
  {
    title: "Pig game",
    href: "https://mimmofalena.github.io/pig-game/",
    src: pig,
    alt: "game app",
    descriptionProject: `Just luck or skills? See if you manage to get to 100 points before you opponent!`,
    descriptionTech: "HTML, CSS, JS",
  },
];
