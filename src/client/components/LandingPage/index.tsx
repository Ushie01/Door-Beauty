import React from 'react';
import Header from '../../shared/Header/Header';
import CarouselContainer from './components/Carousel/LandScaleImage';
import CategoryImageSection from './components/CategoryImageSection';
import SeasonSection from './components/SeasonSection';
import Location from './components/Location';
import CarouselItem from './components/Carousel/CarouselItem';

const LandingPage = () => {
	return (
		<div className='bg-white'>
			<Header />
			<CarouselContainer />
			<CategoryImageSection />
			<SeasonSection />
			<CarouselItem />
			<Location />
		</div>
	);
};

export default LandingPage;
