import React from 'react';
import DetailContainer from './container/DetailContainer';
import ImageSection from './components/ImageSection/ImageSection';
import Header from '../../shared/Header/Header';
import Footer from '../../shared/Footer';
import DescriptionSection from './components/DescriptionSection';
import RelatedCarouselItems from './components/RelatedCarouselItems';

const CosmeticDetail = () => {
	return (
		<DetailContainer>
			<Header />
			<ImageSection />
			<DescriptionSection />
			<RelatedCarouselItems />
			<Footer />
		</DetailContainer>
	);
};

export default CosmeticDetail;
