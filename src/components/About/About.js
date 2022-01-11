import React from "react";
import Card from "../../utils/Card";
import classes from "./About.module.css";
import { Routes, Route, Link } from "react-router-dom";

const About = () => {
  const displayHandler = () => {};
  const text = `Front end developer. Currently looking for a junior front end web
        developer position. I am interested in smart working only position but
        willing to occasionally travel (even abroad) to work for meeting or
        other business needs. Open to offers and discussion **********Overview
        and skills********** I have been self teaching through courses,tutorials
        and projects HTML5, CSS, JS, React js framework. Good knowledge of ES6
        pratices such as arrowfunctios ,spread operator and destructuring. I
        have completed 3 online courses and one is ongoing(certificates and
        details upon request). I get myself up-to-date with latest techs from
        most reliable sources such as MDN, W3school, freecodecamp, stackoverflow
        and many more. **Front End** I am able to use Material UI for an easier
        and consistent visual implementation, CSS modules as well as plain CSS.
        I have some knowledge of preprocessor SCSS. I Use chrome Dev tools to
        debug on a daily basis. Version control Git and GitHub. Learned to fetch
        data from APIs ,JSON. CSS modules Currently improving with NEXT JS,
        Context API and REDUX. I know how to Use Formik as an easier way to
        implement forms from scratch. I use Yup library as a tool for
        validation. .ENV to store sensitive data like API_KEYS **BackEnd** Use
        of NODE js/EXPRESS. Specifically how to run a server and connect back
        end to front end. Took a course in detail on Node Js, Express,
        mongoDB.Mongoose. Using CRUD to relate with Database. MVC architecture
        Using middlewares such as Helmet, Sharp, bodyparser, cookieParser, .
        Create routes and test them with PostMan I am working on personal
        projects to improve experience and confidence with the job.
        **********Past and Present********** I have been working as a ICU Nurse
        both in the UK and in Italy since 2013. This job improved my
        interpersonal and communicative skills. Team work plays a pivotal role
        in my job and I believe no one can do everything on their own to achieve
        the best outcomes. I am resilient and I show professionalism being
        punctual,honest and knowing my limits. I am organized and I am able work
        under pressure and committed to deadlines`;
  console.log(text.length > 250);
  return (
    <Card>
      <section className={classes.container}>
        <h3>About me</h3>

        <p className={classes.text}>{`${text.substring(0, 250)}`}</p>
        <Link className={classes.link} to="/about">
          Discover more...
        </Link>

        {/* <button onClick={displayHandler}>Discover more...</button> */}
      </section>
    </Card>
  );
};

export default About;
