import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="loader-container">
      <motion.div
        className="loader"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="loader-dot"
            style={{
              transform: `rotate(${i * 45}deg) translateY(-20px)`,
              backgroundColor: `hsl(${i * 45}, 80%, 60%)`
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 0,
              delay: i * 0.1
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Loader;