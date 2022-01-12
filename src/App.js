import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import classes from "./App.module.css";
import AboutDetail from "./components/About/AboutDetail";
import { Routes, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div className={classes.app}>
      <Header />
      <Routes>
        <Route exact={true} path="/" element={<Body />} />
        <Route path="/about" element={<AboutDetail />} />
        <Route path="*" element={<h1>NOT FOUND</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
