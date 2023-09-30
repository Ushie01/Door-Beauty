import React from 'react'
import Card from './Card'
import { Carousel } from '@heathmont/moon-core-tw';
import CustomCarousel from '../Carousel/CustomCarousel';
import { STORE_DATA } from '../../constant/data';
import Image from 'next/image';
import firstImage from './../../../../../assets/banOne.png';
import secondImage from './../../../../../assets/banTwo.png';

const CosmeticsSection = () => {
  	const renderCarouselItems = () => {
			return STORE_DATA?.map((value, index) => (
				<Carousel.Item key={index}>
					<Card {...value} />
				</Carousel.Item>
			));
		};
  return (
		<div className='flex flex-col p-12'>
			<p className='text-2xl text-black font-bold'>
				Any Time, Any <br /> Place, Cosmetics Store
			</p>
			<CustomCarousel renderCarouselItems={renderCarouselItems} />
			<div className='flex items-center justify-between mt-20'>
				<Image
					src={firstImage}
          alt='firstImage'
          className='w-1/2 pr-2'
				/>
				<Image
					src={secondImage}
          alt='firstImage'
          className='w-1/2 pl-2'
				/>
			</div>
		</div>
	);
}

export default CosmeticsSection
