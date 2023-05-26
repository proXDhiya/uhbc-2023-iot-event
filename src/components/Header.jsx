import React from 'react';
import {
    Box,
    Grid,
    Image,
    Link,
    Text,
} from '@chakra-ui/react';

// images
import bgImageHeader from '../utils/img/aa9.jpg';
import logo from '../utils/img/flogo.ico';

// links
const links = [
    {
        name: "About",
        href: "#about",
    },
    {
        name: "Speakers",
        href: "#speakers",
    },
    {
        name: "Schedule",
        href: "#schedule",
    },
    {
        name: "Photos",
        href: "#photos",
    },
    {
        name: "Partners",
        href: "#partners",
    },
    {
        name: "Contact",
        href: "#contact",
    }
]

const Header = () => {
    // render
    return (
        <Box
            as="header"
            bgImage={bgImageHeader}
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgAttachment="fixed"
            bgBlendMode="darken"
            bgColor="rgba(0, 0, 0, 0.45)"
            w="100%"
            h="100vh"
        >
            <Grid
                templateColumns="auto 1fr repeat(6, 110px)"
                templateRows="1fr"
                gap="10px"
                w="container.xl"
                h="60px"
                pos="fixed"
                top="0"
                left="50%"
                transform="translateX(-50%)"
            >
                <Link
                    href="/"
                    color="white"
                    textTransform="uppercase"
                    fontSize="l"
                    letterSpacing="wide"
                    display="flex"
                    alignItems="center"
                    _hover={{
                        textDecoration: 'none',
                        color: 'gray.300',
                    }}
                >
                    <Image 
                        src={logo}
                        alt="logo"
                        w="60px"
                        h="60px"
                        objectFit="cover"
                        objectPosition="center"
                        mr="10px"
                    />
                    <Text>
                        Scientific manifestation 2023
                    </Text>
                </Link>
                {
                    links.map((link, index) => {
                        return (
                            <Link
                                key={index}
                                href={link.href}
                                color="white"
                                textTransform="uppercase"
                                fontSize="l"
                                letterSpacing="wide"
                                display="flex"
                                alignItems="center"
                                gridColumnStart={index + 3}
                                pos="relative"
                                w="fit-content"
                                placeSelf="center"
                                _hover={{
                                    textDecoration: 'none',
                                    color: 'gray.300',
                                    _after: {
                                        width: '100%',
                                    }
                                }}
                                _after={{
                                    content: '""',
                                    display: 'block',
                                    pos: 'absolute',
                                    w: '0',
                                    h: '2px',
                                    bg: 'white',
                                    bottom: '-2px',
                                    transition: 'width .3s',
                                }}
                            >
                                {link.name}
                            </Link>
                        );
                    })
                }
            </Grid>
        </Box>
    );
};

export default Header;
