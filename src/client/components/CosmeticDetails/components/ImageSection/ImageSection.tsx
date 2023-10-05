import Image from 'next/image';
import React, { useState } from 'react';
import { PRODUCT_IMAGE } from '../../constant/data';
import {
	ControlsPlus,
	ControlsMinus,
	ShopCart,
	GenericHeart,
} from '@heathmont/moon-icons-tw';
import { Button } from '@heathmont/moon-core-tw';
import Heart from '../../../Svg/Heart';
import useDeviceType from '@/src/client/shared/hooks/useDeviceType';

const ImageSection = () => {
	const { isMobile } = useDeviceType();
	const [selectedImage, setSelectedImage] = useState<string | null>(null);
	const handleClick = (image: string) => {
		setSelectedImage(image);
	};

	return (
		<div className='py-6 lg:px-16 p-4'>
			<h1 className='text-black lg:block hidden'>
				Home Page / Woman / Creme Beauty
			</h1>
			<div className='flex lg:flex-row flex-col items-center justify-between lg:mt-8'>
				<div className='flex lg:flex-row flex-col-reverse  items-center justify-start lg:w-1/2 lg:space-x-1'>
					<div className='flex lg:flex-col flex-row items-center justify-start lg:space-x-0 space-x-1 space-y-1'>
						{PRODUCT_IMAGE.map((value, index) => (
							<Image
								src={value}
								alt='product image'
								key={index}
								onClick={() => handleClick(value.src)}
								height={isMobile ? 80 : 180}
								width={isMobile ? 80 : 120}
								className='border'
							/>
						))}
					</div>

					<div className='relative'>
						<Image
							src={selectedImage ? selectedImage : PRODUCT_IMAGE[0].src}
							alt='product image'
							onClick={() => handleClick('green')}
							height={700}
							width={500}
							className={`${selectedImage ? `bg-${selectedImage}-500` : ''}`}
						/>
						<Button className='absolute top-5 right-5 border-white bg-white m-auto lg:hidden  rounded-full p-1 h-10 w-10 border-2'>
							<GenericHeart
								height={34}
								width={34}
								fill='red'
								color='white'
							/>
						</Button>
					</div>
				</div>

				<div className='lg:py-12 lg:pl-12 lg:w-1/2 lg:mt-0 mt-6'>
					<div className='flex flex-row items-center  justify-between'>
						<div>
							<h1 className='font-bold text-2xl text-black'>
								ALOE & BLACK CASTOR OIL
							</h1>
							<p className='font-bold text-2xl text-black'>$39.99</p>
						</div>
						<Button className='m-auto lg:block hidden rounded-full ml-52 p-1 pl-2 h-10 w-10 border-2'>
							<Heart
								height='20'
								width='20'
							/>
						</Button>
					</div>

					<div className='flex items-center justify-start lg:space-x-4 space-x-3 lg:mt-9 mt-4'>
						<p className='font-bold'>Quantity</p>
						<div className='flex items-center justify-center lg:space-x-4 border rounded'>
							<Button>
								<ControlsPlus
									height={25}
									width={25}
									color='gray'
								/>
							</Button>
							<p className='font-bold text-xl'>2</p>
							<Button>
								<ControlsMinus
									height={25}
									width={25}
									color='gray'
								/>
							</Button>
						</div>
					</div>

					<div className='w-full bg-slate-200 lg:px-12 px-4 py-4 space-y-3 rounded lg:mt-10 mt-4'>
						<p className='text-xl font-bold text-black'>$79.98</p>
						<hr className='w-full border-gray-300 border' />
						<div className='flex space-x-3'>
							<div className='flex items-center justify-center p-1 rounded-full border-gray-300 border-2'>
								<ControlsPlus
									height={20}
									width={20}
									className='text-gray-500'
								/>
							</div>
							<p className='text-gray-400'>
								Add shipping insurance for $9( declared value only if the
								package gets lost, stolen or damaged.)
							</p>
						</div>
					</div>

					<div className='flex flex-row lg:mt-10 mt-4 lg:space-x-4 space-x-2 font-thin'>
						<Button className=' w-full text-white text-md h-12 bg-orange-500 rounded shadow-xl'>
							SHOW NOW
						</Button>

						<Button className='flex items-center justify-center w-full text-white h-12 border rounded shadow-xl'>
							<ShopCart
								height={28}
								width={28}
								className='text-gray-600'
							/>
							<p className='text-md text-gray-500'>ADD TO CART</p>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ImageSection;
