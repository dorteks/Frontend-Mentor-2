import { Box, Grid, GridItem, HStack, Img, Stack } from "@chakra-ui/react";
import React from "react";

const Body = () => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={20}>
      <GridItem width="100%" height="auto">
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
      <GridItem width="100%" height="auto" bgColor="green">
        Body
      </GridItem>
    </Grid>
  );
};

export default Body;
