import React from 'react';
import VendorSignUp from '../../../Auth/Vendor/VendorSignUp';
import DiscountAndServings from './DiscountAndServings';
import LookingForSomething from './LookingForSomething';
import DriverSignUp from '../../../Auth/Driver/DriverSignUp';

export const RenderComponent = ({ index }: { index: number }) => {
	let componentToRender;

	if (index === 0) {
		componentToRender = <DriverSignUp />;
	} else if (index === 1) {
		componentToRender = <VendorSignUp />;
	} else if (index === 2) {
		componentToRender = <DiscountAndServings />;
	} else {
		componentToRender = <LookingForSomething />;
	}

	return <div className='p-4'>{componentToRender}</div>;
};
