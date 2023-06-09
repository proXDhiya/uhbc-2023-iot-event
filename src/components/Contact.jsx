import React from "react";
import {
    Container,
    Grid,
    Text,
} from "@chakra-ui/react";

// icons
import {
    FaMapMarkerAlt
} from "react-icons/fa";
import {
    AiOutlineMobile
} from "react-icons/ai";
import {
    MdOutlineAlternateEmail
} from "react-icons/md";
import {
    CgWebsite
} from "react-icons/cg";

// list
const list = [
    {
        icon: <FaMapMarkerAlt />,
        text: "Université Hassiba Benbouali de Chlef"
    },
    {
        icon: <AiOutlineMobile />,
        text: "+213 27 72 70 17"
    },
    {
        icon: <MdOutlineAlternateEmail />,
        text: "fesi.uhbc@gmail.com"
    },
    {
        icon: <CgWebsite />,
        text: "https://fesi-uhbc.netlify.app/"
    }
]

const Contact = () => {
    // render
    return (
        <>
            <Container
                as="section"
                w="100%"
                maxW="100%"
                h="fit-content"
                color="white"
                bgColor="gray.900"
                py="2rem"
                id="contact"
            >
                <Text
                    as="h2"
                    fontSize="2rem"
                    textAlign="center"
                    textTransform="uppercase"
                    letterSpacing="1px"
                    mb="2rem"
                >
                    Contact
                </Text>
                <Grid
                    templateColumns="1fr 2fr"
                    gap="2rem"
                    maxW="container.xl"
                    mx="auto"
                >
                    <Container>
                        <Text
                            as="h3"
                            fontSize="1.2rem"
                            textAlign="left"
                            textTransform="uppercase"
                            letterSpacing="1px"
                            mb="2rem"
                        >
                            Event Location
                        </Text>
                        {
                            list.map((item, index) => {
                                return (
                                    <Text
                                        as="p"
                                        fontSize="1rem"
                                        textAlign="left"
                                        letterSpacing="1px"
                                        mb="1.2rem"
                                        display="flex"
                                        alignItems="center"
                                        key={index}
                                    >
                                        {item.icon}
                                        <span
                                            style={{
                                                marginLeft: "1rem"
                                            }}
                                        >
                                            {item.text}
                                        </span>
                                    </Text>
                                );
                            })
                        }
                    </Container>
                    <iframe
                        title="map"
                        width="100%"
                        height="300"
                        data-lazy-type="iframe"
                        data-src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d145824.56817474178!2d1.308635497342966!3d36.13495298621635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12840e6e830f3e65%3A0x2ad281f9e43abfc8!2sUniversit%C3%A9+Hassiba+Benbouali+(Rectorat)!5e0!3m2!1sfr!2sdz!4v1512037818878&amp;output=embed"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d145824.56817474178!2d1.308635497342966!3d36.13495298621635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12840e6e830f3e65%3A0x2ad281f9e43abfc8!2sUniversit%C3%A9+Hassiba+Benbouali+(Rectorat)!5e0!3m2!1sfr!2sdz!4v1512037818878&amp;output=embed">
                    </iframe>
                </Grid>
            </Container>
        </>
    );
};

export default Contact;
