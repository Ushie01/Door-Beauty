import Counter from '@/src/client/shared/Counter';
import { GenericDelete } from '@heathmont/moon-icons-tw';
import Image from 'next/image';
import React from 'react';
import { Props } from '../constant/data';
import useTotalPrice from './useTotalPrice';
import useModalConfirmation from '@/src/client/shared/hooks/useModelConfirmation';

const DeskTopCardView = ({
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
	const { ModalComponent, isButtonClicked } = useModalConfirmation();

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
			<p className='text-gray-700'>{`$${totalPrice}`}</p>
			<Counter
				quantity={quantity}
				id={id}
				incrementCounter={incrementCounter}
				decrementCounter={decrementCounter}
			/>
			<p className='text-gray-700'>{`$${totalPrice}`}</p>
			<ModalComponent
				id={id}
				handleDelete={handleDelete}
				isButtonClicked={isButtonClicked}
			/>
		</div>
	);
};

export default DeskTopCardView;
