import { Stack, Button, Img, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const AddToCart = () => {
  const [count, setCount] = useState(0);

  const [] = useState();

  return (
    <Stack
      direction={["column", "column", "row", "row", "row"]}
      pt={["2rem", "1.5rem", "1rem", "1.5rem", "2rem"]}
      gap={["5", "5", "0", "0", "0"]}
    >
      <Stack
        direction="row"
        borderColor="white"
        align="center"
        justify="space-between"
        borderRadius="15px"
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
        <Button
          backgroundColor="gray.50"
          disabled={count < 2}
          onClick={() => setCount(count + 1)}
        >
          <Img
            src="/images/icon-plus.svg"
            onClick={() => setCount(count + 1)}
          />
        </Button>
      </Stack>
      <Button
        gap={5}
        fontSize="1rem"
        fontWeight="bold"
        borderColor="white"
        borderRadius="15px"
        backgroundColor="orange"
        onClick={() => console.log("a")}
        height={["60px", "60px", "50px", "60px", "60px"]}
        width={["auto", "auto", "300px", "300px", "300px"]}
      >
        <Img src="/images/icon-cart.svg" />
        Add to Cart
      </Button>{" "}
    </Stack>
  );
};

export default AddToCart;
