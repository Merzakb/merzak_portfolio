"use client"

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@tsparticles/all"; 
// import { loadFull } from "tsparticles";
// import { loadSlim } from "@tsparticles/slim";
import { loadBasic } from "@tsparticles/basic"

const ParticlesComponent = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            //await loadAll(engine);
            //await loadFull(engine);
            //await loadSlim(engine);
            await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
    };

    return (
       <>
            {init && <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
                options={{
                    autoPlay: true,
                    background: {
                        color: {
                            value: "transparent",
                        },
                        opacity: 1
                    },
                    backgroundMask: {
                        composite: "destination-out",
                        cover: {
                            color: {
                                value: "#fff"
                            },
                            opacity: 1
                        },
                        enable: false
                    },
                    clear: true,
                    delay: 0,
                    fullScreen: {
                        enable: true,
                        zIndex: 0
                    },
                    detectRetina: true,
                    duration: 0,
                    fpsLimit: 120,
                    interactivity: {
                        detectsOn: window,
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onDiv: {
                                enable: false,
                                type: "circle"
                            },
                            onHover: {
                                enable: false,
                                parallax: {
                                    enable: false,
                                    force: 2,
                                    smooth: 10
                                }
                            },
                            resize: {
                                enable :true,
                                delay: 0.5
                            },
                        },
                        modes: {
                            trails : {
                                delay: 1,
                                pauseOnStop: false,
                                quantity: 1
                            },
                            attract : {
                                distance: 200,
                                duration: 0.4,
                                easing: "ease-out-quad",
                                factor: 1,
                                maxspeed: 50,
                                speed : 1
                            },
                            bounce : {
                                distance: 200
                            },
                            bubble : {
                                distance: 200,
                                duration: 0.4,
                                mix: false
                            },
                            connect : {
                                distance: 80,
                                links :{
                                    opacity: 0.5
                                },
                                radius: 60
                            },
                            grap : {
                                distance: 100,
                                links :{
                                    opacity: 1,
                                    blink: false,
                                    consent: false
                                },
                                radius: 60
                            },
                            push: {
                                default: true,
                                quantity: 10,
                            }, 
                            remove: {
                                quantity: 2
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                                factor: 100,
                                speed: 1,
                                maxspeed: 50,
                                easing: "ease-out-quad"
                            },
                            slow: {
                                facor: 3,
                                radius: 200
                            },
                            light: {
                                area : {
                                    gradient :{
                                        start: {
                                            value: "#ffffff"
                                        },
                                        stop : {
                                            value: "#000000"
                                        }
                                    },
                                    radius: 1000
                                },
                                shadow: {
                                    color: {
                                        value: "#000000"
                                    },
                                    length: 2000
                                }
                            },
                            absorbers : {
                                color: {
                                    value: "#000000"
                                },
                                draggable: false,
                                opacity: 1,
                                destroy: true,
                                orbits: false,
                                size: {
                                    value: 50,
                                    density: 5,
                                    limit: {
                                        radius:  0,
                                        mass: 0
                                    }
                                }
                            }
                        },
                    },
                    particles: {
                        bounce : {
                            horizontal : {
                                value: 1
                            },
                            vertical : {
                                value: 1
                            }
                        },
                        collisions :{
                            absorb:{
                                speed: 2
                            },
                            bounce:	{
                                horizontal:	{
                                    value: 1
                                },
                                vertical: {
                                    value: 1
                                }
                            },
                            enable: true,
                            maxSpeed: 50,
                            mode : "bounce",
                            overlap:{
                                enable: true,
                                retries:	0
                            },
                        },
                        color: {
                            value: "#ffffff",
                            animation : {
                                h: {
                                    count: 0,
                                    enable: false,
                                    speed: 1,
                                    decay: 0,
                                    delay: 0,
                                    sync: true,
                                    offset: 0
                                },
                                s: {
                                    count: 0,
                                    enable: false,
                                    speed: 1,
                                    decay: 0,
                                    delay: 0,
                                    sync: true,
                                    offset: 0
                                },
                                l: {
                                    count: 0,
                                    enable: false,
                                    speed: 1,
                                    decay: 0,
                                    delay: 0,
                                    sync: true,
                                    offset: 0
                                }
                            }
                        },
                        effect: {
                            close: true,
                            fill: true,
                        },
                        move: {
                            angle: {
                                offset: 0,
                                value: 90
                            },
                            attract: {
                                distance: 200,
                                enable: false,
                                rotate: {
                                    x: 3000,
                                    y: 3000
                                },
                            },
                            center: {
                                x: 50,
                                y: 50,
                                mode: "percent",
                                radius: 0
                            },
                            decay: 0,
                            direction: "top",
                            drift: 0,
                            enable: true,
                            gravity: {
                                acceleration: 9.81,
                                enable: false,
                                inverse: false,
                                maxSpeed: 50
                            },
                            path: {
                                clamp: true,
                                delay: {
                                    value: 1
                                },
                                enable: false
                            },
                            outModes: {
                                default: "out"
                            }, 
                            random: false,
                            size: false,
                            speed: 0.5,
                            spin: {
                                acceleration: 0,
                                enable: false
                            },
                            straight: true,
                            trail: {
                                enable: false,
                                length: 10,
                            },
                            vibrate: false,
                            warp: true
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        number: {
                            density: {
                                enable: true,
                                width: 1920,
                                height: 1080
                            },
                            limit: {
                                mode: "delete",
                                value: 0
                            },
                            value: 300,
                        },
                        opacity: {
                            value: {
                                min: 0.1,
                                max: 1
                            },
                            animation: {
                                count: 0,
                                enable: false,
                                speed: 2,
                                decay: 0,
                                delay: 0,
                                sync: false,
                                mode: "auto",
                                startValue: "random",
                                destroy: "none"
                            }
                        },
                        reduceDuplicates: false,
                        shadow: {
                            blur: 0,
                            color: {
                                value: "#000000"
                            },
                            enable: false,
                            offset: {
                                x: 0,
                                y: 0
                            }
                        },
                        shape: {
                            type: "circle",
                            close: true,
                            fill: true,
                        },
                        size: {
                            value: { min: 1, max: 2 }, 
                            animation: {
                                count: 0,
                                enable: false,
                                speed: 5,
                                decay: 0,
                                delay: 0,
                                sync: false,
                                mode: "auto",
                                startValue: "random",
                                destroy: "none"
                            }
                        },
                        stroke: {
                            width: 0
                        },
                        zIndex: {
                            value: 0,
                            opacityRate: 1,
                            sizeRate: 1,
                            velocityRate: 1
                        },
                        destroy: {
                            mode: "none", 
                            split: {
                                count: 1,
                                factor: {
                                    value: 3
                                },
                                rate: {
                                    value: {
                                        min: 4,
                                        max: 9
                                    },
                                },
                                sizeOffset: true
                            }
                        },
                        roll: {
                            darken : {
                                enable: false,
                                value: 0
                            },
                            enable: false,
                            enlighten: {
                                enable: false,
                                value: 0
                            }, 
                            mode: "vertical",
                            speed: 25
                        },
                        tilt: {
                            value: 0,
                            animation: {
                                enable: false,
                                speed: 0,
                                decay: 0,
                                sync: false
                            },
                            direction: "clockwise",
                            enable: false
                        },
                        twinkle: {
                            lines: {
                                enable: false, 
                                frequency: 0.05,
                                opacity: 1
                            },
                            particles: {
                                enable: false,
                                frequency: 0.05,
                                opacity: 1
                            }
                        },
                        wobble: {
                            distance: 5,
                            enable: false, 
                            speed: {
                                angle: 50,
                                move: 10
                            }
                        },
                        life: {
                            count: 0, 
                            delay :{
                                value: 0,
                                sync: false
                            },
                            duration: {
                                value: 0,
                                sync: false
                            },
                            rotate: {
                                value: 0, 
                                animation : {
                                    enable: false,
                                    speed: 0,
                                    decay: 0,
                                    sync: false
                                },
                                direction: "clockwise", 
                                path: false
                            },
                            orbit: {
                                animation: {
                                    count: 0,
                                    enable: false,
                                    speed: 1,
                                    decay: 0,
                                    delay: 0,
                                    sync: false
                                },
                                enable: false,
                                opacity: 1,
                                rotation: {
                                    value: 45
                                },
                                width: 1
                            },
                            links: {
                                blink: false,
                                color: {
                                    value: "#ffffff"
                                },
                                consent: false,
                                distance: 100,
                                enable: false,
                                frequency: 1,
                                opacity: 1,
                                shadow: {
                                    blur: 5,
                                    color: {
                                        value: "#000"
                                    },
                                    enable: false
                                },
                                triangles: {
                                    enable: false,
                                    frequency: 1
                                },
                                width: 1,
                                wrap: false
                            },
                            repulse: {
                                value: 0,
                                enable: false,
                                distance: 1,
                                duration: 1,
                                factor: 1,
                                speed: 1
                            }
                        }
                    },
                    pauseOnBlur: true,
                    pauseOnOutsideViewport: true,
                    smooth: false,
                    zLayers: 100,
                    name: "Absorbers",
                    absorbers: {
                        color: {
                            value: "#000000"
                        },
                        draggable: true,
                        opacity: 1,
                        destroy: true,
                        orbits: false,
                        size: {
                            value: {
                                min: 5,
                                max: 10
                            },
                            density: 5,
                            limit: {
                                radius: 10,
                                mass: 0
                            }
                        },
                        position: {
                            x: 50,
                            y: 50
                        }
                    },
                    motion: {
                        disable: false,
                        reduce: {
                            factor: 4,
                            value: true
                        }
                    },
                }}
            />}
       </>
    );
};

export default ParticlesComponent;

