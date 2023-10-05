import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { DETAIL_ROUTE } from '../constant/data';

const Toggle = ({ setClick }: { setClick: (value: string) => void }) => {
	const [link, setLink] = useState<string>('PRODUCT DETAILS');

	const handleClick = (value: string) => {
		setLink(value);
		setClick(value);
	};

	useEffect(() => {
		setLink('PRODUCT DETAILS');
	}, []);

	return (
		<div className='flex items-center justify-center space-x-8'>
			{DETAIL_ROUTE.map((value, index) => (
				<React.Fragment key={index}>
					<button
						onClick={() => handleClick(value)}
						className={`text-black font-bold text-md ${
							link === value ? 'text-black' : 'text-gray-300'
						}`}>
						{value}
					</button>
				</React.Fragment>
			))}
		</div>
	);
};

export default Toggle;
