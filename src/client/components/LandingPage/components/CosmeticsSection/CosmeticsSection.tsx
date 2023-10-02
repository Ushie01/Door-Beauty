import React from 'react';
import Card from './Card';
import { Carousel } from '@heathmont/moon-core-tw';
import CustomCarousel from '../Carousel/CustomCarousel';
import { STORE_DATA } from '../../constant/data';
import Image from 'next/image';
import firstImage from './../../../../../assets/banOne.png';
import secondImage from './../../../../../assets/banTwo.png';
import { Tag } from '@/src/client/shared/Tag';

const CosmeticsSection = () => {
	const renderCarouselItems = () => {
		return STORE_DATA?.map((value, index) => (
			<Carousel.Item key={index}>
				<Card {...value} />
			</Carousel.Item>
		));
	};
	return (
		<div className='flex flex-col lg:p-12 p-4'>
			<div className='lg:mt-0 mt-5'>
				<Tag text='Our Store' />
			</div>
			<p className='text-2xl text-black font-bold pt-5'>
				Any Time, Any <br /> Place, Cosmetics Store
			</p>
			<CustomCarousel renderCarouselItems={renderCarouselItems} />
			<div className='flex lg:flex-row flex-col items-center justify-between lg:mt-20 mt-10'>
				<Image
					src={firstImage}
					alt='firstImage'
					className='lg:w-1/2 lg:pr-2'
				/>
				<Image
					src={secondImage}
					alt='firstImage'
					className='lg:w-1/2 lg:pl-2 lg:pt-0 pt-7'
				/>
			</div>
			<hr className='mt-20 w-full' />
		</div>
	);
};

export default CosmeticsSection;
