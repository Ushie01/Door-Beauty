import React, { useEffect, useState } from 'react';
import { GenericHeart } from '@heathmont/moon-icons-tw';
import Image, { StaticImageData } from 'next/image';
import { Button } from '@heathmont/moon-core-tw';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PRODUCT_DATA } from '../../components/LandingPage/constant/data';
import { Toast, ToastError } from '../hooks/useToast';
import Link from 'next/link';

type DataProps = {
	id: number;
	photo: StaticImageData;
	name: string;
	type: string;
	price: string;
	color: string;
};

const Card = ({ id, photo, name, type, price, color }: DataProps) => {
	const [cart, setCart] = useState([]);
	const [cartLength, setCartLength] = useState([]);

	useEffect(() => {
		const cartFromLocalStorage = JSON.parse(
			localStorage.getItem('cart') ?? '[]'
		);
		setCartLength(cartFromLocalStorage);
	}, [cart]);

	const handleClick = (value: number) => {
		if (value) {
			const selectedItemObject = PRODUCT_DATA.find((item) => item.id === value);
			let itemsArray = JSON.parse(localStorage.getItem('cart') ?? '[]');
			const checkSelected = itemsArray.find((item: any) => item.id === value);
			if (!checkSelected) {
				itemsArray.push(selectedItemObject);
				setCart(itemsArray);
				localStorage.setItem('cart', JSON.stringify(itemsArray));
				Toast({
					text: '🦄 Item successfully added to cart',
				});
			} else {
				ToastError({
					text: 'Item has been already added to cart',
				});
			}
		}
	};

	return (
		<div
			className={`relative flex flex-col shadow-lg bg-white border overflow-hidden group`}>
			<div>
				<ToastContainer />
			</div>
			<div className='flex items-center justify-end w-full h-12'>
				<Button>
					<GenericHeart
						height={34}
						width={34}
						className='mr-2'
					/>
				</Button>
			</div>
			<Link href='/detail/3'>
				<Image
					src={photo}
					alt='Bigen'
					className='w-full lg:h-[400px] h-[200px]'
				/>
			</Link>
			<div className='absolute flex flex-col bottom-0 right-0 left-0 bg-white bg-opacity-70 text-white lg:px-4 px-1 transform lg:-translate-y-[-60px] -translate-y-[-180px] transition-transform duration-300 group-hover:translate-y-0'>
				<div className='flex flex-col font-bold px-3 space-y-1'>
					<p className='text-black mt-11'>{name}</p>
					<p className='text-gray-500'>{type}</p>
					<div className='flex items-center justify-between lg:pb-0 pb-5'>
						<p className='text-orange-400 text-2xl'>{price}</p>
						<p className='text-black'>{color}</p>
					</div>
				</div>
				<div className='p-3 w-full'>
					<Button
						className='h-11 w-full rounded-xl bg-black font-bold text-white'
						onClick={() => handleClick(id)}>
						Add to Bag
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Card;
