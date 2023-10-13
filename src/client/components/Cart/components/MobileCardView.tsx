import React from 'react'
import { Props } from '../constant/data';
import { GenericDelete } from '@heathmont/moon-icons-tw';
import Counter from '@/src/client/shared/Counter';
import Image from 'next/image';
import useTotalPrice from './useTotalPrice';

const MobileCardView = ({
	name,
	photo,
	price,
	id,
	quantity,
	incrementCounter,
	decrementCounter,
	handleDelete,
}: Props) => {
    const { totalPrice } = useTotalPrice(price, quantity);
    
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
					<p className='text-gray-700'>{totalPrice}</p>
				</div>
				<div className='flex items-center justify-between w-full'>
					<p className='text-gray-700'>{totalPrice}</p>
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
};

export default MobileCardView