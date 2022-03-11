import React from "react";
import classes from "./About.module.css";
import Card from "../../utils/Card";
import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { aboutData } from "./aboutData";

const AboutDetail = () => {
  const ref = useRef();
  const newDataArr = aboutData.map((item) => ({ ...item, isOpen: false }));
  console.log(newDataArr);

  const [data, setData] = useState(newDataArr);
  const isOpenHandler = (e) => {
    console.log(ref.current.id);
    console.log(data);
    const currentItem = data.find((item) => item.id === e.target.id);
    // const currentItem = data.map((item) => item.id);
    console.log(currentItem);
    // const changedItem = currentItem.isOpen === !currentItem.isOpen;
    // console.log(changedItem);
  };
  const [showSection, setShowSection] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  console.log(selectedItem);

  const showSectionHandler = (e) => {
    setShowSection(!showSection);

    setSelectedItem(e.target.id);
    console.log(showSection);
    console.log("clicked item", selectedItem);
  };

  const selectItemHandler = (e) => {
    setSelectedItem((prevState) => e.target.id);

    console.log("clicked item", selectedItem);
  };

  const leaveHandler = () => {
    console.log(ref.current);
  };
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      <h3 className={classes.detailTitle}>About</h3>
      <Card>
        {aboutData.map((item, index) => (
          <>
            <section
              ref={ref}
              id={item.id}
              onClick={showSectionHandler}
              className={
                showSection && +selectedItem === item.id
                  ? [classes.section]
                  : [classes.section, classes.section_hide].join(" , ")
              }
            >
              {showSection && +selectedItem === item.id ? (
                <>
                  <h3 className={classes.title}>{item.title}</h3>
                  <p className={classes.text}>{item.text}</p>
                </>
              ) : (
                <>
                  <h2 className={classes.title_hide}>{item.title}</h2>
                  <h2 className={classes.subtitle}>Reveal</h2>
                </>
              )}
            </section>
          </>
        ))}
      </Card>
    </>
    // <>
    //   <h3 className={classes.detailTitle}>About</h3>
    //   <Card>
    //     {aboutData.map((item, index) => {
    //       return clickedItem === index ? (
    //         <section
    //           id={item.id}
    //           // onClick={handleCSSHandler}
    //           onMouseEnter={handleCSSHandler}
    //           className={
    //             clickedItem === index
    //               ? classes.section
    //               : [classes.section, classes.section_hide].join(" , ")
    //           }
    //         >
    //           <>
    //             <h3 className={classes.title}>{item.title}</h3>
    //             <p className={classes.text}>{item.text}</p>
    //           </>
    //         </section>
    //       ) : (
    //         <>
    //           <section
    //             id={item.id}
    //             onClick={handleCSSHandler}
    //             // onClick={showSectionHandler}
    //             className={
    //               clickedItem === index
    //                 ? classes.section
    //                 : [classes.section, classes.section_hide].join(" , ")
    //             }
    //           >
    //             <h2 className={[classes.title, classes.title_hide].join(" , ")}>
    //               {item.title}
    //             </h2>
    //             <h2
    //               // onMouseLeave={leaveHandler}
    //               // ref={ref}
    //               className={[classes.subtitle]}
    //             >
    //               Reveal
    //             </h2>
    //           </section>
    //         </>
    //       );
    //     })}

    //   </Card>
    // </>
  );
};

export default AboutDetail;

{
  /* {showSection ?
           (
            <>
              <h3 className={classes.title}>About Domenico</h3>
              <p className={classes.text}>
                My name is Domenico. I am 32 years old and I am from Italy. I
                have always liked technology and my original plan was to study
                informatics at University. I followed another path up to now and
                I am ready to take up a new challgend as a front end developer.
                Currently looking for a junior front end web developer position.
                I am interested in smart working only position but willing to
                occasionally travel (even abroad) to work for meeting or other
                business needs. Open to offers and discussion
              </p>
            </>
          ) : (
            <>
              <h2 className={[classes.title, classes.title_hide].join(" , ")}>
                About Domenico
              </h2>
              <h2
                onMouseLeave={leaveHandler}
                ref={ref}
                className={[classes.subtitle]}
              >
                Reveal
              </h2>
            </>
          )} */
}

{
  /* <section className={classes.section}>
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
            flex-grid). I have some knowledge of preprocessor SCSS. I Use chrome
            Dev tools to debug on a daily basis. Version control Git and GitHub.
            Learned to fetch data from APIs using both fetch and axios package.
            Currently improving with NEXT JS, Context API and REDUX. I know how
            to Use Formik as an easier way to implement forms from scratch. I
            use Yup library as a tool for validation. .ENV to store sensitive
            data like API_KEYS.
          </p>
        </section>
        <section className={classes.section}>
          <h3 className={classes.title}>BackEnd</h3>

          <p className={classes.text}>
            Use of NODE js/EXPRESS. Specifically how to run a server and connect
            back end to front end. Took a course in detail on Node Js, Express,
            mongoDB.Mongoose. Using CRUD to relate with Database. MVC
            architecture Using middlewares such as Helmet, Sharp, bodyparser,
            cookieParser. Create routes and test them with PostMan.
          </p>
        </section>

        <section className={classes.section}>
          <h3 className={classes.title}>Past and Present</h3>

          <p className={classes.text}>
            I have been working as a ICU Nurse both in the UK and in Italy since
            2013. This job improved my interpersonal and communicative skills.
            Team work plays a pivotal role in my job and I believe no one can do
            everything on their own to achieve the best outcomes, especially in
            tech. I am resilient and I work well even under pressure. I believe
            also that being punctual and precise make me a good candidate for
            any job position. I am honest and I know my limits.
          </p>
        </section>
        <section className={classes.section}>
          <h3 className={classes.title}>Curiosities and hobbies</h3>

          <p className={classes.text}>
            I made an e-commerce with Wordpress in 2016 selling few items! I am
            a sociable person. I love sports, outdoor activities and playing
            videogames. I love to travel and my dream is to visit all the 7
            wonders! I have already visited the Coliseum and Chitchen Itza.
            Hoping this pandemic gets under control to be able to travel again.
          </p>
        </section> */
}
