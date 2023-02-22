import { Box, HStack, Img, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Checkout from "../cartFunction/checkout";

const DesktopTopbar = () => {
  return (
    <Box
      height="auto"
      alignSelf="center"
      pl={["0px", "0px", "20px", "50px", "150px"]}
      pr={["0px", "0px", "20px", "50px", "150px"]}
      display={["none", "none", "block", "block", "block"]}
      // bgColor={["purple", "green", "red", "yellow", "blue"]}
    >
      <Stack
        display="flex"
        direction="row"
        alignItems="center"
        justify="space-between"
      >
        <Stack direction="row" align="center">
          <Text fontSize="35px" fontWeight="bold" width="180px">
            sneakers
          </Text>
          <Stack
            direction="row"
            height="80px"
            fontSize="18px"
            gap={[0, 0, 4, 30, 30]}
          >
            <Text
              textAlign="center"
              padding="29px 0px "
              _hover={{
                borderBottom: "3px solid orange",
              }}
            >
              Collections
            </Text>
            <Text
              textAlign="center"
              padding="29px 0px "
              _hover={{
                borderBottom: "3px solid orange",
              }}
            >
              Men
            </Text>
            <Text
              textAlign="center"
              padding="29px 0px "
              _hover={{
                borderBottom: "3px solid orange",
              }}
            >
              Women
            </Text>
            <Text
              textAlign="center"
              padding="29px 0px "
              _hover={{
                borderBottom: "3px solid orange",
              }}
            >
              About
            </Text>
            <Text
              textAlign="center"
              width="70px"
              padding="29px 0px "
              _hover={{
                borderBottom: "3px solid orange",
              }}
            >
              Contact
            </Text>
          </Stack>
        </Stack>
        <HStack gap={[0, 0, 0, 3, 3]}>
          <Checkout />
          <Img
            _hover={{
              border: "2px",
              borderColor: "orange",
              borderRadius: "30px",
            }}
            boxSize="60px"
            src="/images/image-avatar.png"
            alt="user avatar"
          />
        </HStack>
      </Stack>
    </Box>
  );
};

export default DesktopTopbar;
