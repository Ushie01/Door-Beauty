import React from 'react';
import Card from './Card';
import { Button } from '@heathmont/moon-core-tw';
import Link from 'next/link';

const CardSection = () => {
	return (
		<div className='flex lg:flex-row flex-col lg:px-16 lg:py-12 w-full'>
			<div className='flex flex-col lg:w-9/12 w-full p-4'>
				<h1 className='text-bold'>
					<span className='text-black font-bold text-xl'>Card</span> (3)
				</h1>
				<div className='mt-8 space-y-6'>
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
				<Link
					href='#'
					className='text-black font-bold text-xl underline mt-16'>
					Continue Shopping
				</Link>
			</div>

			<div className='flex flex-col lg:w-3/12 w-full h-72 mt-5 space-y-5 bg-gray-200 lg:px-9 px-4 py-7 lg:rounded-lg rounded-none'>
				<p className='text-black font-bold text-xl'>Cart Summary</p>
				<div className='flex items-center justify-between text-gray-500'>
					<p>Sub Total</p>
					<p>$50.00</p>
				</div>
				<hr className='w-full border-gray-400' />
				<div className='flex items-center justify-between text-gray-500'>
					<p>Grand Price</p>
					<p>$50.00</p>
				</div>
				<Button className='flex items-center justify-center w-full text-white bg-black py-7 rounded-xl font-bold '>
					CHECKOUT
				</Button>
			</div>
		</div>
	);
};

export default CardSection;
