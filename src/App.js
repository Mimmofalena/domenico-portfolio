import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import classes from "./App.module.css";
import AboutDetail from "./components/About/AboutDetail";
import { Routes, Route, Link, Switch } from "react-router-dom";
import ProjectsDetail from "./components/Projects/ProjectsDetail";
import StackDetail from "./components/Stack/StackDetail";

function App() {
  return (
    <div className={classes.app}>
      <Header />
      <Routes>
        <Route path="/domenico-portfolio/about" element={<AboutDetail />} />
        <Route
          path="/domenico-portfolio/projects"
          element={<ProjectsDetail />}
        />
        <Route path="/domenico-portfolio/stack" element={<StackDetail />} />
        <Route path="/domenico-portfolio/" element={<Body />} />

        <Route path="*" element={<h1>NOT FOUND</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
