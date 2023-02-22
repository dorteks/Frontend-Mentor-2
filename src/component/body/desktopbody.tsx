import {
  Box,
  Img,
  Grid,
  Text,
  Stack,
  Button,
  HStack,
  GridItem,
  ButtonGroup,
} from "@chakra-ui/react";
import React, { useState } from "react";
import AddToCart from "../cartFunction/addToCart";

const DesktopBody = () => {
  const [image, setImage] = useState("/images/image-product-1.jpg");
  const [opacity, setOpacity] = useState("1");

  const toggleOpacity = () => {
    if (opacity === "0.5") {
      setOpacity("1");
    } else {
      if (opacity === "1") {
        setOpacity("0.5");
      }
    }
  };

  return (
    <>
      <Grid
        pt="5rem"
        maxWidth="100vw"
        maxHeight="100vh"
        templateColumns="repeat(2, 1fr)"
        pl={["0px", "0px", "15px", "50px", "150px"]}
        pr={["0px", "0px", "15px", "50px", "150px"]}
        mb={["0px", "0px", "150px", "150px", "150px"]}
      >
        <GridItem
          height="auto"
          minWidth="auto"
          placeContent="center"
          display={["none", "none", "flex", "flex", "flex"]}
        >
          <Stack align="center">
            <Img
              borderRadius="20px"
              src={image}
              boxSize={["28rem", "28rem", "20rem", "24rem", "28rem"]}
            />
            <HStack pt="40px">
              <Img
                onClick={() => {
                  setImage("/images/image-product-1.jpg");
                }}
                borderRadius="15px"
                src="/images/image-product-1-thumbnail.jpg"
                boxSize={["0rem", "0rem", "4.6rem", "5.6rem", "6.3rem"]}
              />
              <Img
                onClick={() => {
                  setImage("/images/image-product-2.jpg");
                }}
                borderRadius="15px"
                src="/images/image-product-2-thumbnail.jpg"
                boxSize={["0rem", "0rem", "4.6rem", "5.6rem", "6.3rem"]}
              />
              <Img
                onClick={() => {
                  setImage("/images/image-product-3.jpg");
                }}
                borderRadius="15px"
                src="/images/image-product-3-thumbnail.jpg"
                boxSize={["0rem", "0rem", "4.6rem", "5.6rem", "6.3rem"]}
              />
              <Img
                onClick={() => {
                  setImage("/images/image-product-4.jpg");
                }}
                borderRadius="15px"
                src="/images/image-product-4-thumbnail.jpg"
                boxSize={["0rem", "0rem", "4.6rem", "5.6rem", "6.3rem"]}
              />
            </HStack>
          </Stack>
        </GridItem>
        <GridItem
          width="100%"
          height="auto"
          display={["none", "none", "flex", "flex", "flex"]}
        >
          <Stack
            pl={["3rem", "3rem", "1rem", "3rem", "3rem"]}
            mt={["4rem", "4rem", "2.5rem", "3rem", "4rem"]}
            width={["500px", "500px", "50vw", "500px", "500px"]}
          >
            <Text letterSpacing={1} fontWeight="bold" color="orange">
              SNEAKER COMPANY
            </Text>
            <Text
              fontWeight="bold"
              fontSize={["3rem", "3rem", "2.3rem", "2.7rem", "3rem"]}
            >
              Fall Limited Edition Sneakers
            </Text>
            <Text
              color="gray"
              pt={["0rem", "0rem", "0.5rem", "1rem", "2rem"]}
              lineHeight={["0rem", "0rem", "1.3rem", "1.5rem", "1.5rem"]}
            >
              These low-profile sneakers arer your perfect casual wear
              companion. Featuring a double rubber outer sole, they&apos;ll
              withstand everything the weather can offer.
            </Text>
            <HStack pt={["0rem", "0rem", "0rem", "0rem", "1rem"]}>
              <Text
                fontSize={["0rem", "0rem", "1.7rem", "2rem", "2rem"]}
                fontWeight="bold"
              >
                $125.00
              </Text>
              <Box backgroundColor="orange" p="3px">
                <Text fontSize="1rem" fontWeight="bold">
                  50%
                </Text>
              </Box>
            </HStack>
            <Text
              as="s"
              pt={["0rem", "0rem", "0rem", "0.5rem", "0.5rem"]}
              fontWeight="bold"
            >
              $250.00
            </Text>

            <AddToCart />
          </Stack>
        </GridItem>
      </Grid>
    </>
  );
};

export default DesktopBody;
