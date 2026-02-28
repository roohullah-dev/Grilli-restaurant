import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

const MagneticButton = ({ children }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);

    x.set(offsetX * 0.2);
    y.set(offsetY * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.95 }}
      className="
        px-8 py-4 
        rounded-full 
        font-semibold 
        bg-gradient-to-r 
        from-indigo-500 
        to-purple-500 
        shadow-[0_0_40px_rgba(99,102,241,0.7)] 
        transition-all 
        duration-300
        text-sm sm:text-base
      "
    >
      {children}
    </motion.button>
  );
};

export default MagneticButton;
