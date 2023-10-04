import React from 'react';
import Container from './container/container';
import Header from '../../shared/Header/Header';
import Footer from '../../shared/Footer';
import RouteDisplay from './components/RouteDisplay';
import CategoryItems from './components/CategoryItems';

const CategoryPage = () => {
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
