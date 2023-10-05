import React from 'react';
import Image, { StaticImageData } from 'next/image';

type Props = {
	image: StaticImageData;
	name: string;
	value: string;
};

const RelatedItems = ({ image, name, value }: Props) => {
	return (
		<div className='flex items-center justify-center w-full mt-10 '>
			<div className='relative rounded-xl border overflow-hidden group'>
				<Image
					src={image}
					alt='Creme One'
					className='w-[350px] h-[350px] '
				/>
				<div className='absolute flex flex-col items-center justify-center bottom-0 right-0 left-0 h-[350px] w-[350px] bg-black bg-opacity-40 text-white p-4 transform translate-y-[350px] transition-transform duration-300 group-hover:translate-y-0'>
					<p className='font-bold'>{name}</p>
					<p className='font-semibold'>{value}</p>
				</div>
			</div>
		</div>
	);
};

export default RelatedItems;
