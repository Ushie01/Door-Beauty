import { Button } from '@heathmont/moon-core-tw';
import React, { ReactNode } from 'react';
import ModelInput from '@/src/client/shared/Model/ModelInput';

type Props = {
	title: string;
	description: string;
	icon: ReactNode;
	modalTitle: string;
};

const Card = ({ title, description, icon, modalTitle }: Props) => {
	return (
		<div className='flex items-start justify-center h-max px-5'>
			<div className='h-24 p-2 lg:pt-0 pt-16'>{icon}</div>
			<div className='border-l-2 p-2 text-black pl-6 lg:pt-0 pt-16'>
				<p className='text-xl font-bold'>{title}</p>
				<p>
					{description}
					<ModelInput modalTitle={modalTitle} />
				</p>
			</div>
		</div>
	);
};

export default Card;
