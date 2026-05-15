import classes from "./Stack.module.css";

const categoryLabels = {
  frontend: "Frontend",
  backend: "Backend",
  mobile: "Mobile",
  ai: "AI",
  tools: "Tools",
};

const StackItem = ({ icon, name, category }) => {
  const catClass = category ? classes[`category${category.charAt(0).toUpperCase() + category.slice(1)}`] : "";

  return (
    <li className={classes.listItem}>
      <div className={classes.icon}>{icon}</div>
      <p className={classes.itemName}>{name}</p>
      {category && (
        <span className={`${classes.categoryBadge} ${catClass}`}>
          {categoryLabels[category] || category}
        </span>
      )}
    </li>
  );
};

export default StackItem;
