import React from 'react';
import { BAEUTY_DATA } from '../../constant/data';
import Card from './Card';

const DoorBeautyLinks = () => {
	return (
		<div className='flex flex-row items-start justify-between p-12'>
			<div className='flex flex-col w-2/3'>
				<div className='flex'>
					<div className='bg-orange-400 h-5 w-1'></div>
					<div className='flex items-center justify-center bg-gray-200 h-5 '>
						<p className='text-black p-1 text-sm text-center '>What we do</p>
					</div>
				</div>
				<p className='text-2xl text-black font-bold w-2/3 mt-3'>
					Door Beauty Links
				</p>
			</div>
			<div className='grid grid-cols-2 gap-3 gap-y-10'>
				{BAEUTY_DATA.map((val, index) => (
					<div key={index}>
						<Card
							title={val.title}
							description={val.description}
							icon={
								<val.icon
									height={80}
									width={80}
									color='black'
								/>
							}
						/>
					</div>
				))}
			</div>
			<div></div>
		</div>
	);
};

export default DoorBeautyLinks;
