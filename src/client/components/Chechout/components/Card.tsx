import React from 'react';
import Image, { StaticImageData } from 'next/image';
import IncrementButton from '@/src/client/shared/Counter';
import { GenericDelete } from '@heathmont/moon-icons-tw';
import useDeviceType from '@/src/client/shared/hooks/useDeviceType';

type Props = {
	name: string;
	photo: StaticImageData;
	price: string;
};

const Card = ({ name, photo, price }: Props) => {
	const { isMobile } = useDeviceType();

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
						<IncrementButton />
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
			<IncrementButton />
			<p className='text-gray-700'>{price}</p>
			<GenericDelete className='h-10 w-10' />
		</div>
	);
};

export default Card;
