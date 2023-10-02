import React from 'react';
import Search from '../../../Svg/SearchIcon';
import { Input } from './Input';

const SearchInput = () => {
	return (
		<div className='relative lg:w-[500px] w-96 border'>
			<Input
				textColor='text-gray-900'
				bgColor='bg-white'
				placeHolder='Search Product...'
			/>
			<div className='absolute inset-y-0 right-0 flex items-center space-x-3 mr-5'>
				<select
					id='currency'
					name='currency'
					className='h-full text-right borderless-input bg-transparent font-bold text-black py-0 pl-2 lg:pr-3 pr-1 sm:text-sm'>
					<option>All Categories </option>
					<option>CAD</option>
					<option>EUR</option>
				</select>
				<button className='border-l-2 pl-2 '>
					<Search iconColor='black' />
				</button>
			</div>
		</div>
	);
};

export default SearchInput;
