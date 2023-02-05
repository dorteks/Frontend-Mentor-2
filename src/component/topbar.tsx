import { Box, HStack, Img, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Topbar = () => {
  return (
    <Box
      pl={["11rem", "11rem", "11rem", "0rem", "11rem"]}
      pr={["11rem", "11rem", "11rem", "0rem", "11rem"]}
      minHeight="10vh"
      minWidth="100vw"
      alignSelf="center"
      bgColor={["purple", "green", "red", "yellow", "blue"]}
    >
      <Stack
        direction="row"
        align="center"
        height="100px"
        justify="space-between"
      >
        <Stack direction="row">
          <Text fontSize="35px" fontWeight="bold" width="180px">
            sneakers
          </Text>
          <HStack gap={30} fontSize="18px">
            <Text>Collections</Text>
            <Text>Men</Text>
            <Text>Women</Text>
            <Text>About</Text>
            <Text>Contact</Text>
          </HStack>
        </Stack>
        <HStack gap={10}>
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#69707D"
              fill-rule="nonzero"
            />
          </svg>
          <Img boxSize="60px" src="/images/image-avatar.png" />
        </HStack>
      </Stack>
    </Box>
  );
};

export default Topbar;
