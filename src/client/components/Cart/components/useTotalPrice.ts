import { useState, useEffect } from 'react';

type TotalPriceState = {
  totalPrice: string | null;
}

const useTotalPrice = (price: string, quantity: number): TotalPriceState => {
  const [totalPrice, setTotalPrice] = useState<string | null>(null);

  useEffect(() => {
    const priceNumber: number = parseFloat(price.replace(/[^0-9.-]+/g, ''));
    const calculatedTotalPrice: number = priceNumber * quantity;
    const formattedTotalPrice: string = calculatedTotalPrice.toFixed(2);
    setTotalPrice(formattedTotalPrice);
  }, [price, quantity]);

  return { totalPrice };
};

export default useTotalPrice;
