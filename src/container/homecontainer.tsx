import Body from "@/component/body";
import Topbar from "@/component/topbar";
import { Box, Divider, Stack } from "@chakra-ui/react";
import React from "react";

const Homecontainer = () => {
  return (
    <Stack display="grid" placeContent="center">
      <Topbar />
      <Body />
    </Stack>
  );
};

export default Homecontainer;
