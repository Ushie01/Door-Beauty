import { Button } from '@heathmont/moon-core-tw';
import { ControlsMinus, ControlsPlus } from '@heathmont/moon-icons-tw';
import React, { useState, useEffect } from 'react';

type Props = {
	id: number;
	quantity: number;
	incrementCounter: (id: number) => void;
	decrementCounter: (id: number) => void;
};

const Counter = ({
	id,
	quantity,
	incrementCounter,
	decrementCounter,
}: Props) => {

	console.log(id, quantity)

	return (
		<div className='flex items-center justify-center lg:space-x-4 border rounded'>
			<Button>
				<ControlsPlus
					height={25}
					width={25}
					color='gray'
					onClick={() => incrementCounter(id)}
				/>
			</Button>
			<p className='font-bold text-xl'>{quantity}</p>
			<Button>
				<ControlsMinus
					height={25}
					width={25}
					color='gray'
					onClick={() => decrementCounter(id)}
				/>
			</Button>
		</div>
	);
};

export default Counter;
