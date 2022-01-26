import React from "react";
import { motion, useAnimation } from "framer-motion";

const FadeInWhenVisible = ({ delay, children }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWhenVisible;
