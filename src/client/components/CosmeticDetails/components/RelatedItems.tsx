import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

type Props = {
	image: StaticImageData;
	name: string;
	value: string;
};

const RelatedItems = ({ image, name, value }: Props) => {
	return (
		<Link href='#'>
			<div className='flex items-center justify-center w-full lg:mt-10 mt-5'>
			<div className='relative rounded-xl border overflow-hidden group'>
				<Image
					src={image}
					alt='Creme One'
					className='lg:w-[350px] lg:h-[350px] w-[250px] h-[250px] '
				/>
				<div className='absolute flex flex-col items-center justify-center bottom-0 right-0 left-0 lg:h-[350px] lg:w-[350px] h-[250px] w-[250px] bg-black bg-opacity-40 text-white p-4 transform lg:translate-y-[350px] translate-y-[250px] transition-transform duration-300 group-hover:translate-y-0'>
					<p className='font-bold'>{name}</p>
					<p className='flex text-center font-semibold'>{value}</p>
				</div>
			</div>
		</div>
		</Link>
	);
};

export default RelatedItems;
