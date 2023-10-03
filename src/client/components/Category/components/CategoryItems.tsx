import React from 'react';
import ControlSection from './Filter';
import { PRODUCT_DATA } from '../../LandingPage/constant/data';
import Card from '@/src/client/shared/CardSection/Card';

const CategoryItems = () => {
	return (
		<div className='flex p-12'>
			<div className='w-2/10'>
				<ControlSection />
			</div>
			{/* <div className='grid grid-cols-3 gap-3 pl-12'>
				{PRODUCT_DATA?.map((value, index) => (
					<div key={index}>
						<Card {...value} />
					</div>
				))}
			</div> */}
		</div>
	);
};

export default CategoryItems;
