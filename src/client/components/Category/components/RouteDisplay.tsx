import React, { useState } from 'react';
import DropDown from '@/src/client/shared/Dropdown/DropDown';
import { people } from '@/src/client/shared/Header/constants/data';
import useDeviceType from '@/src/client/shared/hooks/useDeviceType';
import { Button, IconButton } from '@heathmont/moon-core-tw';
import { MailFilter } from '@heathmont/moon-icons-tw';

const RouteDisplay = () => {
	const { isMobile } = useDeviceType();
	const [option, setOption] = useState<string | []>('');

	if(isMobile){
		return (
			<div className='flex flex-row items-center justify-end p-4 -mt-2'>
				<button className='flex items-center justify-center px-2 py-1 border rounded-md'>
					<MailFilter
						className='text-orange-700'
						height={36}
						width={34}
					/>
					<p>Filter</p>
				</button>
			</div>
		);
	}
	return (
		<div className='flex flex-col'>
			<div className='py-5 px-12'>
				<p className='text-black'>Homepage / Woman / Beauty Cream</p>
			</div>
			<div className='flex items-center justify-between bg-gray-100 py-5 px-12'>
				<div className='flex space-x-3'>
					<p className='font-bold'>Woman</p>
					<p>110 Items</p>
				</div>
				<div className='border-2 rounded p-1'>
					<DropDown
						title='Sort by Order'
						arrayTitle={people}
						setLink={setOption}
					/>
				</div>
			</div>
		</div>
	);
};

export default RouteDisplay;
