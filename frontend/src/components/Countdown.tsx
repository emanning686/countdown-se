type props = { title: string; count: number };
import { motion } from "framer-motion";

function Countdown({ title, count }: props) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center font-inter"
      initial={{ opacity: 0, x: -25 }}
      animate={
        title === "Months"
          ? {
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, delay: 0.25, type: "spring" },
            }
          : title === "Weeks"
            ? {
                opacity: 1,
                x: 0,
                transition: { duration: 0.5, delay: 0.35, type: "spring" },
              }
            : title === "Days"
              ? {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.35, type: "spring" },
                }
              : {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, delay: 0.45, type: "spring" },
                }
      }
      whileHover={{
        scale: 1.05,
        transition: { type: "spring", damping: 13 },
      }}
    >
      <h1 className="gradient-text-3 animate-gradient1 pb-2 text-3xl font-medium md:text-6xl">
        {title}
      </h1>
      <h1 className="gradient-text-2 animate-gradient1 text-4xl font-semibold md:text-7xl">
        {count}
      </h1>
    </motion.div>
  );
}

export default Countdown;
