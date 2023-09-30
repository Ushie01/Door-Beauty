import { Button } from '@heathmont/moon-core-tw';
import React, { ReactNode } from 'react';
import { ArrowsRight } from '@heathmont/moon-icons-tw';

type Props = {
	title: string;
	description: string;
	icon: ReactNode;
};

const Card = ({ title, description, icon }: Props) => {
	return (
		<div className='flex items-start justify-center h-max px-5'>
			<div className='h-24 p-2'>{icon}</div>
			<div className='border-l-2 p-2 text-black pl-6'>
				<p className='text-xl font-bold'>{title}</p>
				<p>
					{description}
					<Button className='bg-orange-400 rounded-xl p-1 mt-4'>
						<ArrowsRight
							height={34}
                            width={34}
                            color='white'
						/>
					</Button>
				</p>
			</div>
		</div>
	);
};

export default Card;
