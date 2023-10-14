import React, { useState } from 'react';
import { Drawer, IconButton } from '@heathmont/moon-core-tw';
import { ControlsCloseSmall } from '@heathmont/moon-icons-tw';
import { GenericBurgerRegular } from '@heathmont/moon-icons-tw';
import Logo from '../../../assets/logo.png';
import Image from 'next/image';
import Cart from '../../components/Svg/Cart';
import Link from 'next/link';
import SearchInput from '../Input/SearchInput';
import Avatar from '../../components/Svg/Avatar';
import Heart from '../../components/Svg/Heart';
import DropDown from '../DropDown';
import { DATA, FLAG_DATA_ARRAY } from './constants/data';
import useCart from '../Context/useCart';
import DropdownImage from '../DropDown/DropdownImage';

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
	const { product } = useCart();

	const onHandleClick = (item: Data) => {
		setData(item.name);
	};

	return (
		<div className='p-4 w-full'>
			<div className='flex items-center justify-between'>
				<button onClick={handleClick}>
					<GenericBurgerRegular
						height={30}
						width={30}
						className='border'
					/>
				</button>

				<Drawer
					open={isOpen}
					setOpen={setIsOpen}>
					<Drawer.Panel className='bg-white border-r-2'>
						<div className='flex justify-between items-center p-3 border-b border-trunks'>
							<DropdownImage arrayData={FLAG_DATA_ARRAY} />
							<div className='flex '>
								<IconButton
									variant='ghost'
									onClick={handleClose}
									aria-label='Close'>
									<ControlsCloseSmall />
								</IconButton>
							</div>
						</div>
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
					</Drawer.Panel>
				</Drawer>

				<Image
					src={Logo}
					alt='Logo'
					className='w-14 h-20'
				/>
				<Link
					href='/cart'
					className=' flex items-center justify-center space-x-2'>
					<Cart />
					<div className='flex items-center justify-center bg-orange-500 text-white h-7 w-7 rounded-full'>
						<p className='font-bold text-xl'>{product.length}</p>
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
