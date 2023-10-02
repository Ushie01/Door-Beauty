import React from 'react';
import Image, { StaticImageData } from 'next/image';


type Props = {
    photo: StaticImageData;
    name: string;
    productCount: number;
}

const Card = ({photo, name, productCount}: Props) => {
	return (
		<div className='flex flex-col border w-64 h-80 rounded-md p-2 mt-24'>
			<Image
				src={photo}
				alt='Image'
				className='w-full h-64'
			/>
			<div className='flex flex-col p-2'>
                <p className='text-2xl font-bold text-black'>{name}</p>
                {/* <p className='text-red-500 text-xl'>{productCount}</p> */}
			</div>
		</div>
	);
};

export default Card;
