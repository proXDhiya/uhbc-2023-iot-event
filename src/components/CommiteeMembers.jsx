import React from "react";
import {
    Container,
    Box,
    Text,
    Grid,
} from "@chakra-ui/react";

import Organizationlist from "../global/_Organization";
import ScientificList from "../global/_Scientific";

const CommiteeMembers = () => {
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
                            h="fit-content"
                            maxW="100%"
                            borderRight="1px dashed #fff"
                        >
                            <Text
                                as="h3"
                                fontSize="1.5rem"
                                lineHeight="2rem"
                                textTransform="uppercase"
                                mb="1rem"
                                textAlign="center"
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
                        <Box>
                            {

                            }
                        </Box>
                    </Grid>
                </Box>
            </Container>
        </>
    );
};

export default CommiteeMembers;
