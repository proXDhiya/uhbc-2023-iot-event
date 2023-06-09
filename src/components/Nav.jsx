import React from "react";
import {
    Container,
    Grid,
    Image,
    Link,
    Text,
} from "@chakra-ui/react";

// images
import logo from '../utils/img/flogo.webp';

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
        name: "Partners",
        href: "#partners",
    },
    {
        name: "Contact",
        href: "#contact",
    }
]


const Nav = () => {
    const [isMoved, setIsMoved] = React.useState(false);

    // update isMoved value when the user scrol down 200px
    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsMoved(true);
            } else {
                setIsMoved(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // render
    return (
        <Container
            backdropFilter="blur(10px)"
            bg={isMoved ? 'rgba(0, 0, 0, .5)' : 'rgba(0, 0, 0, .2)'}
            h="60px"
            w="100%"
            maxW="100%"
            pos="fixed"
            top="0"
            transition="all .3s"
            zIndex="1000"
        >
            <Grid
                templateColumns={`auto 1fr repeat(${links.length}, 110px)`}
                templateRows="1fr"
                gap="10px"
                w="container.xl"
                h="100%"
                mx="auto"
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
                        color: 'purple.300',
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
                                    color: 'purple.300',
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
                                    bottom: '-2px',
                                    bg: 'purple.600',
                                    transition: 'width .3s',
                                }}
                            >
                                {link.name}
                            </Link>
                        );
                    })
                }
            </Grid>
        </Container>
    )
};

export default Nav;
