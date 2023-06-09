import React from "react";
import {
    Box,
    Container,
    FormControl,
    Grid,
    Link,
    Text,
    Input,
    Button,
    Spacer
} from "@chakra-ui/react";

// icons
import {
    FaFacebook,
} from "react-icons/fa";

import {
    IoLogoOctocat
} from "react-icons/io";

// links
import links from "../global/_Links";

const Footer = () => {
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
            >
                <Grid
                    w="container.xl"
                    h="fit-content"
                    mx="auto"
                    gridTemplateColumns="2fr 1fr"
                    gridTemplateRows="2fr 2px auto"
                    gridGap="1rem"
                >
                    <Box
                        p="1rem"
                    >
                        <Link
                            href="https://www.github.com/proXDhiya"
                            isExternal
                            display="inline-flex"
                            alignItems="center"
                            justifyContent="flex-start"
                            textDecoration="none"
                            mb="2rem"
                            _hover={{
                                textDecoration: "none",
                                color: "purple.500"
                            }}
                        >
                            <IoLogoOctocat 
                                size="2rem"
                            />
                            <Text
                                ml="1rem"
                                fontSize="1.15rem"
                                letterSpacing="0.08rem"
                            >
                                @ProXDhiya
                            </Text>
                        </Link>
                        <Grid
                            gridTemplateColumns={`repeat(${links.length}, 1fr)`}
                            w={`calc(${links.length} * 110px)`}
                        >
                            {
                                links.map((link, index) => {
                                    return (
                                        <>
                                            <Link
                                                key={index}
                                                href={link.href}
                                                textTransform="uppercase"
                                                fontSize="l"
                                                letterSpacing="wide"
                                                fontWeight="light"
                                                textDecoration="none"
                                                w="fit-content"
                                                _hover={{
                                                    textDecoration: 'none',
                                                    color: 'purple.300',
                                                    _after: {
                                                        w: 'full',
                                                    },
                                                }}
                                                _after={{
                                                    content: '""',
                                                    display: 'block',
                                                    w: '0',
                                                    h: '2px',
                                                    mt: '2px',
                                                    bg: 'purple.300',
                                                    transition: 'width .3s',
                                                }}
                                            >
                                                {link.name}
                                            </Link>
                                        </>
                                    )
                                })
                            }
                        </Grid>
                    </Box>
                    <Box
                        p="1rem"
                    >
                        <Text
                            fontSize="1.2rem"
                            my=".5rem"
                        >
                            Join our newsletter
                        </Text>
                        <FormControl isRequired>
                            <Grid
                                gridTemplateColumns="2fr 1fr"
                                gridGap="1rem"
                                alignItems="end"
                                justifyItems="stretch"
                            >
                                <Input
                                    type="email"
                                    id="email"
                                    aria-describedby="email-helper-text"
                                    placeholder="Enter your email"
                                />
                                <Button
                                    type="submit"
                                    colorScheme="purple"
                                    variant="solid"
                                    mt="1rem"
                                >
                                    Subscribe
                                </Button>
                            </Grid>
                        </FormControl>
                    </Box>
                    <Spacer 
                        gridColumn="1 / -1"
                        h="100%"
                        bg="gray.800"
                    />
                    <Text
                        gridColumn="1 / -1"
                        textAlign="center"
                        color="gray.400"
                        fontSize="sm"
                        letterSpacing="wide"
                        _hover={{
                            color: "purple.300"
                        }}
                    >
                        &copy; 2023 ProXDhiya. All rights reserved.
                    </Text>
                </Grid>
            </Container>
        </>
    )
};

export default Footer;
