import { Box, HStack, Img, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Checkout from "../checkout";

const MobileTopbar = () => {
  const [display, toggleDisplay] = useState("none");

  return (
    <Box
    // bgColor={["white", "yellow", "red", "yellow", "blue"]}
    >
      <Stack
        align="center"
        height="80px"
        direction="row"
        justify="space-between"
        pl={["20px", "15%", "0px", "0px", "0px"]}
        pr={["20px", "15%", "0px", "0px", "0px"]}
        display={["flex", "flex", "none", "none", "none"]}
      >
        <Stack
          align="center"
          direction="row"
          gap={["15px", "20px", "0px", "0px", "0px"]}
        >
          <Img
            alt="open menu button  "
            src="/images/icon-menu.svg"
            onClick={() => toggleDisplay("flex")}
            boxSize={["25px", "30px", "0px", "0px", "0px"]}
          />

          <Box
            top="0"
            left="-3"
            pl="40px"
            zIndex={20}
            width="70vw"
            height="100vh"
            bgColor="white"
            position="fixed"
            overflowY="auto"
            display={display}
            flexDirection="column"
            onClick={() => toggleDisplay("none")}
          >
            <Img
              mt="30px"
              alt="close menu button  "
              src="/images/icon-close.svg"
              boxSize={["20px", "30px", "0px", "0px", "0px"]}
            />

            <Stack fontSize="18px" gap={6} pt="50px" fontWeight="bold">
              <Text>Collections</Text>
              <Text>Men</Text>
              <Text>Women</Text>
              <Text>About</Text>
              <Text>Contact</Text>
            </Stack>
          </Box>

          <Stack direction="row">
            <Text
              fontWeight="bold"
              width={["110px", "180px", "0px", "0px", "0px"]}
              fontSize={["25px", "35px", "0px", "0px", "0px"]}
            >
              sneakers
            </Text>
          </Stack>
        </Stack>

        <HStack>
          <Checkout />
          <Img
            _hover={{
              border: "2px",
              borderColor: "orange",
              borderRadius: "30px",
            }}
            src="/images/image-avatar.png"
            boxSize={["45px", "60px", "0px", "0px", "0px"]}
          />
        </HStack>
      </Stack>
    </Box>
  );
};

export default MobileTopbar;
