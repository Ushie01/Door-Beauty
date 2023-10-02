import React from 'react';
import Header from '../../shared/Header/Header';
import CarouselContainer from './components/Carousel/LandScaleImage';
import CategoryImageSection from './components/CategeoryImageSection/CategoryImageSection';
import SeasonSection from './components/SeasonSection';
import Location from './components/Location';
import CarouselItem from './components/Carousel/ProductCarousel';
import CosmeticsSection from './components/CosmeticsSection/CosmeticsSection';
import DoorBeautyLinks from './components/DoorBeautyLinks/DoorBeautyLinks';
import Footer from '../../shared/Footer';

const LandingPage = () => {
	return (
		<div className='bg-white'>
			<Header />
			<CarouselContainer />
			<CategoryImageSection />
			<SeasonSection />
			<CarouselItem />
			<Location />
			<CosmeticsSection />
			<DoorBeautyLinks />
			{/* <Footer /> */}
		</div>
	);
};

export default LandingPage;
