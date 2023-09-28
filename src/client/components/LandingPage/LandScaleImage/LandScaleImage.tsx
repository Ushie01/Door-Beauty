import React from 'react'
import landScaleImage from '../../../../assets/land2.png';
import Image from 'next/image';

const LandScaleImage = () => {
  return (
      <div>
          <Image src={landScaleImage} alt='landScaleImage' className='w-full h-[400px]' />
      </div>
	);
}

export default LandScaleImage
