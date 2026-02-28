import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Animated Gradient Glow Background */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[600px] h-[600px] bg-indigo-500/30 blur-[140px] rounded-full top-[-100px] left-[-100px]"
      />

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[500px] h-[500px] bg-purple-500/30 blur-[140px] rounded-full bottom-[-120px] right-[-100px]"
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-4xl"
      >
        {/* Small Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-block mb-6 px-6 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-sm tracking-widest uppercase"
        >
          React • Tailwind • Framer Motion
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent"
        >
          Crafting Premium <br /> Digital Experiences
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="mt-8 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto"
        >
          I build modern, high-performance, and visually stunning user
          interfaces using React and Tailwind — designed to impress and convert.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 shadow-[0_0_30px_rgba(99,102,241,0.6)] font-semibold"
          >
            View Projects
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 rounded-full border border-white/20 backdrop-blur-md bg-white/5 font-semibold"
          >
            Contact Me
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 flex flex-col items-center text-gray-500 text-sm"
      >
        Scroll
        <div className="w-[2px] h-10 bg-gradient-to-b from-indigo-500 to-transparent mt-2"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
