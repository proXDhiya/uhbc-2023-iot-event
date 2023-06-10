import React from "react";
import {
    Container,
    Text,
    Image
} from "@chakra-ui/react";
import party from "party-js";

// logo
import Logo from "../utils/img/logo-without-bg.webp";

export const BitCrew = () => {
    
    // render
    return (
        <>
            <Container
                as="main"
                w="100%"
                maxW="100%"
                h="fit-content"
                color="white"
                bg="black"
                py="2rem"
                id="bitcrew"
                onMouseEnter={() => party.confetti(document.getElementById("bitcrew"))}
            >
                <Container
                    w="container.xl"
                    h="fit-content"
                    mx="auto"
                    textAlign="center"
                    position="relative"
                    pt=".5rem"
                    pb="1.5rem"
                >
                    <Text
                        as="h2"
                        fontSize="2rem"
                        textAlign="center"
                        textTransform="uppercase"
                        letterSpacing="1px"
                    >
                        Organized by
                    </Text>
                    <Image
                        w="200px"
                        h="auto"
                        mx="auto"
                        src={Logo}
                        alt="Bit Crew Logo"
                    />
                    <Text
                        as="span"
                        color="transparent"
                        bgGradient="linear(to-r, pink.500, blue.500)"
                        bgClip="text"
                        fontSize="2rem"
                        fontWeight="bold"
                        textAlign="center"
                        letterSpacing="1px"
                        position="absolute"
                        top="90%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                    >
                        Bit Crew
                    </Text>
                </Container>
            </Container>
        </>
    )
};

export default BitCrew;
