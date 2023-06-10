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
import links from "../global/_Links";


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
                templateColumns={{
                    base: `auto 1fr repeat(${links.length}, auto)`,
                    sm: `auto auto repeat(${links.length}, auto)`,
                }}
                templateRows="1fr"
                gap="10px"
                w={{
                    base: '100%',
                    xl: 'container.xl',
                    lg: 'container.lg',
                    md: 'container.md',
                    sm: 'container.sm',
                }}
                h="100%"
                mx="auto"
                fontSize={{
                    base: 'sm',
                    xl: 'md',
                    lg: 'md',
                    md: 'sm',
                    sm: 'sm',
                }}
            >
                <Link
                    href="/"
                    color="white"
                    textTransform="uppercase"
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
                        w={{base: '40px', md: '60px', lg: '60px'}}
                        h={{base: '40px', md: '60px', lg: '60px'}}
                        objectFit="cover"
                        objectPosition="center"
                        mr="10px"
                    />
                    <Text
                        display={{base: 'none', md: 'none', lg: 'block'}}
                    >
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
                                ml={{
                                    base: '0',
                                    xl: '35px',
                                    lg: '30px',
                                    md: '25px',
                                    sm: '10px',
                                }}
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
