import React from 'react';
import { Carousel } from '@heathmont/moon-core-tw';
import Card from '../CardSection/Card';
import { PRODUCT_DATA } from '../../constant/data';
import subBan from '../../../../../assets/sub-ban.png';
import CustomCarousel from './CustomCarousel';
import Image from 'next/image';

const CarouselItem = () => {
	const renderCarouselItems = () => {
		return PRODUCT_DATA?.map((value, index) => (
			<Carousel.Item key={index}>
				<Card {...value} />
			</Carousel.Item>
		));
	};

	return (
		<div className='p-12 bg-gray-100'>
			<CustomCarousel renderCarouselItems={renderCarouselItems} />

			<Image
				src={subBan}
				alt='Sub Ban'
				className='mt-16'
			/>
		</div>
	);
};

export default CarouselItem;
