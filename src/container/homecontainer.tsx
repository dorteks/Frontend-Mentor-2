import Body from "@/component/body";
import Topbar from "@/component/topbar";
import { Box, Divider } from "@chakra-ui/react";
import React from "react";

const Homecontainer = () => {
  return (
    <Box pl="350px" pr="350px">
      <Topbar />
      <Divider
        orientation="horizontal"
        color="black"
        borderRadius="1px"
        mb="100px"
      />
      <Body />
    </Box>
  );
};

export default Homecontainer;
