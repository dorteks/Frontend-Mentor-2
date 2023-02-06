import MobileBody from "./mobilebody";
import { Box } from "@chakra-ui/react";
import DesktopBody from "./desktopbody";

const Body = () => {
  return (
    <Box>
      <MobileBody />
      <DesktopBody />
    </Box>
  );
};

export default Body;
