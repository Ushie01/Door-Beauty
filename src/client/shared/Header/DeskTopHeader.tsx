import React from 'react';
import Logo from './../../../assets/logo.png';
import Image from 'next/image';
import SearchInput from '../../components/LandingPage/components/Input/SearchInput';
import Avatar from '../../components/Svg/Avatar';
import Heart from '../../components/Svg/Heart';
import Cart from '../../components/Svg/Cart';
import Link from 'next/link';
import FlagDropDown from '../Dropdown/FlagDropdown';
import ToggleNavbar from './ToggleNavbar/ToggleNavbar';

const DeskTopHeader = () => {
	return (
		<div className='flex items-center justify-between px-4 text-white border-2'>
			<Image
				src={Logo}
				alt='Logo'
				className='w-28 h-40'
			/>
			<div className='flex flex-col items-center justify-end space-y-5 w-full'>
				<div className='flex items-center justify-end font-bold w-full space-x-12'>
					<SearchInput />
					<div className='flex items-center justify-center text-black space-x-5'>
						<Link
							href='#'
							className='flex items-center justify-center space-x-2'>
							<Avatar
								width='17'
								height='17'
							/>
							<p>Account</p>
						</Link>
						<Link
							href='#'
							className='relative flex items-center justify-center space-x-2'>
							<div className='absolute flex items-center justify-center bg-orange-500 text-white h-5 w-5 p-1 -mt-6 mr-4 rounded-full text-xs'>
								<p>0</p>
							</div>

							<Cart />
							<p>Cart</p>
						</Link>
						<div className='flex items-center justify-center space-x-2'>
							<Heart
								width='17'
								height='17'
							/>
							<p>WishList</p>
						</div>
						<div className='flex items-center justify-center space-x-2'>
							<FlagDropDown />
						</div>
					</div>
				</div>
				<ToggleNavbar />
			</div>
			<hr className='border-2' />
		</div>
	);
};

export default DeskTopHeader;