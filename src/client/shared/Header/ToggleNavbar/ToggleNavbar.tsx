import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { DATA } from '../constants/data';
import DropDown from '../../DropDown/DropDown';

type Data = {
	id: string;
	name: string;
	data?: { name: string }[];
};

const ToggleNavbar = () => {
	const [link, setLink] = useState<string | []>('HOME');

	const handleClick = (item: Data) => {
		setLink(item.name);
	};

	useEffect(() => {
		setLink('HOME');
	}, []);

	return (
		<ul className='flex items-end justify-end text-black ml-44 space-x-12 font-bold'>
			{DATA.map((value) => (
				<React.Fragment key={value.id}>
					<Link
						href='#'
						onClick={() => handleClick(value)}>
						<div className='flex flex-col items-center justify-center space-y-3'>
							<div>
								{value.data
									? value.data && (
											<DropDown
												title={value.name}
												arrayTitle={value.data}
												setLink={setLink}
											/>
									  )
									: value.name}
							</div>
							<hr
								className={`h-1 w-full ${
									link === value.name ? 'bg-orange-500' : ''
								}`}
							/>
						</div>
					</Link>
				</React.Fragment>
			))}
		</ul>
	);
};

export default ToggleNavbar;
