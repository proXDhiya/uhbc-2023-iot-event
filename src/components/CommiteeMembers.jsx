import React from "react";
import {
    Container,
    Box,
    Text,
    Grid,
} from "@chakra-ui/react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import Organizationlist from "../global/_Organization";
import ScientificList from "../global/_Scientific";

const CommiteeMembers = () => {
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
        <>
            <Container
                as="section"
                w="100%"
                maxW="100%"
                h="fit-content"
                color="white"
                bg="gray.800"
                py="4rem"
                id="about"
            >
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
                        fpsLimit: 30,
                        particles: {
                            color: {
                                value: "#ffffff11",
                            },
                            links: {
                                color: "#ffffff11",
                                distance: 150,
                                enable: true,
                                opacity: .4,
                                width: .5,
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
                                value: 30,
                            },
                            opacity: {
                                value: 0.2,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 1, max: 5 },
                            },
                        },
                        detectRetina: true,
                    }}
                />
                <Box
                    w="container.xl"
                    mx="auto"
                >
                    <Text
                        as="h2"
                        fontSize="2rem"
                        textAlign="center"
                        textTransform="uppercase"
                        letterSpacing="1px"
                        mb="2rem"
                    >
                        Commitee Members
                    </Text>
                    <Grid
                        templateColumns="repeat(2, 1fr)"
                        gap="1rem"
                    >
                        <Box
                            w="100%"
                            h="100%"
                            maxW="100%"
                            borderRight="1px dashed #fff"
                        >
                            <Text
                                as="h3"
                                fontSize="1.5rem"
                                lineHeight="2rem"
                                textTransform="uppercase"
                                mb="2rem"
                                textAlign="center"
                                textDecor="underline"
                            >
                                Organization
                            </Text>
                            {
                                Organizationlist.map((item, index) => (
                                    <Box
                                        key={index}
                                        w="100%"
                                        maxW="100%"
                                        color="white"
                                        id="about"
                                        mb=".7rem"
                                        textAlign="center"
                                    >
                                        <Text
                                            as="h2"
                                            fontSize="1.1rem"
                                            lineHeight="1.5rem"
                                            textTransform="uppercase"
                                        >
                                            {item.role}: {" "}
                                            <Text
                                                as="span"
                                                color={
                                                    item.color? item.color : "purple.400"
                                                }
                                                fontWeight="bold"
                                            >
                                                {item.name}
                                            </Text>
                                        </Text>
                                    </Box>
                                ))
                            }
                        </Box>
                        <Box
                            w="100%"
                            h="100%"
                            maxW="100%"
                            borderLeft="1px dashed #fff"
                        >
                            <Text
                                as="h3"
                                fontSize="1.5rem"
                                lineHeight="2rem"
                                textTransform="uppercase"
                                mb="2rem"
                                textAlign="center"
                                textDecor="underline"
                            >
                                Scientific
                            </Text>
                            {
                                ScientificList.map((item, index) => (
                                    <Box
                                        key={item.id}
                                        w="100%"
                                        maxW="100%"
                                        color="white"
                                        id="about"
                                        mb=".7rem"
                                        textAlign="center"
                                    >
                                        <Text
                                            as="h2"
                                            fontSize="1.1rem"
                                            lineHeight="1.5rem"
                                            textTransform="uppercase"
                                            fontWeight="bold"
                                            color={item.color? item.color : "purple.400"}
                                        >
                                            {item.name}: {" "}
                                            <Text
                                                as="span"
                                                color="white"
                                                fontWeight="normal"
                                            >
                                                {item.university}
                                            </Text>
                                        </Text>
                                    </Box>
                                ))
                            }
                        </Box>
                    </Grid>
                </Box>
            </Container>
        </>
    );
};

export default CommiteeMembers;
