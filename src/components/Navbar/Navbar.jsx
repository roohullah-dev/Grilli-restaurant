import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt3 as HiMenu, HiOutlineX as HiX } from "react-icons/hi"; // Responsive icons

const navVariants = {
  hidden: { y: -80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.1,
      duration: 0.5,
    },
  }),
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ["Home", "Projects", "About", "Contact"];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-white/5 border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 flex justify-between items-center relative">
        {/* Logo */}
        <motion.h1
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-2xl font-bold tracking-wider bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent cursor-pointer z-50"
        >
          ROOHULLAH
        </motion.h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-10 text-sm uppercase tracking-widest z-50">
          {links.map((item, i) => (
            <motion.li
              key={item}
              custom={i}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              className="relative cursor-pointer group"
            >
              <motion.span
                whileHover={{ color: "#22d3ee" }}
                transition={{ duration: 0.3 }}
              >
                {item}
              </motion.span>
              <motion.span
                layoutId="underline"
                className="absolute left-0 -bottom-2 h-[2px] w-0 bg-gradient-to-r from-indigo-500 to-cyan-400 group-hover:w-full transition-all duration-300"
              />
            </motion.li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-3xl"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full right-0 mt-4 w-48 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex flex-col space-y-4 p-4 text-white uppercase tracking-widest shadow-lg z-40"
          >
            {links.map((item, i) => (
              <motion.li
                key={item}
                variants={linkVariants}
                custom={i}
                initial="hidden"
                animate="visible"
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer hover:text-cyan-400"
                onClick={() => setMenuOpen(false)} // close menu on click
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
