import { Box, HStack, Img, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Checkout from "../checkout";

const DesktopTopbar = () => {
  return (
    <Box
      alignSelf="center"
      pl={["0px", "0px", "20px", "50px", "150px"]}
      pr={["0px", "0px", "20px", "50px", "150px"]}
      display={["none", "none", "block", "block", "block"]}
      bgColor={["purple", "green", "red", "yellow", "blue"]}
    >
      <Stack
        display="flex"
        height="100px"
        direction="row"
        alignItems="center"
        justify="space-between"
      >
        <Stack direction="row">
          <Text fontSize="35px" fontWeight="bold" width="180px">
            sneakers
          </Text>
          <HStack gap={[0, 0, 4, 30, 30]} fontSize="18px">
            <Text>Collections</Text>
            <Text>Men</Text>
            <Text>Women</Text>
            <Text>About</Text>
            <Text>Contact</Text>
          </HStack>
        </Stack>
        <HStack gap={[0, 0, 0, 3, 3]}>
          <Checkout />
          <Img
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
