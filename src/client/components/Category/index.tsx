import React from 'react';
import Container from './container/container';
import Header from '../../shared/Header/Header';
import Footer from '../../shared/Footer';
import RouteDisplay from './components/RouteDisplay';
import ControlSection from './components/Filter';
import CategoryItems from './components/CategoryItems';
import useDeviceType from '../../shared/hooks/useDeviceType';
import MobileCategoryView from '../LandingPage/components/CategeoryImageSection/MobileCategoryView';

const CategoryPage = () => {
	// const { isMobile } = useDeviceType();
	// if (isMobile) {
	// 	return <MobileView />;
	// }
	return (
		<Container>
			<Header />
			<RouteDisplay />
			<CategoryItems />
			<Footer />
		</Container>
	);
};

export default CategoryPage;
