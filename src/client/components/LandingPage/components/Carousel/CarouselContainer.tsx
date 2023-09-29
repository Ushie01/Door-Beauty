import { Carousel } from '@heathmont/moon-core-tw';
import landScaleImage from './../../../../../assets/land2.png';
import landScaleImage2 from './../../../../../assets/ban.png';
import Image from 'next/image';

const CarouselContainer = () => {
	const CarouselImages = [
		<Image
			key='image-key'
			src={landScaleImage2}
			alt='LandScale'
		/>,
		<Image
			key='image-key'
			src={landScaleImage}
			alt='LandScale'
		/>,
	];

	return (
		<Carousel
			autoSlideDelay={5000}
			scrollTo={1}
			step={1}>
			<Carousel.Reel>
				{CarouselImages?.map((value, index) => (
					<Carousel.Item
						key={index}
						className='w-full h-[450px]'>
						{value}
					</Carousel.Item>
				))}
			</Carousel.Reel>
		</Carousel>
	);
};

export default CarouselContainer;
