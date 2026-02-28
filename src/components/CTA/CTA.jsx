import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

const CTA = () => {
  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Glow Background */}
      <div className="absolute w-[600px] h-[600px] bg-purple-500/20 blur-[150px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            text-3xl 
            sm:text-4xl 
            md:text-5xl 
            font-extrabold 
            bg-gradient-to-r 
            from-indigo-500 
            via-cyan-400 
            to-purple-500 
            bg-clip-text 
            text-transparent
          "
        >
          Let’s Build Something Exceptional
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="
            mt-6 
            text-gray-400 
            max-w-2xl 
            mx-auto 
            text-sm 
            sm:text-base 
            md:text-lg
          "
        >
          I create high-performance, visually stunning, and fully responsive
          user interfaces that elevate brands.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-10 flex justify-center"
        >
          <MagneticButton>Start a Project</MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
