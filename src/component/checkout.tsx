import { Box, Button, Card, HStack, Img, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

const Checkout = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

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
          {0}
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
          position="fixed"
          boxShadow="dark-lg"
          borderRadius="10px"
        >
          <Box width="full" height="auto">
            <Card height="60px" padding="20px 0px 20px 20px  " fontSize="16px">
              Cart
            </Card>
            <Card padding="20px 18px ">
              <Box>
                <HStack
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  margin="auto"
                  height="50px"
                  gap="5px"
                >
                  <Img
                    borderRadius="10px"
                    boxSize="48px"
                    src="/images/image-product-1-thumbnail.jpg"
                  />
                  <VStack alignItems="start">
                    <Text fontSize="13px">Fall Limited Edition Sneakers</Text>
                    <HStack gap="3px">
                      <Text fontSize="14px">$125.00 x {3}</Text>
                      <Text fontWeight="bold" fontSize="15px">
                        ${375.0}
                      </Text>
                    </HStack>
                  </VStack>
                  <Img
                    paddingLeft="2px"
                    boxSize="20px"
                    width="18px"
                    src="/images/icon-delete.svg"
                    alt="delete icon"
                  />
                </HStack>
              </Box>
              <Box paddingTop="20px">
                <Button
                  onClick={toggleModal}
                  width="full"
                  backgroundColor="orange.400"
                >
                  Checkout
                </Button>
              </Box>
            </Card>
          </Box>
        </Box>
      )}
    </div>
  );
};

export default Checkout;
