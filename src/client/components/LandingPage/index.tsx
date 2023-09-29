import React from 'react';
import Header from '../../shared/Header/Header';
import LandScaleImage from './LandScaleImage/LandScaleImage';
import CarouselContainer from './components/Carousel/Carousel';
import CategoryImageSection from './components/CategoryImageSection';
import SeasonSection from './components/Location';

const LandingPage = () => {
    return (
		<div className='bg-white'>
			<Header />
			{/* <LandScaleImage /> */}
			<CarouselContainer />
			<CategoryImageSection />
			<SeasonSection />
		</div>
	);
};

export default LandingPage;
