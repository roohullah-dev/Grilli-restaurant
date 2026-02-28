import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Testimonials from "./components/Testimonials/Testimonials";
import CTA from "./components/CTA/CTA";
import CustomCursor from "./components/Cursor/CustomCursor";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import ParticlesBackground from "./components/Particles/ParticlesBackground";

function App() {
  return (
    <div className="relative min-h-screen">
      <CustomCursor />
      <ScrollProgress />

      {/* Particle Background */}
      <ParticlesBackground />

      {/* Navbar always on top */}
      <Navbar />

      {/* Main Sections */}
      <Hero />
      <Projects />
      <Testimonials />
      <CTA />
    </div>
  );
}

export default App;
