import React, { useState } from 'react';
import DropDown from '@/src/client/shared/DropDown';
import { people } from '@/src/client/shared/Header/constants/data';
import useDeviceType from '@/src/client/shared/hooks/useDeviceType';
import { Button, Drawer, IconButton } from '@heathmont/moon-core-tw';
import { ControlsCloseSmall, MailFilter } from '@heathmont/moon-icons-tw';
import Filter from './Filter';

const RouteDisplay = () => {
	const { isMobile } = useDeviceType();
	const [isOpen, setIsOpen] = useState(false);
	const [option, setOption] = useState<string | []>('');
	const handleClick = () => setIsOpen(true);
	const handleClose = () => setIsOpen(false);

	if (isMobile) {
		return (
			<div className='flex flex-row items-center justify-end p-4 -mt-2'>
				<button
					onClick={handleClick}
					className='flex items-center justify-center px-2 py-1 rounded-md'>
					<MailFilter
						className='text-orange-700'
						height={36}
						width={34}
					/>
					<p>Filter</p>
				</button>
				
				<Drawer
					open={isOpen}
					setOpen={setIsOpen}>
					<Drawer.Panel className='flex flex-col overflow-y-scroll bg-white border-r-2 p-6'>
						<div className='flex items-center justify-end mb-2'>
							<IconButton
								variant='ghost'
								onClick={handleClose}
								aria-label='Close'>
								<ControlsCloseSmall />
							</IconButton>
						</div>
						<Filter />
					</Drawer.Panel>
				</Drawer>
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
