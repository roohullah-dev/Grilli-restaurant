import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Projects = () => {
  const projects = [
    {
      title: "Luxury Real Estate UI",
      description:
        "A modern animated property showcase built with React, Tailwind and smooth micro-interactions.",
    },
    {
      title: "Premium SaaS Dashboard",
      description:
        "Advanced admin dashboard with dark mode, charts, glass cards and modern layout system.",
    },
    {
      title: "E-commerce Experience",
      description:
        "High-converting product landing page with animated sections and interactive product previews.",
    },
  ];

  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Some of my premium UI work crafted with modern technologies and
            advanced animations.
          </p>
        </motion.div>

        {/* Responsive Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            gap-8
          "
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard
                title={project.title}
                description={project.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
