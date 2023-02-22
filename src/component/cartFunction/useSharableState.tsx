import { useState } from "react";

export const useSharableState = () => {
  const [count, setCount] = useState(0);

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  const [emptyCart, setEmptyCart] = useState(false);
  const setCart = () => {
    if (count === 0) {
      setEmptyCart(true);
    }

    if (count >= 1) {
      setEmptyCart(false);
    }
  };

  return {
    count,
    modal,
    setCart,
    setCount,
    setModal,
    emptyCart,
    toggleModal,
    setEmptyCart,
  };
};
