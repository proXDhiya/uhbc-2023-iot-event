import React from "react";
import {
    Container,
    Grid,
    Text,
    Image,
    Tooltip
} from "@chakra-ui/react";

// import data
import partnersData from "../global/_partners";

const Partners = () => {
    // render
    return (
        <>
            <Container
                as="section"
                w="100%"
                maxW="100%"
                h="fit-content"
                color="white"
                bgColor="gray.800"
                py="2rem"
                id="partners"
            >
                <Container
                    maxW="container.xl"
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
                        Partners
                    </Text>
                    <Grid
                        templateColumns="repeat(4, 1fr)"
                        templateRows="1fr"
                        gap="1rem"
                        justifyContent="center"
                        alignItems="center"
                    >
                        {
                            partnersData.map((partner, index) => {
                                return (
                                    <Container
                                        key={index}
                                        maxW="90%"
                                        h="90%"
                                        p="1rem"
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center"
                                    >
                                        <Tooltip
                                            label={partner.name}
                                            aria-label={partner.name}
                                        >
                                            <Image
                                                src={partner.logo}
                                                alt={partner.name}
                                                w="90%"
                                                h="90%"
                                                objectFit="contain"
                                                filter="brightness(0) invert(1)"
                                                cursor="pointer"
                                            />
                                        </Tooltip>
                                    </Container>
                                );
                            })
                        }
                    </Grid>
                </Container>
            </Container>
        </>
    );
}

export default Partners;
