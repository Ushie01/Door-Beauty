import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { DATA } from '../constants/data';
import DropDown from '../../Dropdown/Dropdown';

type Data = {
	id: string;
	name: string;
	data?: { name: string }[];
};

const ToggleNavbar = () => {
	const [link, setLink] = useState<string | []>('HOME');
	console.log(link);

	const handleClick = (item: Data) => {
		setLink(item.name);
	};

	useEffect(() => {
		setLink('HOME');
	}, []);

	return (
		<ul className='flex items-center justify-end text-black space-x-24 font-bold'>
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
									link === value.name ? 'bg-black' : ''
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
