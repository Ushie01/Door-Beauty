import React from 'react';
import { GenericHeart } from '@heathmont/moon-icons-tw';
import Image, { StaticImageData } from 'next/image';
import { Button } from '@heathmont/moon-core-tw';
import Link from 'next/link';

type DataProps = {
    photo: StaticImageData;
    name: string;
    type: string;
    price: string;
    color: string;
}

const Card = ({photo, name, type, price, color}: DataProps) => {
	return (
		<div className='relative flex flex-col h-[470px]  w-80 shadow-lg bg-white border overflow-hidden group'>
			<div className='flex items-center justify-end w-full h-12'>
				<Button>
					<GenericHeart
						height={34}
						width={34}
						className='mr-2'
					/>
				</Button>
			</div>
			<Link href='#'>
				<Image
					src={photo}
					alt='Bigen'
					className='w-full h-64'
				/>
			</Link>
			<div className='absolute bottom-0 right-0 left-0 bg-white bg-opacity-70 text-white px-4 transform -translate-y-[-60px] transition-transform duration-300 group-hover:translate-y-0'>
				<div className='flex flex-col font-bold px-3 space-y-1'>
					<p className='text-black mt-11'>{name}</p>
					<p className='text-gray-500'>{type}</p>
					<div className='flex items-center justify-between'>
						<p className='text-orange-400 text-2xl'>{price}</p>
						<p className='text-black'>{color}</p>
					</div>
				</div>
				<div className='p-3 w-full'>
					<Button className='h-11 w-full rounded-xl bg-black font-bold text-white'>
						Add to Bag
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Card;
