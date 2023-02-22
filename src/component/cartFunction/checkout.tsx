import {
  Box,
  Img,
  Card,
  Text,
  Button,
  HStack,
  VStack,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import { useBetween } from "use-between";
import { useSharableState } from "./useSharableState";

const Checkout = () => {
  const { count, setCount, modal, toggleModal, emptyCart, setEmptyCart } =
    useBetween(useSharableState);

  return (
    <div>
      <Button
        onClick={toggleModal}
        bgColor="inherit"
        _hover={{
          background: "inherit",
        }}
      >
        <Img src="/images/icon-cart.svg" alt="cart icon" />
        <Text ml="5px" pb="10px">
          {count}
        </Text>
      </Button>

      {modal && (
        <Box
          top="0"
          right="3"
          mt="90px"
          zIndex={20}
          width="300px"
          height="auto"
          bgColor="white"
          position="absolute"
          boxShadow="dark-lg"
          borderRadius="10px"
        >
          {emptyCart ? (
            <Box width="full" height="auto">
              <Card
                height="60px"
                fontSize="16px"
                padding="20px 0px 20px 20px  "
              >
                Cart
              </Card>
              <Divider />
              <Card
                height="20vh"
                fontWeight="bold"
                alignItems="center"
                padding="20px 18px"
                justifyContent="center"
              >
                Your cart is empty.
              </Card>
            </Box>
          ) : (
            <Box width="full" height="auto">
              <Card
                height="60px"
                fontSize="16px"
                padding="20px 0px 20px 20px  "
              >
                Cart
              </Card>
              <Card padding="20px 18px ">
                <Box>
                  <HStack
                    gap="5px"
                    margin="auto"
                    height="50px"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Img
                      borderRadius="10px"
                      boxSize="48px"
                      src="/images/image-product-1-thumbnail.jpg"
                    />
                    <VStack alignItems="start">
                      <Text fontSize="13px">Fall Limited Edition Sneakers</Text>
                      <HStack gap="3px">
                        <Text fontSize="14px">$125.00 x {count}</Text>
                        <Text fontWeight="bold" fontSize="15px">
                          ${125 * count}
                        </Text>
                      </HStack>
                    </VStack>
                    <Img
                      onClick={() => {
                        setEmptyCart(true), setCount(0);
                      }}
                      width="18px"
                      boxSize="20px"
                      paddingLeft="2px"
                      alt="delete icon"
                      src="/images/icon-delete.svg"
                    />
                  </HStack>
                </Box>
                <Box paddingTop="20px">
                  <Button width="full" backgroundColor="orange.400">
                    Checkout
                  </Button>
                </Box>
              </Card>
            </Box>
          )}
        </Box>
      )}
    </div>
  );
};

export default Checkout;
