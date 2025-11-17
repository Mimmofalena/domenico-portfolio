import React from "react";
import classes from "./Timeline.module.css";
import FadeInWhenVisible from "../../utils/FadeInWhenVisible";

const Timeline = () => {
  return (
    <ul className={classes.timeline}>
      {/* //item 1 */}

      <FadeInWhenVisible delay={0.2}>
        <li>
          <div className={classes["direction-l"]}>
            <div className={classes["flag-wrapper"]}>
              <span className={classes.hexa}></span>
              <span className={classes.flag}>Current</span>
              <span className={classes["time-wrapper"]}>
                <span className={classes.time}>2024</span>
              </span>
            </div>
            <div className={classes.desc}>
              Working at Capgemini on CNH Industrial automotive project since May
              2023. Frontend developer in an international team using Angular 11,
              TypeScript, Angular Material, RxJS, Azure DevOps. Developing new
              features, bug fixing, performance improvement, following best
              practices for code reuse. Also supporting the Backend team with C#,
              .NET framework and SQL. Continuing to make side projects in React,
              Next.js and MongoDB.
            </div>
          </div>
        </li>
      </FadeInWhenVisible>
      <FadeInWhenVisible delay={0.2}>
        <li>
          <div className={classes["direction-r"]}>
            <div className={classes["flag-wrapper"]}>
              <span className={classes.hexa}></span>
              <span className={classes.flag}>
                Nexi - Banking sector
              </span>
              <span className={classes["time-wrapper"]}>
                <span className={classes.time}>May 2022 - May 2023</span>
              </span>
            </div>
            <div className={classes.desc}>
              Worked at ISCS Consulting for Nexi (banking payments giant) as a
              Frontend Developer. Worked on Cardholders Project and Backoffice
              Project using React, Redux, Sagas, React Class and Functional
              Components. Developed new features and bug fixing, working closely
              with Backend team, Graphic Designers, Scrum masters and testers.
            </div>
          </div>
        </li>
      </FadeInWhenVisible>
      <FadeInWhenVisible delay={0.2}>
        <li>
          <div className={classes["direction-l"]}>
            <div className={classes["flag-wrapper"]}>
              <span className={classes.hexa}></span>
              <span className={classes.flag}>Developed IT skills</span>
              <span className={classes["time-wrapper"]}>
                <span className={classes.time}>2021</span>
              </span>
            </div>
            <div className={classes.desc}>
              Refreshed IT foundation and studied trending technologies such as
              React and ES6.
            </div>
          </div>
        </li>
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.2}>
        <li>
          <div className={classes["direction-r"]}>
            <div className={classes["flag-wrapper"]}>
              <span className={classes.hexa}></span>
              <span className={classes.flag}>Back to Italy</span>
              <span className={classes["time-wrapper"]}>
                <span className={classes.time}>2020</span>
              </span>
            </div>
            <div className={classes.desc}>
              I moved back to Italy and I commenced study web development whilst
              working as first line Intensive care unit nurse during COVID
              pandemic
            </div>
          </div>
        </li>
      </FadeInWhenVisible>
      <FadeInWhenVisible delay={0.2}>
        <li>
          <div className={classes["direction-l"]}>
            <div className={classes["flag-wrapper"]}>
              <span className={classes.hexa}></span>
              <span className={classes.flag}>Australia</span>
              <span className={classes["time-wrapper"]}>
                <span className={classes.time}>2019-2020</span>
              </span>
            </div>
            <div className={classes.desc}>
              Took 1 gap year. I travelled and worked across the East coast of
              Australia and Tasmania
            </div>
          </div>
        </li>
      </FadeInWhenVisible>
      <FadeInWhenVisible delay={0.2}>
        <li>
          <div className={classes["direction-r"]}>
            <div className={classes["flag-wrapper"]}>
              <span className={classes.hexa}></span>
              <span className={classes.flag}>Moved to the UK</span>
              <span className={classes["time-wrapper"]}>
                <span className={classes.time}>2013-2019</span>
              </span>
            </div>
            <div className={classes.desc}>
              My first as nurse in Northern Ireland. 6 months after I moved to
              England where I worked mainly for the NHS. <br />
              <br />
              Whilst in the UK I created my first Wordpress E-commerce site with
              few sales
            </div>
          </div>
        </li>
      </FadeInWhenVisible>
      <FadeInWhenVisible delay={0.2}>
        <li>
          <div className={classes["direction-l"]}>
            <div className={classes["flag-wrapper"]}>
              <span className={classes.hexa}></span>
              <span className={classes.flag}>Nursing Degree</span>
              <span className={classes["time-wrapper"]}>
                <span className={classes.time}>2009-2012</span>
              </span>
            </div>
            <div className={classes.desc}>
              Took nursing degree with 109/110 mark at University of Messina
            </div>
          </div>
        </li>
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.2}>
        <li>
          <div className={classes["direction-r"]}>
            <div className={classes["flag-wrapper"]}>
              <span className={classes.hexa}></span>
              <span className={classes.flag}>Italian Army</span>
              <span className={classes["time-wrapper"]}>
                <span className={classes.time}>2008-2009</span>
              </span>
            </div>
            <div className={classes.desc}>
              I spent 1 year in the army as volunteer. Fantastic life experience
              away from my home town. I spent 7 months in Rome.
            </div>
          </div>
        </li>
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.2}>
        <li>
          <div className={classes["direction-l"]}>
            <div className={classes["flag-wrapper"]}>
              <span className={classes.hexa}></span>
              <span className={classes.flag}>Finished High School</span>
              <span className={classes["time-wrapper"]}>
                <span className={classes.time}>2008</span>
              </span>
            </div>
            <div className={classes.desc}>
              High School G.Marconi in Messina. Main subject where electronics
              and telecommunications. We used pascal, CAD,CISCO certification,
              programmed little chips using hex code.
            </div>
          </div>
        </li>
      </FadeInWhenVisible>
    </ul>
  );
};

export default Timeline;
