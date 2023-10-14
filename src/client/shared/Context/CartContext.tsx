import { StaticImageData } from 'next/image';
import React, {
	createContext,
	useEffect,
	useRef,
	useState,
} from 'react';
import { PRODUCT_DATA } from '../../components/LandingPage/constant/data';
import { Toast, ToastError } from '../hooks/useToast';


type CartItem = {
	id: number;
	name: string;
	price: string;
	quantity: number;
	photo: StaticImageData;
};


type CartContextType = {
	addToCart: (id: number) => void;
	product: CartItem[];
	subPrice: number;
	incrementCounter: (id: number) => void;
	decrementCounter: (id: number) => void;
	handleDelete: (params: { id: number; isButtonClicked: boolean }) => void;
};


export const CartContext = createContext<CartContextType | undefined>(undefined);

type CartProviderProps = {
	children: React.ReactNode;
};


export const CartProvider: React.FC<CartProviderProps> = ({
	children,
}: CartProviderProps) => {
	const initialRender = useRef(true);
	const [product, setProduct] = useState<CartItem[]>([]);
	const [subPrice, setSubPrice] = useState<number>(0);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const cartFromLocalStorage = JSON.parse(
				localStorage.getItem('cart') || '[]'
			);
			setProduct(cartFromLocalStorage);
		}
	}, []);

	useEffect(() => {
		const sumItems = product.reduce((acc, cur) => {
			const priceNumeric = parseFloat(cur.price.replace(/[^0-9.-]+/g, ''));
			const price = isNaN(priceNumeric) ? 0 : priceNumeric;
			return acc + price * cur.quantity;
		}, 0);
		setSubPrice(parseFloat(sumItems.toFixed(2)));
	}, [product]);

	const incrementCounter = (id: number) => {
		setProduct((prevProducts) =>
			prevProducts.map((item) =>
				item.id === id
					? {
							...item,
							quantity: item.quantity + 1,
					  }
					: item
			)
		);
	};

	const decrementCounter = (id: number) => {
		setProduct((prevProducts) =>
			prevProducts.map((item) =>
				item.id === id
					? {
							...item,
							quantity: Math.max(1, item.quantity - 1),
					  }
					: item
			)
		);
	};

	const addToCart = (id: number) => {
		if (id) {
			const selectedItemObject = PRODUCT_DATA.find((item) => item.id === id);
			if (selectedItemObject) {
				const checkSelected = product.find((item: CartItem) => item.id === id);
				if (!checkSelected) {
					setProduct([...product, selectedItemObject]);
					Toast({
						text: '🦄 Item successfully added to cart',
					});
				} else {
					ToastError({
						text: 'Item has been already added to cart',
					});
				}
			} else {
				console.error(`Item with ID ${id} not found in PRODUCT_DATA`);
			}
		}
	};

	const handleDelete = ({id,isButtonClicked}: {id: number; isButtonClicked: boolean;}) => {
		if (isButtonClicked) {
			console.log(isButtonClicked);
			const updatedCartList = product.filter((item) => item.id !== id);
			console.log(updatedCartList);
			setProduct([...updatedCartList]);
		}
	};

	useEffect(() => {
		if (initialRender.current) {
			initialRender.current = false;
			return;
		}
		window.localStorage.setItem('cart', JSON.stringify(product));
	}, [product]);

	return (
		<CartContext.Provider
			value={{
				addToCart,
				product,
				subPrice,
				incrementCounter,
				decrementCounter,
				handleDelete,
			}}>
			{children}
		</CartContext.Provider>
	);
};
