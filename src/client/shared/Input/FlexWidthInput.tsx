import React from 'react';
import Search from '../../components/Svg/SearchIcon';
import { Input } from './Input';

type Props = {
	placeHolder: string;
	bgColor: string;
};

const FlexWidthInput = ({ placeHolder, bgColor }: Props) => {
	return (
		<div className='flex relative w-full border bg-white'>
			<div className='lg:w-[400px]'>
				<Input
					textColor='text-black'
					bgColor={bgColor}
					placeHolder={placeHolder}
				/>
			</div>

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
