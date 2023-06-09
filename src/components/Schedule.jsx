import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Container,
    Text,
    Grid,
    Spacer
} from "@chakra-ui/react";

// data
import ScheduleData from "../global/_Schedule";

const Schedule = () => {
    // render
    return (
        <>
            <Container
                as="section"
                w="100%"
                maxW="100%"
                h="fit-content"
                color="white"
                bgColor="gray.800"
                py="4rem"
                id="schedule"
            >
                <Container
                    maxW="container.xl"
                    mx="auto"
                >
                    <Text
                        as="h2"
                        fontSize="2rem"
                        textAlign="center"
                        textTransform="uppercase"
                        letterSpacing="1px"
                        mb="2rem"
                    >
                        SCHEDULE
                    </Text>
                    <Accordion allowToggle>
                        {
                            ScheduleData.map((item, index) => {
                                return (
                                    <AccordionItem key={index}>
                                        <h2>
                                            <AccordionButton
                                                bg="gray.700"
                                                color="white"
                                                _expanded={{
                                                    bg: "purple.900"
                                                }}
                                                _hover={{
                                                    bg: "purple.900"
                                                }}
                                            >
                                                <Container
                                                    w="100%"
                                                    maxW="100%"
                                                    display="flex"
                                                    justifyContent="space-between"
                                                    alignItems="center"
                                                >
                                                    <Text
                                                        as="span"
                                                        fontSize="1.1rem"
                                                        fontWeight="bold"
                                                        textTransform="uppercase"
                                                        letterSpacing="1px"
                                                    >
                                                        {item.date} / Schedule
                                                    </Text>
                                                    <AccordionIcon 
                                                        w="1.5rem"
                                                        h="1.5rem"
                                                    />
                                                </Container>
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            <Container
                                                w="100%"
                                                maxW="100%"
                                                display="flex"
                                                flexWrap="wrap"
                                                justifyContent="space-between"
                                                alignItems="center"
                                                my="1rem"
                                            >
                                                <Grid
                                                    templateColumns="200px 1fr 300px"
                                                    templateRows="50px"
                                                    alignItems="center"
                                                    w="100%"
                                                >
                                                    <Text
                                                        as="span"
                                                        fontSize="1.1rem"
                                                        fontWeight="bold"
                                                        textTransform="uppercase"
                                                        letterSpacing="1px"
                                                        borderLeft="1px solid white"
                                                        borderBottom="1px solid white"
                                                        borderTop="1px solid white"
                                                        pl="1rem"
                                                        pb=".5rem"
                                                        pt=".4rem"
                                                    >
                                                        Time
                                                    </Text>
                                                    <Text
                                                        as="span"
                                                        fontSize="1.1rem"
                                                        fontWeight="bold"
                                                        textTransform="uppercase"
                                                        letterSpacing="1px"
                                                        borderBottom="1px solid white"
                                                        borderTop="1px solid white"
                                                        borderLeft="1px solid white"
                                                        pb=".5rem"
                                                        pt=".4rem"
                                                        pl="1rem"
                                                    >
                                                        Host
                                                    </Text>
                                                    <Text
                                                        as="span"
                                                        fontSize="1.1rem"
                                                        fontWeight="bold"
                                                        textTransform="uppercase"
                                                        letterSpacing="1px"
                                                        borderRight="1px solid white"
                                                        borderBottom="1px solid white"
                                                        borderTop="1px solid white"
                                                        borderLeft="1px solid white"
                                                        pl="1rem"
                                                        pb=".5rem"
                                                        pt=".4rem"
                                                    >
                                                        Title
                                                    </Text>
                                                    <Spacer 
                                                        h="10px"
                                                        gridColumn="1 / 4"
                                                    />
                                                    {
                                                        item.program.map((event, index) => {
                                                            return (
                                                                <React.Fragment key={index}>
                                                                    <Text
                                                                        as="span"
                                                                        fontSize="1.1rem"
                                                                        fontWeight="bold"
                                                                        textTransform="uppercase"
                                                                        letterSpacing="1px"
                                                                        borderRight="1px solid white"
                                                                        borderLeft="1px solid white"
                                                                        borderTop={
                                                                            index === 0 ? "1px solid white" : "none"
                                                                        }
                                                                        borderBottom="1px solid white"
                                                                        pb=".5rem"
                                                                        pt=".4rem"
                                                                        pl="1rem"
                                                                    >
                                                                        {event.time}
                                                                    </Text>
                                                                    <Text
                                                                        as="span"
                                                                        fontSize="1.1rem"
                                                                        fontWeight="bold"
                                                                        textTransform="uppercase"
                                                                        letterSpacing="1px"
                                                                        borderRight="1px solid white"
                                                                        borderTop={
                                                                            index === 0 ? "1px solid white" : "none"
                                                                        }
                                                                        borderBottom="1px solid white"
                                                                        pb=".5rem"
                                                                        pt=".4rem"
                                                                        pl="1rem"
                                                                    >
                                                                        {event.speaker}
                                                                    </Text>
                                                                    <Text
                                                                        as="span"
                                                                        fontSize="1.1rem"
                                                                        fontWeight="bold"
                                                                        textTransform="uppercase"
                                                                        letterSpacing="1px"
                                                                        borderRight="1px solid white"
                                                                        borderTop={
                                                                            index === 0 ? "1px solid white" : "none"
                                                                        }
                                                                        borderBottom="1px solid white"
                                                                        pb=".5rem"
                                                                        pt=".4rem"
                                                                        pl="1rem"
                                                                    >
                                                                        {event.title}
                                                                    </Text>
                                                                </React.Fragment>
                                                            );
                                                        })
                                                    }
                                                </Grid>
                                            </Container>
                                        </AccordionPanel>
                                    </AccordionItem>
                                );
                            })
                        }
                    </Accordion>
                </Container>
            </Container>
        </>
    );
}

export default Schedule;
