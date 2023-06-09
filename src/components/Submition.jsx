import React from "react";
import {
    Button,
    Container,
    Text
} from "@chakra-ui/react";

// image
import bgImageSubmition from '../utils/img/aa8.webp';

const Submition = () => {
    // render
    return (
        <>
            <Container
                as="section"
                w="100%"
                maxW="100%"
                h="fit-content"
                color="white"
                bgImage={bgImageSubmition}
                bgSize="cover"
                bgPosition="center"
                bgRepeat="no-repeat"
                bgAttachment="fixed"
                bgColor="rgba(0, 0, 0, 0.65)"
                bgBlendMode="darken"
                py="4rem"
                id="submition"
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
                        SUBMIT YOUR CONTRIBUTION WORK
                    </Text>
                    <Text
                        as="p"
                        fontSize=".9rem"
                        textAlign="center"
                        textTransform="uppercase"
                        letterSpacing="1px"
                        mb="2rem"
                        lineHeight="1.5rem"
                    >
                        You've inspired new consumer, racked up click-thru's,
                        blown-up brand awareness. We can't give you back the weekends you worked,
                        or erase the pain of being forced to make the logo bigger.
                        But if you submit your best work.
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
                        textTransform="uppercase"
                        display="block"
                        pt=".8rem"
                        transition="all .3s"
                    >
                        Submit Now
                    </Button>
                </Container>
            </Container>
        </>
    );
};

export default Submition;
