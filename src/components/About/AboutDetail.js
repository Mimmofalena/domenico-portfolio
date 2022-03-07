import React from "react";
import classes from "./About.module.css";
import Card from "../../utils/Card";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AboutDetail = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <h3 className={classes.detailTitle}>About me</h3>
      <Card>
        {/* <h3 className={classes.title}>About me</h3> */}
        <section className={classes.container}>
          <section className={classes.section}>
            <h3>About Domenico</h3>
            <p className={classes.text}>
              My name is Domenico. I am 32 years old and I am from Italy. I have
              always liked technology and my original plan was to study
              informatics at University. I followed another path up to now and I
              am ready to take up a new challgend as a front end developer.
              Currently looking for a junior front end web developer position. I
              am interested in smart working only position but willing to
              occasionally travel (even abroad) to work for meeting or other
              business needs. Open to offers and discussion
            </p>
          </section>

          <section className={classes.section}>
            <h3 className={classes.title}>Overview and skills</h3>

            <p className={classes.text}>
              I have been self teaching through courses,tutorials and projects
              HTML5, CSS, JS, React js framework. Good knowledge of ES6 pratices
              such as arrowfunctios ,spread operator and destructuring. I have
              completed 3 online courses and one is ongoing(certificates and
              details upon request). I get myself up-to-date with latest techs
              from most reliable sources such as MDN, W3school, freecodecamp,
              stackoverflow and many more.
            </p>
          </section>

          <section className={classes.section}>
            <h3 className={classes.title}>Front End</h3>

            <p className={classes.text}>
              I use React as main framework, specifically CRA setting. I am able
              to use Material UI for an easier and consistent visual
              implementation, CSS modules as well as plain CSS(flex-box and
              flex-grid). I have some knowledge of preprocessor SCSS. I Use
              chrome Dev tools to debug on a daily basis. Version control Git
              and GitHub. Learned to fetch data from APIs using both fetch and
              axios package. Currently improving with NEXT JS, Context API and
              REDUX. I know how to Use Formik as an easier way to implement
              forms from scratch. I use Yup library as a tool for validation.
              .ENV to store sensitive data like API_KEYS.
            </p>
          </section>
          <section className={classes.section}>
            <h3 className={classes.title}>BackEnd</h3>

            <p className={classes.text}>
              Use of NODE js/EXPRESS. Specifically how to run a server and
              connect back end to front end. Took a course in detail on Node Js,
              Express, mongoDB.Mongoose. Using CRUD to relate with Database. MVC
              architecture Using middlewares such as Helmet, Sharp, bodyparser,
              cookieParser. Create routes and test them with PostMan.
            </p>
          </section>

          <section className={classes.section}>
            <h3 className={classes.title}>Past and Present</h3>

            <p className={classes.text}>
              I have been working as a ICU Nurse both in the UK and in Italy
              since 2013. This job improved my interpersonal and communicative
              skills. Team work plays a pivotal role in my job and I believe no
              one can do everything on their own to achieve the best outcomes,
              especially in tech. I am resilient and I work well even under
              pressure. I believe also that being punctual and precise make me a
              good candidate for any job position. I am honest and I know my
              limits.
            </p>
          </section>
          <section className={classes.section}>
            <h3 className={classes.title}>Curiosities and hobbies</h3>

            <p className={classes.text}>
              I made an e-commerce with Wordpress in 2016 selling few items! I
              am a sociable person. I love sports, outdoor activities and
              playing videogames. I love to travel and my dream is to visit all
              the 7 wonders! I have already visited the Coliseum and Chitchen
              Itza. Hoping this pandemic gets under control to be able to travel
              again.
            </p>
          </section>
        </section>
      </Card>
    </>
  );
};

export default AboutDetail;
