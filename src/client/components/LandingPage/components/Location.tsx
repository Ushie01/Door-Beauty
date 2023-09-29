import React from 'react';
import Pointer from './../../../../assets/pointer.gif';
import Image from 'next/image';
import { Button } from '@heathmont/moon-core-tw';

const Location = () => {
	return (
		<div className='flex flex-col items-center justify-center mt-24 '>
			<div className='flex items-center justify-center flex-col pl-12 -mt-20 font-extrabold bg-gradient-to-r p-5'>
				<h1 className='font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-800'>
					Discover Us{' '}
				</h1>
				<p className='text-4xl text-[#7B5037]'>at your door step today</p>
				<p className='text-[#7B5037]'>and reach out to your peak beauty</p>
			</div>
			<Image
				src={Pointer}
				alt='pointer'
				className='-mt-3'
			/>
			<Button className='h-16 w-52 shadow-xl text-3xl rounded-xl bg-[#8F1616] text-white -mt-6'>
				Check Store
			</Button>
		</div>
	);
};

export default Location;
