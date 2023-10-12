import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { GenericDelete } from '@heathmont/moon-icons-tw';
import useDeviceType from '@/src/client/shared/hooks/useDeviceType';
import Counter from '@/src/client/shared/Counter';

type Props = {
	id: number;
	name: string;
	photo: StaticImageData | undefined;
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
	handleDelete,
}: Props) => {
	
	const { isMobile } = useDeviceType();

	const priceNumber = parseFloat(price.replace(/[^0-9.-]+/g, ''));
	const totalPrice = priceNumber * quantity;
	const totalPriceString = totalPrice.toFixed(2);


	if (isMobile) {
		return (
			<div>
				<div className='flex flex-col items-center space-y-3 w-full'>
					<div className='flex items-center justify-between w-full'>
						<div className='flex items-center justify-start '>
							{photo?.src && (
								<Image
									src={photo}
									alt='Clarol alt'
									className='h-24 w-24 rounded p-1'
								/>
							)}
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
						<button>
							<GenericDelete
								className='h-10 w-10'
								onClick={() => handleDelete(id)}
							/>
						</button>
					</div>
				</div>
				<hr className='border-gray-300 my-10' />
			</div>
		);
	}

	return (
		<div className='flex items-center justify-between pr-12'>
			<div className='flex items-center justify-start space-x-5'>
				{photo?.src && (
					<Image
						src={photo}
						alt='Clarol alt'
						className='h-24 w-24 border rounded p-1'
					/>
				)}
				<div className='w-44'>
					<p>{name}</p>
				</div>
			</div>
			<p className='text-gray-700'>{`$${totalPriceString}`}</p>
			<Counter
				quantity={quantity}
				id={id}
				incrementCounter={incrementCounter}
				decrementCounter={decrementCounter}
			/>
			<p className='text-gray-700'>{`$${totalPriceString}`}</p>
			<button>
				<GenericDelete
					className='h-10 w-10'
					onClick={() => handleDelete(id)}
				/>
			</button>
		</div>
	);
};

export default Card;
