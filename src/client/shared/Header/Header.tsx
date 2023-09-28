import React from 'react';
import Logo from './../../../assets/logo.png';
import Image from 'next/image';
import SearchInput from '../../components/LandingPage/components/SearchInput';
import Avatar from '../../components/Svg/Avatar';
import Heart from '../../components/Svg/Heart';
import Cart from '../../components/Svg/Cart';
import Link from 'next/link';


const Header = () => {
	return (
		<div className='flex items-center justify-between px-4 text-white border-2'>
			<Image
				src={Logo}
				alt='Logo'
			/>
			<div className='flex flex-col items-center justify-end space-y-7'>
				<div className='flex flex-row items-center justify-end font-bold space-x-48'>
					<SearchInput />
					<div className='flex  items-center justify-center text-black space-x-12'>
						<Link
							href='#'
							className='flex items-center justify-center space-x-3'>
							<Avatar />
							<p>Account</p>
						</Link>
						<Link
							href=''
							className='flex items-center justify-center space-x-3'>
							<Cart />
							<p>Cart</p>
						</Link>
						<div className='flex items-center justify-center space-x-3'>
							<Heart />
							<p>WishList</p>
						</div>
					</div>
				</div>
				<div className='flex items-center justify-end text-black space-x-24 font-bold'>
					<Link href='#'>HOME</Link>
					<Link href='#'>STORE</Link>
					<Link href='#'>CATEGORIES</Link>
					<Link href='#'>BEST SELLER</Link>
					<Link href='#'>BRAND</Link>
					<Link href='#'>CONTACT US</Link>
				</div>
			</div>
			<hr className='border-2' />
		</div>
	);
};

export default Header;
