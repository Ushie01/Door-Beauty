import { Button } from '@heathmont/moon-core-tw';
import { ControlsMinus, ControlsPlus } from '@heathmont/moon-icons-tw';
import React from 'react';

const IncrementButton = () => {
	return (
		<div className='flex items-center justify-center lg:space-x-4 border rounded'>
			<Button>
				<ControlsPlus
					height={25}
					width={25}
					color='gray'
				/>
			</Button>
			<p className='font-bold text-xl'>2</p>
			<Button>
				<ControlsMinus
					height={25}
					width={25}
					color='gray'
				/>
			</Button>
		</div>
	);
};

export default IncrementButton;
