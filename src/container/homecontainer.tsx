import Body from "@/component/body";
import Topbar from "@/component/topbar";
import { Divider, Stack } from "@chakra-ui/react";
import React from "react";

const Homecontainer = () => {
  return (
    <Stack>
      <Topbar />
      <Divider />

      <Body />
    </Stack>
  );
};

export default Homecontainer;
