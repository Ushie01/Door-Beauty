import React from 'react';

export const Tag = ({ text }: { text: string }) => {
	return (
		<div className='flex'>
			<div className='bg-orange-400 h-5 w-1'></div>
			<div className='flex items-center justify-center bg-gray-200 h-5 '>
				<p className='text-black p-1 text-sm text-center '>{text}</p>
			</div>
		</div>
	);
};


