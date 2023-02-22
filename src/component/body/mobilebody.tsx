import React from "react";
import SliderPicture from "@/component/slider";
import AddToCart from "../cartFunction/addToCart";
import { Box, HStack, Stack, Text } from "@chakra-ui/react";

const MobileBody = () => {
  return (
    <Stack display={["flex", "flex", "none", "none", "none"]}>
      <Stack
        direction="row"
        pl={["0px", "15%", "0px", "0px", "0px"]}
        pr={["0px", "15%", "0px", "0px", "0px"]}
      >
        <SliderPicture />
      </Stack>

      <Stack
        pl={["20px", "20%", "0px", "0px", "0px"]}
        pr={["20px", "20%", "0px", "0px", "0px"]}
        pt="20px"
      >
        <Text letterSpacing={1} fontWeight="bold" color="orange">
          SNEAKER COMPANY
        </Text>
        <Text
          fontWeight="bold"
          fontSize={["2rem", "2rem", "0rem", "0rem", "0rem"]}
        >
          Fall Limited Edition Sneakers
        </Text>
        <Text
          color="gray"
          pt={["1rem", "1rem", "0rem", "0rem", "0rem"]}
          lineHeight={["1.4rem", "1.4rem", "0rem", "0rem", "0rem"]}
        >
          These low-profile sneakers arer your perfect casual wear companion.
          Featuring a durable rubber outer sole, they&apos;ll withstand
          everything the weather can offer.
        </Text>
        <HStack
          justify="space-between"
          pt={["1rem", "1rem", "0rem", "0rem", "1rem"]}
        >
          <Stack direction="row" gap={2} align="center">
            <Text
              fontSize={["2rem", "2rem", "0rem", "0rem", "0rem"]}
              fontWeight="bold"
            >
              $125.00
            </Text>
            <Box backgroundColor="orange" p="3px">
              <Text fontSize="1rem" fontWeight="bold">
                50%
              </Text>
            </Box>
          </Stack>
          <Text
            as="s"
            pt={["0rem", "0rem", "0rem", "0.5rem", "0.5rem"]}
            fontWeight="bold"
          >
            $250.00
          </Text>
        </HStack>

        <AddToCart />
      </Stack>
    </Stack>
  );
};

export default MobileBody;
