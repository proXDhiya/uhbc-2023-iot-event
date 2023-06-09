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
import bgImageHeader from '../utils/img/aa9.jpg';
import logo from '../utils/img/logoconf2.png';

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
                    w="350px"
                    h="auto"
                    mx="auto"
                />
                <Grid
                    gridTemplateColumns={"1fr"}
                    gridTemplateRows={"repeat(4, auto)"}
                    gridGap="1rem"
                    w="container.lg"
                    h="fit-content"
                    mx="auto"
                    color="white"
                    textAlign="center"
                >
                    <Text
                        textTransform="uppercase"
                        fontSize="2xl"
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
                        fontSize="2xl"
                        fontWeight="bold"
                        letterSpacing="wide"
                    >
                        FIRST NATIONAL CONFERENCE ON ARTIFICIEL INTELLIGENCE, SMART TECHNOLOGIES AND COMMUNICATIONS
                    </Text>
                    <Text
                        textTransform="uppercase"
                        fontSize="xl"
                        color="gray.300"
                    >
                        FACULTY OF EXACT SCIENCES & INFORMATICS
                    </Text>
                    <Button
                        as="a"
                        href="#"
                        colorScheme="purple"
                        variant="solid"
                        size="lg"
                        w="fit-content"
                        mx="auto"
                        mt="1rem"
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
