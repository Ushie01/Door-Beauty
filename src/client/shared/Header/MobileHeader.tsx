import React, { useState } from 'react';
import { Button, Drawer, IconButton } from '@heathmont/moon-core-tw';
import { ControlsCloseSmall } from '@heathmont/moon-icons-tw';
import { GenericBurgerRegular } from '@heathmont/moon-icons-tw';
import Logo from '../../../assets/logo.png';
import Image from 'next/image';
import Cart from '../../components/Svg/Cart';
import Link from 'next/link';
import SearchInput from '../../components/LandingPage/components/Input/SearchInput';
import FlagDropDown from '../Dropdown/FlagDropdown';
import Avatar from '../../components/Svg/Avatar';
import Heart from '../../components/Svg/Heart';
import DropDown from '../Dropdown/DropDown';
import { DATA } from './constants/data';
import MobileHeaderContent from './MobileHeaderContent';

type Data = {
	id: string;
	name: string;
	data?: { name: string }[];
};

const MobileHeader = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [data, setData] = useState<string | []>('');
	const handleClick = () => setIsOpen(true);
	const handleClose = () => setIsOpen(false);

	const onHandleClick = (item: Data) => {
		setData(item.name);
	};

	return (
		<div className='p-4 w-full'>
			<div className='flex items-center justify-between'>
				<Button onClick={handleClick}>
					<GenericBurgerRegular
						height={30}
						width={30}
						className='border'
					/>
				</Button>
				<Drawer
					open={isOpen}
					setOpen={setIsOpen}>
					<Drawer.Panel className='bg-white border-r'>
						<div className='flex justify-between items-center p-3 border-b border-trunks'>
							<FlagDropDown />
							<div className='flex '>
								<IconButton
									variant='ghost'
									onClick={handleClose}
									aria-label='Close'>
									<ControlsCloseSmall />
								</IconButton>
							</div>
						</div>

						<MobileHeaderContent />
					</Drawer.Panel>
				</Drawer>
				<Image
					src={Logo}
					alt='Logo'
					className='w-14 h-20'
				/>
				<Link
					href='#'
					className=' flex items-center justify-center space-x-2'>
					<Cart />
					<div className='flex items-center justify-center bg-orange-500 text-white h-7 w-7 rounded-full'>
						<p className='font-bold text-xl'>0</p>
					</div>
				</Link>
			</div>
			<div className='w-full mt-8'>
				<SearchInput />
			</div>
		</div>
	);
};

export default MobileHeader;
