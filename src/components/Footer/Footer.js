import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.container}>
      <div className={classes.containerCopyright}>
        <div className={classes.copy}>&copy;</div>
        <p>Designed and Developed by Domenico Cucinotta</p>
      </div>
    </footer>
  );
};

export default Footer;
