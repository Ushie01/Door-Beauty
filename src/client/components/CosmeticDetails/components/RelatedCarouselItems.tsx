import React from 'react';
import RelatedItems from './RelatedItems';
import { RELATED_ITEMS_DATA } from '../constant/data';
import { Carousel } from '@heathmont/moon-core-tw';
import CustomCarousel from '../../LandingPage/components/Carousel/CustomCarousel';

const RelatedCarouselItems = () => {
	const renderCarouselItems = () => {
		return RELATED_ITEMS_DATA?.map((value, index) => (
			<Carousel.Item key={index}>
				<RelatedItems {...value} />
			</Carousel.Item>
		));
	};
	return (
		<div className='flex flex-col items-center justify-center lg:px-12 lg:mt-20 px-4 mt-12'>
			<p className='lg:text-4xl text-2xl text-black font-bold'>Related Products</p>
			<CustomCarousel renderCarouselItems={renderCarouselItems} />
		</div>
	);
};

export default RelatedCarouselItems;
