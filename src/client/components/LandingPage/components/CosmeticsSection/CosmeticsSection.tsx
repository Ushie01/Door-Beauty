import React from 'react';
import Card from './Card';
import { Carousel } from '@heathmont/moon-core-tw';
import CustomCarousel from '../Carousel/CustomCarousel';
import { STORE_DATA } from '../../constant/data';
import Image from 'next/image';
import firstImage from './../../../../../assets/banOne.png';
import secondImage from './../../../../../assets/banTwo.png';
import { Tag } from '@/src/client/shared/Tag';
import IntersectionComponent from '@/src/client/shared/IntersectionObserver';

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
			<div className='flex lg:flex-row flex-col items-center justify-between lg:mt-20 mt-10 w-full'>
				<IntersectionComponent
					intersection={
						<Image
							src={firstImage}
							alt='firstImage'
							className='lg:pr-2'
						/>
					}
					verticalTransition='translate-y-[-200px]'
				/>

				<IntersectionComponent
					intersection={
						<Image
							src={secondImage}
							alt='firstImage'
							className='lg:pl-2 lg:pt-0 pt-7'
						/>
					}
					verticalTransition='translate-y-[200px]'
				/>
			</div>
			<hr className='mt-20 w-full' />
		</div>
	);
};

export default CosmeticsSection;
