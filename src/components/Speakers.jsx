import React from "react";
import {
    Container,
    Box,
    Text,
    Image,
    Link,
} from "@chakra-ui/react";
import {
    BsLinkedin
} from "react-icons/bs";

// images
import img1 from '../utils/img/speakers/nayyar.webp';
import img2 from '../utils/img/speakers/Samir.webp';
import img3 from '../utils/img/speakers/bellatrache.webp';
import img4 from '../utils/img/speakers/selma.webp';

const list = [
    {
        name: "Anand Nayyar",
        img: img1,
        title: "Assistant Professor, Scientist",
        linkedin: "https://www.linkedin.com/in/anandnayyar/",
        website: "https://www.anandnayyar.com/",
    },
    {
        name: "Samir Amir",
        img: img2,
        title: "Lead Data Scientist",
        linkedin: "https://www.linkedin.com/in/samir-amir-9b1b1a1a/",
        website: "https://www.samir-amir.com/",
    },
    {
        name: "Ladjel Bellatreche",
        img: img3,
        title: "Professor At ENSMA",
        linkedin: "https://www.linkedin.com/in/ladjel-bellatreche-0b1b1a1a/",
        website: "https://www.ladjel-bellatreche.com/",
    },
    {
        name: "Selma Boumerdassi",
        img: img4,
        title: "CEO of PEREN",
        linkedin: "https://www.linkedin.com/in/selma-boumerdassi-0b1b1a1a/",
        website: "https://www.selma-boumerdassi.com/",
    }
];

const Speakers = () => {
    // render
    return (
        <>
            <Container
                as="section"
                w="100%"
                maxW="100%"
                h="fit-content"
                color="white"
                bg="gray.900"
                py="4rem"
                id="speakers"
            >
                <Text
                    as="h2"
                    fontSize="2rem"
                    textAlign="center"
                    textTransform="uppercase"
                    letterSpacing="1px"
                    mb="2rem"
                >
                    Speakers
                </Text>
                <Box
                    w="container.xl"
                    mx="auto"
                    display="grid"
                    gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
                    gridGap="2rem"
                >
                    {
                        list.map((item, index) => (
                            <Box
                                key={index}
                                w="100%"
                                h="minmax(400px, 1fr)"
                                bg="gray.800"
                                borderRadius="md"
                                boxShadow="md"
                                p="1rem"
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                                justifyContent="center"
                                transition="all .3s ease-in-out"
                                _hover={{
                                    transform: "scale(1.05)",
                                }}
                            >
                                <Image
                                    src={item.img}
                                    alt={item.name}
                                    w="100%"
                                    h="250px"
                                    objectFit="cover"
                                    objectPosition="center"
                                    borderRadius="5px 5px 0 0"
                                    mb="1rem"
                                />
                                <Link
                                    as="h3"
                                    fontSize="1.3rem"
                                    textAlign="center"
                                    textTransform="uppercase"
                                    letterSpacing="1px"
                                    mb=".5rem"
                                    href={item.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    transition="all .3s ease-in-out"
                                    _hover={{
                                        textDecoration: "none",
                                        color: "purple.400",
                                    }}
                                >
                                    {item.name}
                                </Link>
                                <Text
                                    as="h4"
                                    fontSize=".9rem"
                                    textAlign="center"
                                    textTransform="uppercase"
                                    letterSpacing="1px"
                                    mb="1rem"
                                    color="gray.300"
                                >
                                    {item.title}
                                </Text>
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    <Link
                                        href={item.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        transition="all .3s ease-in-out"
                                        _hover={{
                                            textDecoration: "none",
                                            color: "purple.400",
                                        }}
                                    >
                                        <BsLinkedin
                                            size="1.5rem"
                                            color="gray.300"
                                            transition="all .3s ease-in-out"
                                            _hover={{
                                                color: "purple.400",
                                            }}
                                        />
                                    </Link>
                                </Box>
                            </Box>
                        ))
                    }
                </Box>
            </Container>
        </>
    );
};

export default Speakers;
