import { Carousel } from '@heathmont/moon-core-tw';
import {
	ControlsChevronLeftSmall,
	ControlsChevronRightSmall,
} from '@heathmont/moon-icons-tw';
import Card from '../CardSection/Card';
import landScaleImage from '../../../../../assets/Bigen Oz.jpg';
import landScaleImage2 from '../../../../../assets/Clarol Soy.jpg';
import Image from 'next/image';
import { DATA } from '../../constant/data';


const CarouselItem = () => {
	// const items = Array.from({ length: 25 }, (index) => index);
	return (
		<div className='p-12'>
			<Carousel
				autoSlideDelay={10000}
				step={1}
				scrollTo={1}>
				<Carousel.LeftArrow className='bg-gray-500'>
					<ControlsChevronLeftSmall />
				</Carousel.LeftArrow>
				<Carousel.Reel>
                    {DATA?.map((value, index) => (
                        <Carousel.Item key={index}>
                            <Card
                                photo={value.photo}
                                name={value.name}
                                type={value.type}
                                color={value.color}
                                price={value.price}

                            />
                        </Carousel.Item>
					))}
				</Carousel.Reel>
				<Carousel.RightArrow className='bg-gray-500'>
					<ControlsChevronRightSmall />
				</Carousel.RightArrow>
			</Carousel>
		</div>
	);
};

export default CarouselItem;
