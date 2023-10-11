import { createContext } from 'react';

export type CartContextType = {
	cart: any[];
	cartLength: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export default CartContext;
