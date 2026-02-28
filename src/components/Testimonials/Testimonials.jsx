import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Startup Founder",
    text: "Aziz delivered an exceptional UI experience. The animations and responsiveness were world-class.",
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    text: "High-quality design, smooth motion, and perfect responsiveness across all devices.",
  },
  {
    name: "Emma Williams",
    role: "Creative Director",
    text: "One of the best front-end developers I've worked with. Premium and modern approach.",
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full top-0 left-1/2 -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            What clients say about my premium UI development and modern design
            approach.
          </p>
        </motion.div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 1.2 },
            1024: { slidesPerView: 2 },
          }}
          className="pb-14"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ y: -10 }}
                className="
                  bg-white/5 
                  backdrop-blur-xl 
                  border border-white/10 
                  rounded-2xl 
                  p-8 
                  h-full
                  transition-all 
                  duration-500
                "
              >
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  “{item.text}”
                </p>

                <div className="mt-6">
                  <h4 className="font-semibold text-lg">{item.name}</h4>
                  <span className="text-gray-400 text-sm">{item.role}</span>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
