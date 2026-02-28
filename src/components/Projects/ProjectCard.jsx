import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description }) => {
  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.2}
      scale={1.05}
      transitionSpeed={1500}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      className="w-full"
    >
      <motion.div
        whileHover={{ y: -8 }}
        className="relative rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 h-full transition-all duration-500"
      >
        {/* Gradient Glow Border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-500 opacity-0 hover:opacity-20 blur-xl transition duration-500"></div>

        <div className="relative z-10">
          <h3 className="text-xl md:text-2xl font-bold mb-4">{title}</h3>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            {description}
          </p>

          <button className="mt-6 text-cyan-400 hover:text-indigo-400 transition">
            View Case Study →
          </button>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default ProjectCard;
