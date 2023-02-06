import {
  Box,
  Img,
  Grid,
  Text,
  Stack,
  Button,
  HStack,
  GridItem,
} from "@chakra-ui/react";
import React, { useState } from "react";

const DesktopBody = () => {
  const [count, setCount] = useState(0);

  return (
    <Grid
      pt="5rem"
      maxWidth="100vw"
      maxHeight="100vh"
      templateColumns="repeat(2, 1fr)"
      mb={["0px", "0px", "150px", "150px", "150px"]}
      pl={["0px", "0px", "15px", "50px", "150px"]}
      pr={["0px", "0px", "15px", "50px", "150px"]}
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
            src="/images/image-product-1.jpg"
            boxSize={["28rem", "28rem", "20rem", "24rem", "28rem"]}
          />
          <HStack pt="40px">
            <Img
              borderRadius="15px"
              src="/images/image-product-1-thumbnail.jpg"
              boxSize={["0rem", "0rem", "4.6rem", "5.6rem", "6.3rem"]}
            />
            <Img
              borderRadius="15px"
              src="/images/image-product-2-thumbnail.jpg"
              boxSize={["0rem", "0rem", "4.6rem", "5.6rem", "6.3rem"]}
            />
            <Img
              borderRadius="15px"
              src="/images/image-product-3-thumbnail.jpg"
              boxSize={["0rem", "0rem", "4.6rem", "5.6rem", "6.3rem"]}
            />
            <Img
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
            These low-profile sneakers arer your perfect casual wear companion.
            Featuring a double rubber outer sole, they&apos;ll withstand
            everything the weather can offer.
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
          <HStack pt={["0rem", "0rem", "1rem", "1.5rem", "2rem"]}>
            <Stack
              direction="row"
              borderColor="white"
              align="center"
              justify="space-between"
              borderRadius="15px"
              gap={[0, 0, 7, 9, 9]}
              backgroundColor="gray.50"
              height={["60px", "60px", "50px", "60px", "60px"]}
              width={["180px", "180px", "180px", "180px", "180px"]}
            >
              <Button
                backgroundColor="gray.50"
                isDisabled={count === 0}
                onClick={() => setCount(count - 1)}
              >
                <Img src="/images/icon-minus.svg" />
              </Button>
              <Text fontSize="1rem" width="50px" textAlign="center">
                {count}
              </Text>
              <Button
                backgroundColor="gray.50"
                onClick={() => setCount(count + 1)}
              >
                <Img
                  src="/images/icon-plus.svg"
                  onClick={() => setCount(count + 1)}
                />
              </Button>
            </Stack>
            <Button
              gap={5}
              fontSize="1rem"
              fontWeight="bold"
              borderColor="white"
              borderRadius="15px"
              backgroundColor="orange"
              height={["60px", "60px", "50px", "60px", "60px"]}
              width={["300px", "300px", "300px", "300px", "300px"]}
            >
              <Img src="/images/icon-cart.svg" />
              Add to Cart
            </Button>
          </HStack>
        </Stack>
      </GridItem>
    </Grid>
  );
};

export default DesktopBody;
