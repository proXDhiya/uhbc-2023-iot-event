import React from "react";
import {
    Container,
    Box,
    Grid,
    Text,
    Image,
} from "@chakra-ui/react";

// import images
import comutingImage from '../utils/img/cards/computing.jpg';
import energyImage from '../utils/img/cards/energy.jpg';
import informationImage from '../utils/img/cards/si.jpg';
import aiImage from '../utils/img/cards/ai.png';
import trendsImage from '../utils/img/cards/tech.png';
import ambientImage from '../utils/img/cards/int.png';
import networkingImage from '../utils/img/cards/network.png';

const list = [
    {
        img: comutingImage,
        title: "Computing",
        desc: "Cloud Computing , Distributed Computing Systems Quantum Computing,Distributed and parallel systems,Cognitive Computing;Grid Computing Optimization,Embedded Computing"
    },
    {
        img: energyImage,
        title: "ENERGY AND RESOURCES",
        desc: "Sustainable energy;sustainable environment;Environment and Technologies"
    },
    {
        img: informationImage,
        title: "information system",
        desc: "Data & Process Mining, Data warehousing and Query Optimization,Semantic Web and Ontologies; Multi-Agent Systems; E-commerce"
    },
    {
        img: aiImage,
        title: "Artificial Intelligence",
        desc: "Machine Learning/Deep learning,Decision Support Systems,Neural Networks , Fuzzy Logic,Natural Language Processing,Robotics Neural Networks , Fuzzy Logic,Expert Systems,Agents and Multi-agent Systems,Natural Language Processing,Data Mining,Computational Optimization,Robotics,Sentiment Analysis"
    },
    {
        img: trendsImage,
        title: "TECHNOLOGY TRENDS",
        desc: "Big Data Management and Analytics,Internet of Things,Blockchain,Datamining,Mobile Applications,Social Networks Applications"
    },
    {
        img: ambientImage,
        title: "AMBIENT INTELLIGENCE",
        desc: "Smart Network Communications,Smart Agriculture& IoT Solutions,Smart Connected Devices,Smart helthcare ,Sensors and measurements,Monitoring systems,"
    },
    {
        img: networkingImage,
        title: "Networking",
        desc: "Network Security,Network Management,Network Performance Analysis,Network Simulation and Modeling,Network Protocols,Network Architectures,Wireless Networks,Mobile Networks,Ad-hoc Networks,Internet of Things,Cloud Computing,Software Defined Networks,Network Function Virtualization,Network Coding,Networks"
    }
];

const About = () => {
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
                        fontSize="1.4rem"
                        fontWeight="bold"
                        letterSpacing="0.1rem"
                        mb="1rem"
                    >
                        ABOUT MANIFESTATION
                    </Text>
                    <Text
                        textAlign="justify"
                        fontWeight="light"
                    >
                        The first International Conference on Artificial Intelligence, Smart Technology,
                        and Communications (AISTC'21) aim to bring together leading academic scientists,
                        international researchers, and professionals to share and exchange their experiences
                        and research studies on all aspects of artificial intelligence. It also offers
                        a premier interdisciplinary forum for researchers, professionals, and students to
                        present and address the most current innovations, trends, concerns, and practical
                        challenges confronted in the fields of artificial intelligence, as well as solutions adopted.
                        The conference will provide an opportunity to bridge the gap between artificial intelligence
                        researchers and those in industry or working in relevant fields such as smart cities,
                        big data, cloud computing, social networks, and communications. Topics include but are not limited to .
                    </Text>
                </Box>
                <Grid
                    gridTemplateColumns={"repeat(3, 1fr)"}
                    gap="2rem"
                    w="container.lg"
                    h="fit-content"
                    mx="auto"
                >
                    {
                        list.map((item, index) => {
                            return (
                                <Box
                                    key={index}
                                    w="100%"
                                    h="360px"
                                    bg="gray.700"
                                    borderRadius="0.5rem"
                                    position="relative"
                                    overflow="hidden"
                                    cursor="pointer"
                                    transition="all 0.3s ease-in-out"
                                    opacity="0.9"
                                    _hover={{
                                        opacity: "1",
                                        transform: "scale(1.03)"
                                    }}
                                >
                                    <Image
                                        src={item.img}
                                        alt={item.title}
                                        w="100%"
                                        h="40%"
                                        objectFit="cover"
                                        objectPosition="center"
                                    />
                                    <Text
                                        position="absolute"
                                        top="28.5%"
                                        bg="rgba(0,0,0,0.5)"
                                        backdropFilter="blur(0.5rem)"
                                        p=".5rem"
                                        textTransform="uppercase"
                                    >
                                        {item.title}
                                    </Text>
                                    
                                </Box>
                            )
                        })
                    }
                </Grid>
            </Container>
        </>
    );
};

export default About;
