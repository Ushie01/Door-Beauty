import Image from 'next/image';
import React, { useState } from 'react';
import { PRODUCT_IMAGE } from '../constant/data';
import {
	ControlsPlus,
	ControlsMinus,
	ShopCart,
} from '@heathmont/moon-icons-tw';
import { Button } from '@heathmont/moon-core-tw';
import Heart from '../../Svg/Heart';

const ImageSection = () => {
	const [selectedImage, setSelectedImage] = useState<string | null>(null);
	const handleClick = (image: string) => {
		setSelectedImage(image);
	};

	return (
		<div className='py-6 px-16'>
			<h1>Home Page / Woman / Creme Beauty</h1>
			<div className='flex items-center justify-between mt-8'>
				<div className='flex items-center justify-start w-1/2 space-x-1'>
					<div className='flex flex-col items-center justify-start space-y-1'>
						{PRODUCT_IMAGE.map((value, index) => (
							<Image
								src={value}
								alt='product image'
								key={index}
								onClick={() => handleClick(value.src)}
								height={180}
								width={120}
								className='border'
							/>
						))}
					</div>
					<Image
						src={selectedImage ? selectedImage : PRODUCT_IMAGE[0].src}
						alt='product image'
						onClick={() => handleClick('green')}
						height={700}
						width={500}
						className={`${selectedImage ? `bg-${selectedImage}-500` : ''}`}
					/>
				</div>

				<div className='py-12 pl-12 w-1/2'>
					<div className='flex items-cente justify-between'>
						<div>
							<h1 className='font-bold text-2xl'>ALOE & BLACK CASTOR OIL</h1>
							<p className='font-bold text-2xl'>$39.99</p>
						</div>
						<Button className='rounded-full p-1 h-10 w-10 border-2'>
							<Heart
								height='20'
								width='20'
							/>
						</Button>
					</div>

					<div className='flex items-center justify-start space-x-4 mt-9'>
						<p className='font-bold'>Quantity</p>
						<div className='flex items-center justify-center border space-x-4 rounded'>
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

					<div className='w-full bg-slate-200 px-12 py-4 space-y-3 rounded mt-10'>
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

					<div className='flex flex-row mt-10 space-x-4 font-thin'>
						<Button className=' w-full text-white text-md h-12 bg-orange-500 rounded shadow-xl'>
							SHOW NOW
						</Button>

						<Button className='flex items-center justify-center w-full text-white h-12 border rounded shadow-xl'>
								<ShopCart height={28} width={28} className='text-gray-600'/>
								<p className='text-md text-gray-500'>ADD TO CART</p>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ImageSection;
