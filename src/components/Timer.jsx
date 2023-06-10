import React, { useState, useEffect } from "react";
import {
    Container,
    Box,
    Text,
    Grid,
} from "@chakra-ui/react";

const Timer = ({ time }) => {
    // set timer
    const [timer, setTimer] = useState(time - Date.now());
    // set timer with hooks
    useEffect(() => {
        // set interval
        const interval = setInterval(() => {
            // set timer
            setTimer(timer - 1000);
        }, 1000);
        // clear interval
        return () => clearInterval(interval);
    }, [timer]);

    // list elements
    const list = [
        {
            name: "Months",
            value: new Date(timer).getMonth() + 1
        },
        {
            name: "Days",
            value: new Date(timer).getDate() - 1
        },
        {
            name: "Hours",
            value: new Date(timer).getHours()
        },
        {
            name: "Minutes",
            value: new Date(timer).getMinutes()
        },
        {
            name: "Seconds",
            value: new Date(timer).getSeconds()
        }
    ];

    // render
    return (
        <>
            <Container
                as="main"
                w="100%"
                maxW="100%"
                h="fit-content"
                color="white"
                bg="gray.900"
                py={{base: '2rem', md: '2rem'}}
            >
                {
                    timer > 0
                    ? (
                        <Grid
                            gridTemplateColumns={"repeat(5, minmax(0, 1fr))"}
                            gridTemplateRows={"1fr 4fr"}
                            gap={6}
                            w={{base: 'container.sm', md: '100%', lg: 'container.lg'}}
                            maxW="container.lg"
                            h="fit-content"
                            mx="auto"
                        >
                            <Text
                                gridColumn={"1 / 6"}
                                gridRow={"1 / 2"}
                                fontSize={{base: 'lg', md: 'xl', lg: '2xl'}}
                                fontWeight="bold"
                                textAlign="center"
                                textTransform="uppercase"
                            >
                                Time left to start
                            </Text>
                            {
                                list.map((item, index) => {
                                    return (
                                        <Box
                                            key={index}
                                            gridColumn={`${index + 1} / ${index + 2}`}
                                            gridRow={"2 / 3"}
                                            display="flex"
                                            justifyContent="center"
                                            alignItems="center"
                                            flexDirection="column"
                                            gap={{base: '0.5rem', md: '1rem'}}
                                            fontSize={{base: 'lg', md: 'xl', lg: '2xl'}}
                                            fontWeight="bold"
                                            textAlign="center"
                                            textTransform="uppercase"
                                            p="1rem"
                                            bg="gray.800"
                                            borderRadius="0.5rem"
                                            transition="all 0.2s ease-in-out"
                                            zIndex={1}
                                            _hover={{
                                                bg: "gray.700",
                                            }}
                                        >
                                            <Text
                                                color="purple.400"
                                            >
                                                {item.value}
                                            </Text>
                                            <Text
                                                fontSize={{base: 'sm', md: 'lg', lg: '2xl'}}
                                            >
                                                {item.name}
                                            </Text>
                                        </Box>
                                    )
                                })
                            }
                        </Grid>
                    )
                    : (
                        <>
                            <Text
                                fontSize={{base: 'lg', md: 'xl', lg: '2xl'}}
                                fontWeight="bold"
                                textAlign="center"
                                textTransform="uppercase"
                                color="purple.400"
                                bg="gray.800"
                                py={{base: '1rem', md: '.5rem'}}
                                px="2rem"
                                borderRadius="0.5rem"
                                mx="auto"
                                transition="all 0.3s ease-in-out"
                                _hover={{
                                    bg: "gray.700",
                                    color: "white"
                                }}
                            >
                                The event has started
                            </Text>
                        </>
                    )
                }
            </Container>
        </>
    );
};

export default Timer;
