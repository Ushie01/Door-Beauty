import { useContext } from 'react';
import { CartContextType, CartContext } from './CartContext';

const useCart = (): CartContextType => {
	const context = useContext(CartContext);
	if (!context) {
		throw new Error('useCart must be used within a CartProvider');
	}
	return context;
};

export default useCart;