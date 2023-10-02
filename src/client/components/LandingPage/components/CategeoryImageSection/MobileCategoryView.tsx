import React from 'react';
import { ITEMS } from '../../constant/data';
import Link from 'next/link';
import Image from 'next/image';

const MobileCategoryView = () => {
	return (
		<div className='grid grid-cols-2 gap-4 p-4 overflow-x-auto w-full'>
			{ITEMS.map((item, v) => (
				<Link
					key={v}
					href='#'
					className='border rounded w-full text-orange-400 hover:text-white'>
					<Image
						src={item.image}
						alt='item'
						className='h-48 w-full p-2'
					/>

					<div className='absolute bg-black h-16 w-40 -mt-16 opacity-10 '></div>
					<p className='absolute text-4xl font-bold -mt-16 p-4'>
						DB  <span className='text-2xl font-bold'>{item.name}</span>
					</p>
				</Link>
				// </th>
			))}
			<div className='flex flex-col items-center justify-center hover:bg-black h-48 w-full border rounded p-2 bg-[#8F1616]'>
				<p className='text-6xl font-bold text-white'>SALE</p>
			</div>
		</div>
	);
};

export default MobileCategoryView;
