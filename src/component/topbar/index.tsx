import React from "react";
import { Box } from "@chakra-ui/react";
import MobileTopbar from "./mobiletopbar";
import DesktopTopbar from "./desktoptopbar";

const Topbar = () => {
  return (
    <Box>
      <MobileTopbar />
      <DesktopTopbar />
    </Box>
  );
};

export default Topbar;
