import { Tag } from '@/src/client/shared/Tag';
import React from 'react';

const SeasonSection = () => {
	return (
		<div className='flex flex-col text-black mt-10 bg-gray-100'>
			<div className='lg:p-12 p-4 lg:mt-0 mt-10'>
				<Tag text='Our Product' />
			</div>
			<div className='flex flex-col items-center justify-center mt-20'>
				<p className=''>THE SEASONS KEY CUSMETICS </p>
				<p className='text-4xl font-bold'>SHOP THE LATEST</p>
			</div>
		</div>
	);
};

export default SeasonSection;
