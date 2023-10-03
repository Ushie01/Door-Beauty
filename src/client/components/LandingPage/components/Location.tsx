import React from 'react';
import Pointer from './../../../../assets/pointer4.gif';
import Map from './../../../../assets/map1.png';
import Image from 'next/image';
import LocationInput from './Input/FlexWidthInput';

const Location = () => {
	return (
		<div className='flex flex-col items-center justify-center bg-gray-100 lg:pb-8 pb-16'>
			<div className='flex items-center justify-center flex-col -mt-20  bg-gradient-to-r p-5'>
				<h1 className='font-extrabold text-transparent lg:text-9xl text-6xl mt-28 bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-800'>
					Discover Us{' '}
				</h1>
				<p className='lg:text-3xl text-xl text-gray-400'>
					at your door step today
				</p>
				<p className='lg:text-3xl text-xl text-gray-400'>
					and reach out to your peak beauty
				</p>
			</div>
			<Image
				src={Pointer}
				alt='pointer'
				className='border-white h-64 w-64 lg:-mt-10 -mt-16'
			/>
			<div className='lg:px-52 w-full'>
				<Image
					src={Map}
					alt='pointer'
					className='border-white lg:h-[400px] h-[200px] w-full -mt-10 lg:rounded-xl'
				/>
			</div>
			<div className='flex items-center justify-center lg:-mt-10 -mt-10 lg:w-[500px] w-full p-4'>
				<LocationInput placeHolder='Search Store Location...' bgColor='bg-gray-100'/>
			</div>

		</div>
	);
};

export default Location;
