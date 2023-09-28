import Image from 'next/image';
import React from 'react';
import Logo from '../../../../assets/logo.png';


const Admin = () => {
	return (
		<div className='flex items-center justify-between p-10 bg-gray-900 text-white border-2 border-black'>
			<Image
				src={Logo}
				alt='Logo'
			/>
			<div className='flex flex-col items-center justify-center bg-gray-500  border-2 border-black'>
				<h1 className='text-black text-4xl font-bold p-24'>Hello word</h1>
			</div>
		</div>
	);
};

export default Admin;
