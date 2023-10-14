import React from 'react'
import Image from 'next/image';
import LoginImg from '../../../../../assets/LoginImg.jpg'

const SideImage = () => {
  return (
		<div className='w-1/2 lg:block hidden'>
			<Image
				src={LoginImg}
				alt='login alt'
				className='w-full h-full'
			/>
		</div>
	);
}

export default SideImage
