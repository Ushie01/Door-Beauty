import React from 'react'
import Search from '../../Svg/SearchIcon';


const SearchInput = () => {
  return (
		<div className='relative w-[500px] border'>
			<input
				type='text'
				name='price'
				id='price'
				className='block w-full py-1.5 pl-7 font-bold pr-20 text-gray-900 h-12 placeholder:text-gray-400 sm:text-sm'
				placeholder='Search Project...'
			/>
			<div className='absolute inset-y-0 right-0 flex items-center space-x-3 mr-5'>
				<select
					id='currency'
					name='currency'
					className='h-full text-right borderless-input bg-transparent font-bold text-black py-0 pl-2 pr-7 sm:text-sm'>
					<option>All Categories </option>
					<option>CAD</option>
					<option>EUR</option>
				</select>
				<p className='text-black'>|</p>
				<button>
					<Search />
				</button>
			</div>
		</div>
	);
}

export default SearchInput