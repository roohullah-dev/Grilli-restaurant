import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(true);
  const [hovering, setHovering] = useState(false);

  // Detect screen size (disable on touch devices)
  useEffect(() => {
    const checkDevice = () => {
      if (window.innerWidth < 768) {
        setIsDesktop(false);
      } else {
        setIsDesktop(true);
      }
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // Track mouse movement
  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  // Detect hover on interactive elements
  useEffect(() => {
    const addHover = () => setHovering(true);
    const removeHover = () => setHovering(false);

    const elements = document.querySelectorAll("button, a");

    elements.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  if (!isDesktop) return null;

  return (
    <>
      {/* Outer Glow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: hovering ? 1.8 : 1,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <div className="w-10 h-10 rounded-full bg-indigo-500/30 blur-xl"></div>
      </motion.div>

      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
      </motion.div>
    </>
  );
};

export default CustomCursor;
