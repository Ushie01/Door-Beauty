// import { useState, useEffect } from 'react';

// const useCart = () => {
//   const [cart, setCart] = useState([]);

// 	useEffect(() => {
// 		if (typeof window !== 'undefined') {
// 			const cartFromLocalStorage = JSON.parse(
// 				localStorage.getItem('cart') || '[]'
// 			);
// 			setCart(cartFromLocalStorage);
// 		}
// 	}, []);

//   return {cart};
// };

// export default useCart;



// import { useState, useEffect } from 'react';
// import { PRODUCT_DATA } from '../../components/LandingPage/constant/data';

// export const useCart = () => {
//   const [cart, setCart] = useState([]);
//   const [cartLength, setCartLength] = useState(0);

//   useEffect(() => {
//     const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') ?? '[]');
//     setCart(cartFromLocalStorage);
//     setCartLength(cartFromLocalStorage.length);
//   }, []);

//   const addToCart = (productId: number) => {
//     const selectedItem = PRODUCT_DATA.find((item) => item.id === productId);
//     const itemsArray = JSON.parse(localStorage.getItem('cart') ?? '[]');
//     const checkSelected = itemsArray.find((item) => item.id === productId);

//     if (!checkSelected) {
//       itemsArray.push(selectedItem);
//       setCart(itemsArray);
//       setCartLength(itemsArray.length);
//       localStorage.setItem('cart', JSON.stringify(itemsArray));
//       return true; 
//     } else {
//       return false; 
//     }
//   };

//   const removeFromCart = (productId: number) => {
//     const updatedCart = cart.filter((item) => item.id !== productId);
//     setCart(updatedCart);
//     setCartLength(updatedCart.length);
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//   };

//   const clearCart = () => {
//     setCart([]);
//     setCartLength(0);
//     localStorage.removeItem('cart');
//   };

//   return {
//     cart,
//     cartLength,
//     addToCart,
//     removeFromCart,
//     clearCart,
//   };
// };
