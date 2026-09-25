import classes from "./Container.module.css";

const Container = ({ children, className = "" }) => (
  <div className={`${classes.container} ${className}`}>
    {children}
  </div>
);

export default Container;
