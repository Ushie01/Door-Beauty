import React from 'react';
import Search from '../../../Svg/SearchIcon';
import { Input } from './Input';

type Props = {
	placeHolder: string;
	bgColor: string
}

const FlexWidthInput = ({placeHolder, bgColor}: Props) => {
	return (
		<div className='relative w-full border'>
			<Input
				textColor='text-gray-300'
				bgColor={bgColor}
				placeHolder={placeHolder}
			/>
			<div className='absolute inset-y-0 right-0 flex items-center space-x-3 mr-5'>
				<p className='text-gray-300 '>|</p>
				<button>
					<Search iconColor='gray' />
				</button>
			</div>
		</div>
	);
};

export default FlexWidthInput;
