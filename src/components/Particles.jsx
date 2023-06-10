import React from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const ParticlesComponent = () => {
    // particles
    const particlesInit = React.useCallback(async engine => {
        console.log("engine", engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = React.useCallback(async container => {
        console.log("container", container);
    }, []);

    // render
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "transparent",
                    },
                    zIndex: -1,
                },
                fpsLimit: 60,
                particles: {
                    color: {
                        value: [
                            "#ffffff",
                            "#ff0000",
                            "#ff00ff",
                            "#0000ff",
                            "#00ffff",
                            "#00ff00",
                            "#ffff00",
                        ]
                    },
                    links: {
                        color: "#ffffffff",
                        distance: 150,
                        enable: true,
                        opacity: .1,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1000,
                        },
                        value: 100,
                    },
                    opacity: {
                        value: 0.1,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 3, max: 3 },
                    },
                },
                detectRetina: true,
            }}
        />
    )
};

export default ParticlesComponent;
