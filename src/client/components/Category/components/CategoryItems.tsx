import React from 'react';
import Filter from './Filter';
import { PRODUCT_DATA } from '../../LandingPage/constant/data';
import Card from '@/src/client/shared/CardSection/Card';
import useDeviceType from '@/src/client/shared/hooks/useDeviceType';


const CategoryItems = () => {
	const { isMobile } = useDeviceType();
	return (
		<div className='flex lg:p-12 p-0'>
			{isMobile === false && (
				<div className='lg:w-3/10'>
					<Filter />
				</div>
			)}
			<div className='flex flex-col  items-center justify-center w-full lg:mt-0 mt-4 lg:space-y-0 space-y-6 lg:grid lg:grid-cols-3 lg:gap-3 lg:pl-16 pl-0'>
				{PRODUCT_DATA?.map((value, index) => (
					<div
						key={index}>
						<Card {...value} />
					</div>
				))}
			</div>
		</div>
	);
};

export default CategoryItems;
