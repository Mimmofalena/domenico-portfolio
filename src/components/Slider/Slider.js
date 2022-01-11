import React from "react";
import Img1 from "../../assets/domImgCover.jpg";
import Img2 from "../../assets/domImgCover-2.jpg";
import Img3 from "../../assets/domImgCover-3.jpg";
import classes from "../Slider/Slider.module.css";

const Slider = () => {
  return (
    <div className={classes.container}>
      <img src={Img1} alt="Ragazzo con vista nei tetti di Palermo" />
      <img src={Img2} alt="Ragazzo con vista nei tetti di Palermo" />
      <img src={Img3} alt="Ragazzo con vista nei tetti di Palermo" />
    </div>
  );
};

export default Slider;
