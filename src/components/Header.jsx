import React from 'react';
import {
    Box,
    Grid,
    Image,
    Button,
    Text,
} from '@chakra-ui/react';

// components
import Nav from './Nav';

// images
import bgImageHeader from '../utils/img/aa9.webp';
import logo from '../utils/img/logoconf2.webp';

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
            bgColor="rgba(0, 0, 0, 0.65)"
            bgBlendMode="darken"
            w="100%"
            h="fit-content"
            pt="10px"
            pb="50px"
        >
            <Nav />
            <>
                <Image 
                    src={logo}
                    alt="logo"
                    w={{
                        base: '300px',
                        xl: '400px',
                        lg: '350px',
                        md: '300px',
                    }}
                    h="auto"
                    mx="auto"
                />
                <Grid
                    gridTemplateColumns={"1fr"}
                    gridTemplateRows={"repeat(4, auto)"}
                    gridGap="1rem"
                    w={{
                        xl: 'container.xl',
                        lg: 'container.lg',
                        md: 'container.md',
                        sm: 'container.sm',
                    }}
                    h="fit-content"
                    mx="auto"
                    color="white"
                    textAlign="center"
                    mt="-50px"
                >
                    <Text
                        textTransform="uppercase"
                        fontSize={{
                            xl: '2xl',
                            lg: 'xl',
                            md: 'lg',
                            sm: 'md'
                        }}
                        textDecor="underline"
                        _hover={{
                            color: 'purple.200',
                            scale: 1.1,
                        }}
                        transition="all .3s"
                    >
                        8 - 9 Novembre, 2023 / UHBC University
                    </Text>
                    <Text
                        textTransform="uppercase"
                        fontSize={{
                            xl: '2xl',
                            lg: 'xl',
                            md: 'lg',
                            sm: 'md'
                        }}
                        fontWeight="bold"
                        letterSpacing="wide"
                    >
                        FIRST NATIONAL CONFERENCE ON ARTIFICIEL INTELLIGENCE, SMART TECHNOLOGIES AND COMMUNICATIONS
                    </Text>
                    <Text
                        textTransform="uppercase"
                        fontSize={{
                            xl: '2xl',
                            lg: 'xl',
                            md: 'lg',
                            sm: 'md'
                        }}
                        color="gray.300"
                    >
                        FACULTY OF EXACT SCIENCES & INFORMATICS
                    </Text>
                    <Button
                        as="a"
                        href="#"
                        colorScheme="purple"
                        variant="solid"
                        size={{
                            base: 'sm',
                            xl: 'lg',
                            lg: 'lg',
                            md: 'md',
                            sm: 'sm'
                        }}
                        w="fit-content"
                        mx="auto"
                        mt={{
                            xl: '1rem',
                            lg: '.5rem',
                            md: '.4rem',
                            sm: '.3rem'
                        }}
                        zIndex="1"
                        transition="all .3s"
                    >
                        Register Now
                    </Button>
                </Grid>
            </>
        </Box>
    );
};

export default Header;
