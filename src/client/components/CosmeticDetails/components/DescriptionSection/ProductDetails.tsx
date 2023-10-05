import React from 'react'

const ProductDetailsSection = () => {
  return (
		<div className='flex items-start justify-start mt-5 '>
			<div className='flex flex-col items-start justify-start text-black w-1/2 pr-10'>
				<div>
					<p className='text-xl font-bold'>Product Description</p>
					<p className='mt-4'>
						Cleanse, detangle and restore moisture with our Aloe & Black Castor
						Oil Healthy & Long Fortifying Shampoo while achieving a healthy
						level of strength and noticeable length.
					</p>
				</div>
				<div>
					<p className='text-xl font-bold mt-7'>Benefits</p>
					<div className='mt-4'>
						<p>
							<span>●</span> Cleanses Hair & Scalp
						</p>
						<p>
							<span>●</span> Smoothes & Detangles
						</p>
						<p>
							<span>●</span> Promotes Hair Length by Strengthening Damaged or
							Weak Hair
						</p>
					</div>
				</div>
			</div>
			<div className='flex flex-col items-start justify-start text-black w-1/2 pl-10'>
				<div>
					<p className='text-xl font-bold'>How To Use</p>
					<p className='mt-4'>
						Apply a generous amount to wet hair and massage into a rich lather.
						Rinse thoroughly and repeat. Follow with Aloe & Black Castor Oil
						Healthy & Long Fortifying Hair Mask. WARNING: Avoid contact with
						eyes. Keep out of reach of children.
					</p>
				</div>
				<div>
					<p className='text-xl font-bold mt-7'>Ingredients</p>
					<div className='mt-4'>
						<p>
							<span>●</span> Aleo Vera Juice
						</p>
						<p>
							<span>●</span> Jamaica Black Castal Oil
						</p>
						<p>
							<span>●</span> Vatamins
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductDetailsSection;