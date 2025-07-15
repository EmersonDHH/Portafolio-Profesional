import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: "#1e1e1e"
        },
        particles: {
          color: { value: "#4ACAE2" },
          links: {
            color: "#4ACAE2",
            distance: 120,
            enable: true,
            opacity: 0.2,
            width: 1
          },
          move: {
            enable: true,
            speed: 1
          },
          number: {
            value: 50
          },
          opacity: {
            value: 0.5
          },
          size: {
            value: { min: 1, max: 3 }
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab"
            }
          },
          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.4
              }
            }
          }
        }
      }}
    />
  );
}
