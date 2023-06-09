import React from "react";
import ImageGallery from "react-image-gallery";
import {
    Container,
    Text
} from "@chakra-ui/react";

// import data
import galleryData from "../global/_gallery";

const EventPhotos = () => {
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
                id="schedule"
            >
                <Container
                    maxW="45%"
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
                        Event Photos
                    </Text>
                    {
                        galleryData.length > 0 ?
                        <ImageGallery
                            items={galleryData}
                            loading="lazy"
                        />
                        :
                        <Text
                            as="h2"
                            fontSize="1.4rem"
                            textAlign="center"
                            textTransform="uppercase"
                            letterSpacing="1px"
                            mb="2rem"
                            bgColor="gray.800"
                            p=".5rem"
                        >
                            No photos yet 😥
                        </Text>
                    }
                </Container>
            </Container>
        </>
    );
};

export default EventPhotos;
