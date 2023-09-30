import React from 'react';
import { ITEMS } from '../constant/data';
import Image from 'next/image';
import Link from 'next/link';

const CategoryImageSection = () => {
	return (
		<div className='flex items-center justify-between p-4 mt-8'>
			{ITEMS.map((item, v) => (
				<>
					<Link
						href='#'
						className='relative border rounded text-orange-400 hover:text-white'>
						<Image
							src={item.image}
							alt='item'
							key={v}
							className='h-52 w-52 p-2'
						/>

						<div className='absolute bg-black h-52 w-52 -mt-52 opacity-10 '></div>
						<p className='absolute text-4xl font-bold -mt-16 p-4 '>
							DB <span className='text-2xl font-bold'>{item.name}</span>
						</p>
					</Link>
				</>
			))}
			<div className='flex flex-col items-center justify-center hover:bg-black h-52 w-52 border rounded p-2 bg-[#8F1616]'>
				<p className='text-6xl font-bold text-white'>SALE</p>
			</div>
		</div>
	);
};

export default CategoryImageSection;
