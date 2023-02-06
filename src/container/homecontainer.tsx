import Body from "@/component/body";
import Topbar from "@/component/topbar";
import { Stack } from "@chakra-ui/react";
import React from "react";

const Homecontainer = () => {
  return (
    <Stack>
      <Topbar />

      <Body />
    </Stack>
  );
};

export default Homecontainer;
