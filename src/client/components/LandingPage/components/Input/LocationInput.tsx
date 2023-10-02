import React from 'react';
import Search from '../../../Svg/SearchIcon';
import { Input } from './Input';

const LocationInput = () => {
	return (
		<div className='relative lg:w-[500px] w-full border'>
			<Input
				textColor='text-gray-500'
				bgColor='bg-gray-100'
				placeHolder='Search Store Location...'
			/>
			<div className='absolute inset-y-0 right-0 flex items-center space-x-3 mr-5'>
				<p className='text-gray-500 '>|</p>
				<button>
					<Search iconColor='gray' />
				</button>
			</div>
		</div>
	);
};

export default LocationInput;
