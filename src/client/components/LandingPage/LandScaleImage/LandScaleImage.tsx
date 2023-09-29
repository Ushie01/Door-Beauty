import React from 'react';
import landScaleImage from '../../../../assets/land2.png';
import Pointer from '../../../../assets/pointer.gif';
import Image from 'next/image';

const LandScaleImage = () => {
    return (
			<div className=''>
				<Image
					src={landScaleImage}
					alt='landScaleImage'
					className='relative w-full h-[450px]'
				/>
				<div className='absolute top-44'>
					<Image
						src={Pointer}
						alt='pointer'
					/>
					<div className='flex flex-col pl-12 -mt-20 font-extrabold bg-gradient-to-r bg-black z-10 p-5'>
						<h1 className='font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-800'>
							Discover Us{' '}
						</h1>
						<p className='text-4xl text-[#7B5037]'>at your door step today</p>
						<p className='text-[#7B5037]'>and reach out to your peak beauty</p>
					</div>
				</div>
			</div>
		);
};

export default LandScaleImage;
