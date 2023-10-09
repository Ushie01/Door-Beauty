import { useState, useEffect } from "react";

export function useCart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartListString = localStorage.getItem('cart');
    if (cartListString) {
      const cartList = JSON.parse(cartListString);
      setCart(cartList);
    }
  }, []);

  return { cart };
}
