import { Box, Button, HStack, Img, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const MobileBody = () => {
  const [count, setCount] = useState(0);

  return (
    <Stack display={["flex", "flex", "none", "none", "none"]}>
      <Stack
        direction="row"
        pl={["0px", "15%", "0px", "0px", "0px"]}
        pr={["0px", "15%", "0px", "0px", "0px"]}
      >
        <Img
          id="slider-img"
          width="full"
          src="/images/image-product-1.jpg"
          boxSize="auto"
        />
        <Stack
          pr="15px"
          width="full"
          display="flex"
          direction="row"
          position="absolute"
          alignItems="center"
          justifyItems="center"
          // justify="space-between"
        >
          <Box
            boxSize="40px"
            bgColor="white"
            display="grid"
            borderRadius="25px"
            placeContent="center"
          >
            <Img
              onClick={() => console.log("prev button")}
              boxSize="15px"
              alt="previous botton"
              src="/images/icon-previous.svg"
            />
          </Box>
          <Box
            boxSize="40px"
            bgColor="white"
            display="grid"
            borderRadius="25px"
            placeContent="center"
          >
            <Img
              onClick={() => console.log("next button")}
              boxSize="15px"
              alt="next botton"
              src="/images/icon-next.svg"
            />
          </Box>
        </Stack>
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

        <Stack pt="40px" gap={3}>
          <Stack
            width="full"
            height="60px"
            align="center"
            direction="row"
            borderColor="white"
            borderRadius="15px"
            justify="space-between"
            backgroundColor="gray.50"
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
            height="60px"
            width="full"
          >
            <Img src="/images/icon-cart.svg" />
            Add to Cart
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MobileBody;
