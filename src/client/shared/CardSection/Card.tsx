import React from 'react';
import { GenericHeart } from '@heathmont/moon-icons-tw';
import Image, { StaticImageData } from 'next/image';
import { Button } from '@heathmont/moon-core-tw';

type DataProps = {
    photo: StaticImageData;
    name: string;
    type: string;
    price: string;
    color: string;
}

const Card = ({photo, name, type, price, color}: DataProps) => {
	return (
		<div className='flex flex-col h-[500px]  w-80 shadow-lg bg-white border'>
			<div className='flex items-center justify-end w-full h-12'>
				<Button>
					<GenericHeart
						height={34}
						width={34}
						className='mr-2'
					/>
				</Button>
			</div>
			<Image
				src={photo}
				alt='Bigen'
				className='w-full h-64'
			/>
			<div className='flex flex-col justify-end w-full -mt-20border'>
				<div className='flex flex-col font-bold px-3 space-y-1'>
                    <p className='text-black mt-11'>{name}</p>
                    <p className='text-gray-500'>{type}</p>
					<div className='flex items-center justify-between'>
                        <p className='text-orange-400 text-2xl'>{price}</p>
                        <p>{color}</p>
					</div>
				</div>
				<div className='p-3 w-full'>
					<button className='h-11 w-full rounded-3xl bg-orange-400 font-bold text-white'>
						Add to Bag
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
