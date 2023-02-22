import { Box, Stack, Text, Image, Button, HStack, Img } from "@chakra-ui/react";
import React, { useState } from "react";

export const ImageSlider = ({ slides }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevButton = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextButton = () => {
    const isLastSlide = currentIndex === 3;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <Stack
      margin="auto"
      display="flex"
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      <Stack width="full" mt="10px" position="relative" margin="auto">
        <Image boxSize="auto" src={slides[currentIndex].url} />
      </Stack>
      <HStack maxWidth={["100%", "400px", "500px", "0px", "0px"]}>
        <Button
          onClick={prevButton}
          borderRadius="25px"
          boxSize="40px"
          placeContent="center"
          position="absolute"
          left={["10px", "130px", "0px", "0px", "0px"]}
          zIndex={1}
        >
          <Img
            boxSize="20px"
            alt="previous botton"
            src="/images/icon-previous.svg"
          />
        </Button>

        <Button
          onClick={nextButton}
          borderRadius="25px"
          boxSize="40px"
          placeContent="center"
          position="absolute"
          right={["10px", "130px", "0px", "0px", "0px"]}
          zIndex={1}
        >
          <Img boxSize="20px" alt="next botton" src="/images/icon-next.svg" />
        </Button>
      </HStack>
    </Stack>
  );
};

const SliderPicture = () => {
  const slides = [
    { url: "/images/image-product-1.jpg", title: "Sneaker One" },
    { url: "/images/image-product-2.jpg", title: "Sneaker Two" },
    { url: "/images/image-product-3.jpg", title: "Sneaker Three" },
    { url: "/images/image-product-4.jpg", title: "Sneaker Four" },
  ];

  return (
    <Box textAlign="center">
      <ImageSlider slides={slides} />
    </Box>
  );
};

export default SliderPicture;
