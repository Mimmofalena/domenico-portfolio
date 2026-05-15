import { motion } from "framer-motion";

const FadeInWhenVisible = ({ delay = 0, children }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    variants={{
      visible: { opacity: 1, y: 0, scale: 1 },
      hidden: { opacity: 0, y: 30, scale: 0.98 },
    }}
  >
    {children}
  </motion.div>
);

export default FadeInWhenVisible;
