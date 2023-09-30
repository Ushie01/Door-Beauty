import React from 'react';
import Search from '../../../Svg/SearchIcon';
import { Input } from './Input';

const LocationInput = () => {
	return (
		<div className='relative w-[500px] border'>
			<Input
				textColor='text-white'
				bgColor='bg-gray-800'
				placeHolder='Search Store Location...'
			/>
			<div className='absolute inset-y-0 right-0 flex items-center space-x-3 mr-5'>
				<p className='text-white '>|</p>
				<button>
					<Search iconColor='white' />
				</button>
			</div>
		</div>
	);
};

export default LocationInput;
