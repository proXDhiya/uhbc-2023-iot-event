import React from "react";
import {
    Container,
    Box,
    Text,
} from "@chakra-ui/react";

const list = [
    {
        role: "Modifié a- Honorary Chairs",
        name: "Recteur et doyen"
    },
    {
        role: "General Chair",
        name: "Moi"
    },
    {
        role: "Organizing Committee Chair",
        name: "Mr.Allali"
    },
    {
        role: "Organizing Committee",
        name: "Mr.Allali"
    },
    {
        role: "Scientific Committee Chair",
        name: "Mr.Allali"
    }
]

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
                    mb="4rem"
                >
                    <Text
                        as="h2"
                        fontSize="2rem"
                        fontWeight="bold"
                        textAlign="center"
                        mb="2rem"
                    >
                        Commitee Members
                    </Text>
                    {
                        list.map((item, index) => (
                            <Box
                                key={index}
                                w="100%"
                                maxW="100%"
                                color="white"
                                bg="gray.800"
                                id="about"
                                mb=".7rem"
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
                                        color="purple.400"
                                        fontWeight="bold"
                                    >
                                        {item.name}
                                    </Text>
                                </Text>
                            </Box>
                        ))
                    }
                </Box>
            </Container>
        </>
    );
};

export default CommiteeMembers;
