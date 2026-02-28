import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <div className="absolute inset-0 z-0">
      {" "}
      {/* z-0 ensures it's behind content */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
          },
          particles: {
            color: { value: ["#6366F1", "#22D3EE", "#A855F7"] },
            links: {
              color: "#ffffff",
              distance: 120,
              enable: true,
              opacity: 0.15,
              width: 1,
            },
            collisions: { enable: false },
            move: { enable: true, speed: 0.5, outModes: { default: "bounce" } },
            number: { density: { enable: true, area: 800 }, value: 40 },
            opacity: { value: 0.3 },
            shape: { type: "circle" },
            size: { value: { min: 2, max: 5 } },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
