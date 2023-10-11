import React, { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { GenericDelete } from '@heathmont/moon-icons-tw';
import useDeviceType from '@/src/client/shared/hooks/useDeviceType';
import { useRouter } from 'next/router';
import Counter from '@/src/client/shared/Counter';


type Props = {
	id: number;
	name: string;
	photo: StaticImageData;
	price: string;
	quantity: number;
	incrementCounter: (id: number) => void;
	decrementCounter: (id: number) => void;
	handleDelete: (id: number) => void;
};


const Card = ({
	name,
	photo,
	price,
	id,
	quantity,
	incrementCounter,
	decrementCounter,
	handleDelete
}: Props) => {
	const router = useRouter();
	const { isMobile } = useDeviceType();
	const storedCart = localStorage.getItem('cart');
	const initialCartList: Props[] = storedCart ? JSON.parse(storedCart) : [];
	const [cartList, setCartList] = useState(initialCartList);

	// useEffect(() => {}, [cartList]);
	// const handleDelete = (id: number) => {
	// 	const resMsg = window.confirm(
	// 		'Are you sure you want to delete this item?!'
	// 	);
	// 	if (resMsg === true) {
	// 		const updatedCartList = cartList.filter((item: Props) => item.id !== id);
	// 		setCartList(updatedCartList);
	// 		router.reload();
	// 	}
	// };
	// useEffect(() => {
	// 	localStorage.setItem('cart', JSON.stringify(cartList));
	// }, [cartList]);

	if (isMobile) {
		return (
			<div>
				<div className='flex flex-col items-center space-y-3 w-full'>
					<div className='flex items-center justify-between w-full'>
						<div className='flex items-center justify-start '>
							<Image
								src={photo}
								alt='Clarol alt'
								className='h-24 w-24 rounded p-1'
							/>
							<div className='w-44'>
								<p>{name}</p>
							</div>
						</div>
						<p className='text-gray-700'>{price}</p>
					</div>
					<div className='flex items-center justify-between w-full'>
						<p className='text-gray-700'>{price}</p>
						<Counter
							quantity={quantity}
							id={id}
							incrementCounter={incrementCounter}
							decrementCounter={decrementCounter}
						/>
						<GenericDelete className='h-10 w-10' />
					</div>
				</div>
				<hr className='border-gray-300 my-10' />
			</div>
		);
	}

	return (
		<div className='flex items-center justify-between pr-12'>
			<div className='flex items-center justify-start space-x-5'>
				<Image
					src={photo}
					alt='Clarol alt'
					className='h-24 w-24 border rounded p-1'
				/>
				<div className='w-44'>
					<p>{name}</p>
				</div>
			</div>
			<p className='text-gray-700'>{price}</p>
			<Counter
				quantity={quantity}
				id={id}
				incrementCounter={incrementCounter}
				decrementCounter={decrementCounter}
			/>
			<p className='text-gray-700'>{price}</p>
			<GenericDelete
				className='h-10 w-10'
				onClick={() => handleDelete(id)}
			/>
		</div>
	);
};

export default Card;
