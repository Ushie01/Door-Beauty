import Link from 'next/link';
import React from 'react';

const LookingForSomething = () => {
	return (
		<div>
			<p className='text-md font-bold'>
				Are you comfuse on what you`re looking??
			</p>
			<div className='flex flex-col underline font-semibold space-y-3 mt-10'>
				<Link href='/category'>
					<p>● Click here to view our available stores </p>
				</Link>
				<Link href='/category'>
					<p>● Click here to view our letest product and cusmetic</p>
				</Link>
			</div>
		</div>
	);
};

export default LookingForSomething;
