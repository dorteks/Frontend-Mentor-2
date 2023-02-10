import {
  Stack,
  Img,
  Badge,
  Card,
  Divider,
  HStack,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";
import react from "react";

export const Cart = () => {
  const [count, setCount] = react.useState(0);

  const [displayCart, toggleDisplayCart] = react.useState("none");

  return (
    <div>
      <Box>
        <Stack direction="row">
          <Img
            onClick={() => toggleDisplayCart("flex")}
            src="/images/icon-cart.svg"
          />

          <Badge position="relative">{count}</Badge>
        </Stack>
        <Box
          top="0"
          mt="90px"
          zIndex={20}
          bgColor="white"
          position="fixed"
          overflowY="auto"
          boxShadow="dark-lg"
          borderRadius="10px"
          display={displayCart}
          right={["0", "0", "5", "12", "28"]}
          onClick={() => toggleDisplayCart("none")}
          width={["0px", "0px", "350px", "350px", "400px"]}
          height={["230px", "230px", "230px", "230px", "250px"]}
        >
          <Card width="full" height="full" bgColor="white">
            <Text
              pl="20px"
              pr="20px"
              height="60px"
              display="grid"
              fontSize="20px"
              fontWeight="bold"
              placeItems="center"
              alignSelf="baseline"
            >
              Cart
            </Text>
            <Divider />
            <Box
              pl="20px"
              pr="20px"
              height="auto"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {/* <Text fontWeight="bold"> Your cart is empty.</Text> */}
              <Stack width="full">
                <Stack
                  mt="10px"
                  mb="10px"
                  height="60px"
                  direction="row"
                  justify="space-between"
                >
                  <Img
                    boxSize="60px"
                    borderRadius="10px"
                    src="/images/image-product-1-thumbnail.jpg"
                  />
                  <Stack pt="5px" width="70%" height="40px" direction="column">
                    <Text>Fall Limited Edition Sneakers</Text>
                    <HStack>
                      <Text>$125.00 x {count} </Text>
                      <Text fontWeight="bold"> $ {125.0 * count}</Text>
                    </HStack>
                  </Stack>
                  <Img
                    height="18px"
                    boxSize="15px"
                    alignSelf="center"
                    src="/images/icon-delete.svg"
                  />
                </Stack>
                <Button width="full" height="60px" bgColor="orange.300">
                  Checkout
                </Button>
              </Stack>
            </Box>
          </Card>
        </Box>
      </Box>
    </div>
  );
};
