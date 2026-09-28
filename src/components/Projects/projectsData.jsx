import weather from "../../assets/weather-app.png";
import doc from "../../assets/doctor-webapp.png";
import pig from "../../assets/pig-game.png";
import todo from "../../assets/todoapp-with-redux.png";
import bnb from "../../assets/bnb-casa-vacanza.png";
import { translations } from "../../translations";

export const getProjectsData = (language) => {
  const t = translations[language];

  return [
    {
      title: t.projects.bnb.title,
      href: "https://casa-vacanza.vercel.app/en/services",
      src: bnb,
      alt: "B&B Website",
      descriptionProject: (
        <div>
          <h3>{t.projects.bnb.overview}&nbsp;</h3>
          <p>{t.projects.bnb.overviewText}</p>
        </div>
      ),
      descriptionTech: (
        <div>
          <h4>{t.projects.bnb.techTitle}</h4>
          <br />
          <ul>
            {t.projects.bnb.tech.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <p>{t.projects.bnb.techText}</p>
        </div>
      ),
    },
    {
      title: t.projects.doctor.title,
      href: "https://www.dottoressatricolimarina.it/",
      src: doc,
      alt: "Doctor",
      descriptionProject: (
        <div>
          <h3>{t.projects.doctor.overview}&nbsp;</h3>
          <p>{t.projects.doctor.overviewText}</p>
        </div>
      ),
      descriptionTech: (
        <div>
          <h4>{t.projects.doctor.techTitle}</h4>
          <br />
          <ul>
            {t.projects.doctor.tech.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <p>{t.projects.doctor.techText}</p>
        </div>
      ),
    },
    {
      title: t.projects.todo.title,
      href: "https://mimmofalena.github.io/Todo-REDUX/",
      src: todo,
      alt: "todo app",
      descriptionProject: (
        <div>
          <h3>{t.projects.todo.overview}&nbsp;</h3>
          <p>{t.projects.todo.overviewText}</p>
        </div>
      ),
      descriptionTech: (
        <div>
          <h4>{t.projects.todo.techTitle}</h4>
          <br />
          <ul>
            {t.projects.todo.tech.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <p>{t.projects.todo.techText}</p>
        </div>
      ),
    },
    {
      title: t.projects.weather.title,
      href: "https://mimmofalena.github.io/weather-app/",
      src: weather,
      alt: "Weather app",
      descriptionProject: (
        <div>
          <h3>{t.projects.weather.overview}&nbsp;</h3>
          <p>{t.projects.weather.overviewText}</p>
          <h4>{t.projects.weather.featuresTitle}</h4>
          <br />
          <ul>
            {t.projects.weather.features.map((item, idx) => {
              const parts = item.split(":");
              return (
                <li key={idx}>
                  <strong>{parts[0]}:</strong>
                  {parts.slice(1).join(":")}
                </li>
              );
            })}
          </ul>
        </div>
      ),
      descriptionTech: (
        <div>
          <h4>{t.projects.weather.techTitle}</h4>
          <ul>
            {t.projects.weather.tech.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <p>{t.projects.weather.techText}</p>
        </div>
      ),
    },
    {
      title: t.projects.pig.title,
      href: "https://mimmofalena.github.io/pig-game/",
      src: pig,
      alt: "game app",
      descriptionProject: (
        <div>
          <h3>{t.projects.pig.overview}&nbsp;</h3>
          <p>{t.projects.pig.overviewText}</p>
          <h4>{t.projects.pig.gameTitle}</h4>
          <br />
          <ul>
            {t.projects.pig.gameFeatures.map((item, idx) => {
              const parts = item.split(":");
              return (
                <li key={idx}>
                  <strong>{parts[0]}:</strong>
                  {parts.slice(1).join(":")}
                </li>
              );
            })}
          </ul>
        </div>
      ),
      descriptionTech: (
        <div>
          <h4>{t.projects.pig.techTitle}</h4>
          <ul>
            {t.projects.pig.tech.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <p>{t.projects.pig.techText}</p>
        </div>
      ),
    },
  ];
};
