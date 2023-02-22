import React from "react";
import { useBetween } from "use-between";
import { useSharableState } from "./useSharableState";
import { Stack, Button, Img, Text } from "@chakra-ui/react";

const AddToCart = () => {
  const { count, setCount, setCart } = useBetween(useSharableState);

  return (
    <Stack
      gap={["5", "5", "0", "0", "0"]}
      pt={["2rem", "1.5rem", "1rem", "1.5rem", "2rem"]}
      direction={["column", "column", "row", "row", "row"]}
    >
      <Stack
        align="center"
        direction="row"
        borderColor="white"
        borderRadius="15px"
        justify="space-between"
        gap={[0, 0, 7, 9, 9]}
        backgroundColor="gray.50"
        height={["60px", "60px", "50px", "60px", "60px"]}
        width={["auto", "auto", "180px", "180px", "180px"]}
      >
        <Button
          backgroundColor="gray.50"
          isDisabled={count === 0}
          onClick={() => setCount(count - 1)}
        >
          <Img src="/images/icon-minus.svg" />
        </Button>
        <Text fontSize="1rem" width="50px" textAlign="center">
          {count}
        </Text>
        <Button backgroundColor="gray.50" onClick={() => setCount(count + 1)}>
          <Img src="/images/icon-plus.svg" />
        </Button>
      </Stack>
      <Button
        gap={5}
        fontSize="1rem"
        fontWeight="bold"
        onClick={setCart}
        borderColor="white"
        borderRadius="15px"
        backgroundColor="orange"
        height={["60px", "60px", "50px", "60px", "60px"]}
        width={["auto", "auto", "300px", "300px", "300px"]}
      >
        <Img src="/images/icon-cart.svg" />
        Add to Cart
      </Button>
    </Stack>
  );
};

export default AddToCart;
