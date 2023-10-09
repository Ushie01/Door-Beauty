import React, { useState } from 'react';
import { Carousel } from '@heathmont/moon-core-tw';
import { PRODUCT_DATA } from '../../constant/data';
import subBan from '../../../../../assets/sub-ban.png';
import CustomCarousel from './CustomCarousel';
import Image from 'next/image';
import Card from '@/src/client/shared/CardSection/Card';


const CarouselItem = () => {
	const renderCarouselItems = () => {
		return PRODUCT_DATA?.map((value, index) => (
			<Carousel.Item
				key={index}>
				<Card {...value}  />
			</Carousel.Item>
		));
	};

	return (
		<div className='lg:p-12 p-4 bg-gray-100'>
			<div className='mt-24'>
				<CustomCarousel renderCarouselItems={renderCarouselItems} />
				<Image
					src={subBan}
					alt='Sub Ban'
					className='lg:mt-32 mt-12 lg:h-0 h-20'
				/>
			</div>
		</div>
	);
};

export default CarouselItem;
