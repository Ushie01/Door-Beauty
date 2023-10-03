import React from 'react';
import { Carousel } from '@heathmont/moon-core-tw';
import {
	ControlsChevronLeftSmall,
	ControlsChevronRightSmall,
} from '@heathmont/moon-icons-tw';

type Props = {
	renderCarouselItems: () => React.ReactNode;
};

const CustomCarousel = ({ renderCarouselItems }: Props) => {
	return (
		<Carousel>
			<Carousel.LeftArrow className='bg-gray-500'>
				<ControlsChevronLeftSmall color='white' />
			</Carousel.LeftArrow>
			<Carousel.Reel>{renderCarouselItems()}</Carousel.Reel>
			<Carousel.RightArrow className='bg-gray-500'>
				<ControlsChevronRightSmall color='white' />
			</Carousel.RightArrow>
		</Carousel>
	);
};

export default CustomCarousel;
