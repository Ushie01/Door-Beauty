import { Button } from '@heathmont/moon-core-tw';
import { ControlsMinus, ControlsPlus } from '@heathmont/moon-icons-tw';
import React, { useState } from 'react';

const IncrementButton = () => {
	const [count, setCount] = useState(0);
	console.log(count);

	const incrementCounter = () => {
		setCount(count + 1);
	};

	const decrementCount = () => {
		setCount(Math.max(1, count - 1));
	}
	return (
		<div className='flex items-center justify-center lg:space-x-4 border rounded'>
			<Button>
				<ControlsPlus
					height={25}
					width={25}
					color='gray'
					onClick={incrementCounter}
				/>
			</Button>
			<p className='font-bold text-xl'>{count}</p>
			<Button>
				<ControlsMinus
					height={25}
					width={25}
					color='gray'
					onClick={decrementCount}
				/>
			</Button>
		</div>
	);
};

export default IncrementButton;
