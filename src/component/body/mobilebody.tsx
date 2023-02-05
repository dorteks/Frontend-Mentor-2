import { Box, Img, Stack } from "@chakra-ui/react";
import React from "react";

const MobileBody = () => {
  return (
    <Box>
      <Stack display={["flex", "flex", "none", "none", "none"]}>
        <Box
          boxSize={["full", "450px", "0px", "0px", "0px"]}
          alignSelf="center"
        >
          <Img
            width="full"
            src="/images/image-product-1.jpg"
            // boxSize={["28rem", "28rem", "20rem", "24rem", "28rem"]}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default MobileBody;
