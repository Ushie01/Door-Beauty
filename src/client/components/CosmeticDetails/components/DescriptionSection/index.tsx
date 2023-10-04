import React, { useEffect } from 'react';
import Toggle from '../Toggle';
import { useComponentRenderer } from '@/src/client/shared/hooks/useComponentRendere';

const Description = () => {
	const { click, setClick, renderComponent } = useComponentRenderer();

	useEffect(() => {
		setClick('PRODUCT DETAILS');
	}, [setClick]);

	return (
		<div className='mt-16 px-16'>
			<Toggle setClick={setClick} />
			<hr className='mt-5' />
			{renderComponent()}
		</div>
	);
};

export default Description;
