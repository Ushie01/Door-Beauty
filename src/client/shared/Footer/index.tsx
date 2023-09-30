import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from './../../../assets/logo.png';
import { FOOTER_DATA } from './constant/data';
import FacebookIcon from '../../components/Svg/facebook';
import InstagramIcon from '../../components/Svg/instagram';
import LinkedinIcon from '../../components/Svg/linkedin';
import TiktokIcon from '../../components/Svg/tiktok';
import TwitterIcon from '../../components/Svg/twitter-x';
import WhatsappIcon from '../../components/Svg/whatsapp';
import Payment from '../../../assets/payment.png';


const socialIcons = [
	FacebookIcon(),
	InstagramIcon(),
	LinkedinIcon(),
	TiktokIcon(),
	TwitterIcon(),
	WhatsappIcon(),
];

const Footer = () => {
    return (
			<div className='bg-gray-800'>
				<div className='flex flex-row items-center justify-between mt-6 p-12'>
					<div className='w-1/5'>
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
					<div className='flex flex-row items-start space-x-24 justify-between '>
						<div className='flex space-x-24'>
							{FOOTER_DATA.map((val, index) => (
								<div
									key={index}
									className='flex flex-col items-start justify-start space-y-2'>
									<p className='text-white font-bold text-2xl'>{val.title}</p>
									<div className='flex flex-col space-y-3'>
										{val.links.map((v, ind) => (
											<Link
												href='#'
												key={ind}>
												<p className='text-white font-thin hover:text-orange-500 translate-y-1 duration-100 '>
													{v}
												</p>
											</Link>
										))}
									</div>
								</div>
							))}
						</div>

						<div className='flex flex-col items-start justify-start space-y-7'>
							<p className='text-white font-bold text-2xl'>SOCIAL MEDIA</p>
							<div className='grid grid-cols-3 gap-4 gap-y-4'>
								{socialIcons.map((icon, index) => (
									<div key={index}>{icon}</div>
								))}
							</div>
						</div>
					</div>
				</div>
				<hr className='border-gray-100 w-full' />
				<div className='flex items-center justify-center h-20 w-full'>
					<p className='text-gray-100'>Copyright © 2022 Doorbeauty. All Rights Reserved.</p>
				</div>
			</div>
		);
};

export default Footer;
