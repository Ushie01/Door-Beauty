import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from './../../../assets/logo.png';
import { FOOTER_DATA, socialIcons } from './constant/data';
import Payment from '../../../assets/payment.png';


const Footer = () => {
    return (
			<div className='bg-gray-100 mt-24'>
				<div className='flex lg:flex-row flex-col items-center justify-between mt-6 lg:p-12 p-4'>
					<div className='flex flex-col lg:items-start lg:justify-start items-center justify-center lg:w-1/5'>
						<Image
							src={Logo}
							alt='logo alt'
							className=''
						/>
						<Image
							src={Payment}
							alt='Payment Alt'
							className='mt-3'
						/>
					</div>
					<div className='flex lg:flex-row flex-col items-start lg:space-x-24 justify-between lg:mt-0 mt-16'>
						<div className='flex lg:flex-row flex-col lg:space-x-24'>
							{FOOTER_DATA.map((val, index) => (
								<div
									key={index}
									className='flex flex-col lg:items-start lg:justify-start items-center justify-center space-y-2 lg:m-0 mt-10 m-auto'>
									<p className='text-gray-400 font-bold text-2xl'>
										{val.title}
									</p>
									<div className='flex flex-col space-y-3 lg:items-start  lg:justify-start items-center justify-center '>
										{val.links.map((v, ind) => (
											<Link
												href='#'
												key={ind}>
												<p className='text-gray-400 font-thin hover:text-orange-500 translate-y-1 duration-100 '>
													{v}
												</p>
											</Link>
										))}
									</div>
								</div>
							))}
						</div>

						<div className='flex flex-col items-start justify-start space-y-7 lg:m-0 mt-10'>
							<p className='text-gray-400 font-bold text-2xl'>SOCIAL MEDIA</p>
							<div className='grid grid-cols-3 gap-4 gap-y-4 lg:m-0 m-auto'>
								{socialIcons.map((icon, index) => (
									<Link
										href='#'
										key={index}>
										{icon}
									</Link>
								))}
							</div>
						</div>
					</div>
				</div>
				<hr className='border-gray-300 w-full' />
				<div className='flex items-center justify-center h-20 w-full'>
					<p className='text-gray-400'>
						Copyright © 2022 Doorbeauty. All Rights Reserved.
					</p>
				</div>
			</div>
		);
};

export default Footer;
