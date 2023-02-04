import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Img,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Body = () => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={20}>
      <GridItem minWidth="auto" height="auto">
        <Stack align="center">
          <Img
            borderRadius="20px"
            boxSize="450px"
            src="/images/image-product-1.jpg"
          />
          <HStack gap={9} pt="40px">
            <Img
              borderRadius="15px"
              boxSize="100px"
              src="/images/image-product-1-thumbnail.jpg"
            />
            <Img
              borderRadius="15px"
              boxSize="100px"
              src="/images/image-product-2-thumbnail.jpg"
            />
            <Img
              borderRadius="15px"
              boxSize="100px"
              src="/images/image-product-3-thumbnail.jpg"
            />
            <Img
              borderRadius="15px"
              boxSize="100px"
              src="/images/image-product-4-thumbnail.jpg"
            />
          </HStack>
        </Stack>
      </GridItem>
      <GridItem width="450px" height="auto">
        <Stack mt="4rem">
          <Text letterSpacing={1} fontWeight="bold" color="orange">
            SNEAKER COMPANY
          </Text>
          <Text pt="0.5rem" fontWeight="bold" fontSize="3rem">
            Fall Limited Edition Sneakers
          </Text>
          <Text pt="2rem" color="gray" lineHeight="1.5rem">
            These low-profile sneakers arer your perfect casual wear companion.
            Featuring a double rubber outer sole, they'll withstand everything
            the weather can offer.
          </Text>
          <HStack pt="1rem">
            <Text fontSize="2rem" fontWeight="bold">
              $125.00
            </Text>
            <Box backgroundColor="orange" p="3px">
              <Text fontSize="1rem" fontWeight="bold">
                50%
              </Text>
            </Box>
          </HStack>
          <Text as="s" pt="0.5rem" fontWeight="bold">
            $250.00
          </Text>
          <HStack pt="2rem" gap={10}>
            <Button
              width="180px"
              backgroundColor="gray.50"
              borderColor="white"
              height="60px"
              gap={40}
              borderRadius="15px"
            >
              <Img src="/images/icon-minus.svg" />
              <Text fontSize="1rem">0</Text>
              <Img src="/images/icon-plus.svg" />
            </Button>
            <Button
              width="300px"
              height="60px"
              gap={20}
              borderColor="white"
              borderRadius="15px"
              fontSize="1rem"
              fontWeight="bold"
              backgroundColor="orange"
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

export default Body;
