import { Box, Stack, Card } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Shop = () => {
  // the products for sale
  const items = [
    { id: 1, product: "Sneakers", price: 125 },
    // { id: 2, product: "Phone", price: 340 },
    // { id: 3, product: "Laptop", price: 763 },
  ];

  // cart state
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);

  // add products to cart

  const addToCart = (el) => {
    setCart([...cart, el]);
    console.log(cart, "added to cart");
  };

  const listitems = items.map((el) => {
    return (
      <Stack key={el.id} mb="20px" direction="column">
        <h1>
          {" "}
          {/* {el.product} - $ {el.price} */}$ {el.price}
        </h1>
        <Stack direction="row" gap={3}>
          <button
            type="submit"
            value="Add to cart"
            onClick={() => addToCart(el)}
          >
            add
          </button>
        </Stack>
      </Stack>
    );
  });

  // remove items from cart
  const removeFromCart = (el) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItems) => cartItems.id !== el.id);
    setCart(hardCopy);
  };

  const cartItems = cart.map((el) => {
    return (
      <div key={el.id}>
        {`${el.product}: $${el.price}`}

        <button type="submit" value="remove" onClick={() => removeFromCart(el)}>
          remove
        </button>
      </div>
    );
  });

  // total in cart
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    total();
  }, [cart]);

  const total = () => {
    let totalValue = 0;
    for (let i = 0; i < cart.length; i++) {
      totalValue += cart[i].price;
    }
    setCartTotal(totalValue);
  };

  return (
    <div>
      <h1>Sneaker company</h1>
      <h1>Fall Limited Edition Sneakers</h1>
      <h1>
        These low-profile sneakers arer your perfect casual wear companion.
        Featuring a double rubber outer sole, they'll withstand everything the
        weather can offer.
      </h1>
      <div>{listitems}</div>
      <Card>
        CART
        <div>{cartItems}</div>
        <div>Total: $ {cartTotal}</div>
      </Card>
    </div>
  );
};

export default Shop;
