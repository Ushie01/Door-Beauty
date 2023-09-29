import React from 'react';
import Header from '../../shared/Header/Header';
import LandScaleImage from './LandScaleImage/LandScaleImage';
import CarouselContainer from './components/Carousel/Carousel';

const LandingPage = () => {
    return (
		<div className='bg-white'>
			<Header />
			{/* <LandScaleImage /> */}
			<CarouselContainer />
			
		</div>
	);
};

export default LandingPage;
