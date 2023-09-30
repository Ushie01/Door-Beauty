import React from 'react';
import { Carousel } from '@heathmont/moon-core-tw';
import {
	ControlsChevronLeftSmall,
	ControlsChevronRightSmall,
} from '@heathmont/moon-icons-tw';
import Card from '../CardSection/Card';
import { DATA } from '../../constant/data';

const CarouselItem = () => {
	const renderCarouselItems = () => {
		return DATA?.map((value, index) => (
			<Carousel.Item key={index}>
				<Card {...value} />
			</Carousel.Item>
		));
	};

	return (
		<div className='p-12 bg-gray-100'>
			<Carousel
				autoSlideDelay={10000}
				step={1}
				scrollTo={1}>
				<Carousel.LeftArrow className='bg-gray-500'>
					<ControlsChevronLeftSmall color='white' />
				</Carousel.LeftArrow>
				<Carousel.Reel>{renderCarouselItems()}</Carousel.Reel>
				<Carousel.RightArrow className='bg-gray-500'>
					<ControlsChevronRightSmall color='white' />
				</Carousel.RightArrow>
			</Carousel>
		</div>
	);
};

export default CarouselItem;
