import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../../contexts/LanguageContext";
import classes from "./NotFound.module.css";

const NotFound = () => {
  const { t } = useLanguage();

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <motion.h1
          className={classes.code}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          404
        </motion.h1>

        <motion.p
          className={classes.message}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          {t("notFound.message") || "Page not found"}
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <Link to="/domenico-portfolio" className={classes.homeLink}>
            {t("notFound.goHome") || "Back to Home"}
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
