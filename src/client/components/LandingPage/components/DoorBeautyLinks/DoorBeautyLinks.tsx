import React from 'react';
import { BAEUTY_DATA } from '../../constant/data';
import Card from './Card';
import { Tag } from '@/src/client/shared/Tag';
import IntersectionComponent from '@/src/client/shared/IntersectionObserver';

const DoorBeautyLinks = () => {
	return (
		<IntersectionComponent
			intersection={
				<div className='flex lg:flex-row flex-col items-start justify-between p-12'>
					<div className='flex flex-col w-2/3'>
						<Tag text='What we do' />
						<p className='text-2xl text-black font-bold lg:w-2/3 mt-3'>
							Door Beauty Links
						</p>
					</div>
					<div className='lg:grid lg:grid-cols-2 lg:gap-3 lg:gap-y-10 lg:pt-0 pt-10'>
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
									modalTitle={val.modalTitle}
								/>
							</div>
						))}
					</div>
					<div></div>
				</div>
			}
			verticalTransition='translate-y-[200px]'
		/>
	);
};

export default DoorBeautyLinks;
