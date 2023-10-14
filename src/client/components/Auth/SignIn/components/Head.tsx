import React from 'react';
import Image from 'next/image';
import Logo from '../../../../../assets/logo.png'


const Head = ({title}: {title: string}) => {
	return (
		<div>
			<Image
				className='mx-auto h-40 w-auto'
				src={Logo}
				alt='Logo alt'
			/>
			<h1 className='mt-8 text-2xl text-center font-bold'>
				Welcome to <span className='text-lightOrange-50'>Door Beauty</span>{' '}
			</h1>
			<p className='text-center text-md font-bold leading-9 tracking-tight text-gray-900'>
				{title}
			</p>
		</div>
	);
};

export default Head;
