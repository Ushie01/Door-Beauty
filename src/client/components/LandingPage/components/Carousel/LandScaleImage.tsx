import { Carousel } from '@heathmont/moon-core-tw';
import landScaleImage from './../../../../../assets/land2.png';
import landScaleImage2 from './../../../../../assets/ban.png';
import landScaleImage3 from './../../../../../assets/buy.png';
import Image from 'next/image';

const LandScaleImage = () => {
	const CarouselImages = [
		<Image
			key='image-key'
			src={landScaleImage3}
			alt='LandScale'
		/>,
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
			autoSlideDelay={6000}
			scrollTo={1}
			step={1}>
			<Carousel.Reel>
				{CarouselImages?.map((value, index) => (
					<Carousel.Item
						key={index}
						className='w-full lg:h-[450px]'>
						{value}
					</Carousel.Item>
				))}
			</Carousel.Reel>
		</Carousel>
	);
};

export default LandScaleImage;
