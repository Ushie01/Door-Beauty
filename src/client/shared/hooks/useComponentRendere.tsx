import { useState } from 'react';
import DescriptionSection from '../../components/CosmeticDetails/components/DescriptionSection/Description';
import ReviewSection from '../../components/CosmeticDetails/components/DescriptionSection/Review';
import ProductDetailsSection from '../../components/CosmeticDetails/components/DescriptionSection/ProductDetails';


export const useComponentRenderer = () => {
	const [click, setClick] = useState<string>('PRODUCT DETAILS');

	const renderComponent = () => {
		switch (click) {
			case 'PRODUCT DETAILS':
				return <ProductDetailsSection />;
			case 'REVIEWS':
				return <ReviewSection />;
			case 'DESCRIPTION':
				return <DescriptionSection />;
			default:
				return <div>Page not found</div>;
		}
	};

	return {
		click,
		setClick,
		renderComponent,
	};
};
