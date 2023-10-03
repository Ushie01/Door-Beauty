import React, { useState } from 'react';
import { Avatar } from '@heathmont/moon-core-tw';
import Link from 'next/link';
import Heart from '../../components/Svg/Heart';
import { DATA } from './constants/data';
import DropDown from '../Dropdown/DropDown';

type Data = {
	id: string;
	name: string;
	data?: { name: string }[];
};


const MobileHeaderContent = () => {
	const [data, setData] = useState<string | []>('');
	const onHandleClick = (item: Data) => {
		setData(item.name);
	};

	return (
		<div>
			<div className='flex flex-col items-start justify-start p-4 space-y-4 text-black'>
				<Link
					href='#'
					className='flex items-center justify-center space-x-3'>
					<Avatar
						width='17'
						height='17'
					/>
					<p className='font-semibold text-md'>Account</p>
				</Link>

				<hr className='w-full' />

				<Link
					href='#'
					className='flex items-center justify-center space-x-3'>
					<Heart
						width='17'
						height='17'
					/>
					<p className='text-md font-semibold'>WishList</p>
				</Link>
			</div>
			<hr className='w-full border-black' />
			{DATA.map((value) => (
				<React.Fragment key={value.id}>
					<Link
						href='#'
						onClick={() => onHandleClick(value)}>
						{value.data ? (
							value.data && (
								<div className='flex flex-col space-y-4 mt-4 text-md'>
									<DropDown
										title={value.name}
										arrayTitle={value.data}
										setLink={setData}
									/>
									<hr className='w-full' />
								</div>
							)
						) : (
							<div className='flex flex-col space-y-4 mt-4'>
								<p className='text-md px-4'>{value.name}</p>
								<hr className='w-full' />
							</div>
						)}
					</Link>
				</React.Fragment>
			))}
		</div>
	);
};

export default MobileHeaderContent;
