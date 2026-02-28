import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  // Smooth spring animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="
        fixed 
        top-0 
        left-0 
        right-0 
        h-[3px] 
        origin-left 
        z-[9998]
        bg-gradient-to-r 
        from-indigo-500 
        via-cyan-400 
        to-purple-500
      "
    />
  );
};

export default ScrollProgress;