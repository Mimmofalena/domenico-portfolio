import classes from "./Card.module.css";

const Card = ({ children, variant = "default", className = "" }) => {
  const variantClass = variant === "light" ? classes.cardLight : "";
  return (
    <div className={`${classes.card} ${variantClass} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
