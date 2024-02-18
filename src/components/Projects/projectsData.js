import weather from "../../assets/weather-app.png";
import doc from "../../assets/doctor-webapp.png";
import pig from "../../assets/pig-game.jpg";
import todo from "../../assets/todoapp-with-redux.png";

export const projectsData = [
  {
    title: "Doctor page",
    href: "https://mimmofalena.github.io/dottoressa-marina/",
    src: doc,
    alt: "Doctor",
    descriptionProject: `   GP Doctor landing page. The aim of this project is to give essential
        informations, such as visiting time, COVID news and useful links. Hence,
        patients do no need to call the doctor all the time for minor problems.
        Patients can find the doctor contact details or send an email straight
        through the app. There is also google maps API to show where the GP
        practice is located. Ongoing changes: Awaiting for
        last content from the owner and the site will be live soon. The backend
        is working perfectly on development, I will need to host the backend on
        a server.`,

    descriptionTech:
      "REACT, HTML, CSS, JS, NODEJS, NODEMAILER, FORMIK, MATERIAL UI, FRAMER MOTION, GOOGLE MAPS API, ",
  },
  {
    title: "Todo app with redux",
    href: "https://mimmofalena.github.io/Todo-REDUX/",
    src: todo,
    alt: "todo app",
    descriptionProject: ` Todo app to keep track of what you need to do. You can add, remove and mark todos as completed.
    This app uses local storage to persist data. I tried out redux as an alternative of usual Context used in React.`,
    descriptionTech: "REACT, HTML, CSS, JS, REDUX, LOCALSTORAGE ",
  },
  {
    title: "Weather App",
    href: "https://mimmofalena.github.io/weather-app/",
    src: weather,
    alt: "Weather app",
    descriptionProject: `Simple Weather forecast app, showcasing main weather information on a searched location. With this project I improved my knowledge of calling api and using REST services`,
    descriptionTech: "HTML, CSS, JS, AJAX, OPEN WEATHER API, COUNTRY FLAGS API",
  },
  {
    title: "Pig game",
    href: "https://mimmofalena.github.io/pig-game/",
    src: pig,
    alt: "game app",
    descriptionProject: `One my first project. Although not fancy, it helped me to improve basic javascript knowledge. This is a turn based game 1 vs 1. Try you manage to get to 100 points before you opponent! Want to challenge a friend? Try it out!  `,
    descriptionTech: "HTML, CSS, JS",
  },
];
