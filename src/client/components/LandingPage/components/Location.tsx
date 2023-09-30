import React from 'react';
import Pointer from './../../../../assets/pointer4.gif';
import Map from './../../../../assets/map1.png';
import Image from 'next/image';
import SearchInput from './Input/SearchInput';
import LocationInput from './Input/LocationInput';


const Location = () => {
	return (
		<div className='flex flex-col items-center justify-center h-min bg-gray-800'>
			<div className='flex items-center justify-center flex-col pl-12 -mt-20 font-extrabold bg-gradient-to-r p-5'>
				<h1 className='font-extrabold text-transparent text-9xl mt-28 bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-800'>
					Discover Us{' '}
				</h1>
				<p className='text-4xl text-[#7B5037]'>at your door step today</p>
				<p className='text-[#7B5037]'>and reach out to your peak beauty</p>
			</div>
			<Image
				src={Pointer}
				alt='pointer'
				className='border-white h-64 w-64 -mt-10'
			/>
			<div className='p-6'>
				<Image
					src={Map}
					alt='pointer'
					className='border-white h-[400px] w-full -mt-10 rounded-xl'
				/>
			</div>
			<div className='-mt-12'>
				<LocationInput />
			</div>
			{/* <Button className='h-16 w-96 shadow-3xl rounded-xl bg-[#8F1616] text-white -mt-6'>
				<p className='text-white text-2xl'>Check Store</p>
			</Button> */}
		</div>
	);
};

export default Location;
