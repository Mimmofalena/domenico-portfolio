import weather from "../../assets/weather-app.png";
import doc from "../../assets/doctor-webapp.png";
import pig from "../../assets/pig-game.png";
import todo from "../../assets/todoapp-with-redux.png";

export const projectsData = [
  {
    title: "Doctor page",
    href: "https://mimmofalena.github.io/dottoressa-marina/",
    src: doc,
    alt: "Doctor",
    descriptionProject: (
      <div>
        <h3>Project Overview: GP Doctor Landing Page&nbsp;</h3>
        <p>
          The GP Doctor landing page is designed to streamline patient-doctor
          communication by providing key information at a glance. This
          innovative platform is not only user-friendly but also significantly
          reduces the need for direct calls to the doctor for minor queries.,
        </p>
      </div>
    ),

    descriptionTech: (
      <div>
        <h4>Technologies Employed:</h4>
        <br />
        <ul>
          <li>Frontend Development: React, HTML, CSS, JavaScript</li>
          <li>Backend Development: Node.js</li>
          <li>Email Integration: Nodemailer</li>
          <li>Form Handling: Formik</li>
          <li>UI Design: Material-UI</li>
          <li>Animation and Interaction: Framer Motion</li>
          <li>Location Services: Google Maps API</li>
        </ul>
        <p>
          This combination of cutting-edge technologies and thoughtful design
          elements makes the GP Doctor landing page a powerful tool in modern
          healthcare communication, enhancing the overall experience for both
          patients and healthcare providers.
        </p>
      </div>
    ),
  },
  {
    title: "Todo app with redux",
    href: "https://mimmofalena.github.io/Todo-REDUX/",
    src: todo,
    alt: "todo app",
    descriptionProject: (
      <div>
        <h3>Project Overview: Advanced Todo Application&nbsp;</h3>
        <p>
          Our Advanced Todo Application is a sophisticated tool designed to
          enhance personal productivity and task management. With an intuitive
          interface, this app allows users to efficiently organize their daily
          tasks, ensuring nothing important gets overlooked.,
        </p>
      </div>
    ),
    descriptionTech: (
      <div>
        <h4>Technologies Employed:</h4>
        <br />
        <ul>
          <li>
            Core Framework: React, offering a seamless user interface experience
          </li>
          <li>
            Styling: HTML and CSS for structured and visually appealing design
          </li>
          <li>Scripting: JavaScript for dynamic and interactive features</li>
          <li>
            State Management: Redux, providing a predictable state container for
            JavaScript apps
          </li>
          <li>
            Data Storage: LocalStorage, enabling the app to maintain state even
            after the browser is closed
          </li>
        </ul>
        <p>
          This project not only serves as a practical tool for end-users but
          also as a testament to our commitment to leveraging cutting-edge
          technologies to deliver efficient and effective solutions.
        </p>
      </div>
    ),
  },
  {
    title: "Weather App",
    href: "https://mimmofalena.github.io/weather-app/",
    src: weather,
    alt: "Weather app",
    descriptionProject: (
      <div>
        <h3>
          Project Overview: Interactive Weather Forecast Application&nbsp;
        </h3>
        <p>
          The Interactive Weather Forecast Application is an elegantly designed
          tool that provides real-time weather information for any searched
          location. This application stands as a testament to the power of
          modern web technologies in delivering critical information in an
          accessible format.
        </p>
        <h4>Key Features:</h4>
        <br />
        <ul>
          <li>
            <strong>Real-Time Weather Data:</strong> Users can obtain up-to-date
            weather forecasts for any location of their choice, including
            temperature, humidity, wind speed, and more.
          </li>
          <li>
            <strong>Search Functionality:</strong> The app allows for easy
            searching of locations, instantly displaying the relevant weather
            details.
          </li>
          <li>
            <strong>Enhanced Learning Experience:</strong> This project was a
            significant step in advancing my skills in API integration and
            RESTful service utilization, demonstrating a deeper understanding of
            data fetching and backend communication.
          </li>
        </ul>
      </div>
    ),
    descriptionTech: (
      <div>
        <h4>Technologies Employed:</h4>
        <ul>
          <li>
            Frontend Development: Structured with HTML and styled using CSS for
            a clean and user-friendly interface.
          </li>
          <li>
            Client-Side Scripting: JavaScript, enhancing the application with
            dynamic content and interactive elements.
          </li>
          <li>
            API Integration: AJAX for asynchronous web requests, coupled with
            Open Weather API for accurate weather data and Country Flags API for
            location-specific details.
          </li>
        </ul>
        <p>
          This application not only serves as a practical tool for users seeking
          weather information but also showcases my growing expertise in API
          integration and interactive web development.
        </p>
      </div>
    ),
  },
  {
    title: "Pig game",
    href: "https://mimmofalena.github.io/pig-game/",
    src: pig,
    alt: "game app",
    descriptionProject: (
      <div>
        <h3>Project Overview: Turn-Based 1v1 Challenge Game&nbsp;</h3>
        <p>
          As one of my initial forays into web development, the Turn-Based 1v1
          Challenge Game represents a foundational step in my journey as a
          developer. While maintaining a straightforward design, this project
          was instrumental in enhancing my proficiency in basic JavaScript,
          HTML, and CSS.
        </p>
        <h4>Game Overview:</h4>
        <br />
        <ul>
          <li>
            <strong>Engaging Gameplay: </strong> The game is a simple yet
            captivating turn-based competition where two players vie to reach
            100 points first. It's an excellent test of strategy and luck.
          </li>
          <li>
            <strong>Friendly Competition:</strong> Designed with interactivity
            in mind, it offers a fun way to challenge a friend in a
            light-hearted battle of points.
          </li>
          <li>
            <strong>Skill Development:</strong> This project was pivotal in
            solidifying my understanding of JavaScript fundamentals. It allowed
            me to explore the basics of game logic, user interaction, and
            dynamic web content.
          </li>
        </ul>
      </div>
    ),
    descriptionTech: (
      <div>
        <h4>Technologies Employed:</h4>
        <ul>
          <li>
            HTML for the basic structure, offering a clean and straightforward
            user interface.
          </li>
          <li>
            CSS is used to create an engaging visual experience, making the game
            not only functional but also aesthetically pleasing.
          </li>
          <li>
            JavaScript forms the backbone of the game's mechanics, handling
            turn-based actions, score calculations, and overall game logic.
          </li>
        </ul>
        <p>
          This project, while simple in its nature, was a significant step in my
          development journey, laying the groundwork for more complex projects
          and solidifying my understanding of essential web technologies.
        </p>
      </div>
    ),
  },
];
