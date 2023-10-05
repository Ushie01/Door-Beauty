import React, { useState } from 'react';
import { GenericBurgerZig } from '@heathmont/moon-icons-tw';
import FlexWidthInput from '../../LandingPage/components/Input/FlexWidthInput';
import { BEST_SELLERS, BRANDS, CATEGORY, PRICE } from '../constant/data';
import CheckBox from '@/src/client/shared/Checkbox';
import DropDown from '../../../shared/DropDown/DropDown';

const Filter = () => {
	const [option, setOption] = useState<string | []>('');

	return (
		<div className='flex flex-col'>
			<div className='flex'>
				<GenericBurgerZig
					height={25}
					width={25}
				/>
				<p className='font-bold'>All Category</p>
			</div>

			<div className='flex flex-col mt-8'>
				<p className='font-bold'>CATEGORY</p>
				<div className='h-10 mt-3'>
					<FlexWidthInput
						placeHolder='Search...'
						bgColor='bg-white'
					/>
				</div>
			</div>

			<hr className='border font-thin my-10 w-full' />

			<div className='-mt-3'>
				<p className='font-bold'>PRICE</p>
				<div className='border border-1 px-1 mt-3 py-3'>
					<DropDown
						title='$1 - $10'
						arrayTitle={PRICE}
						setLink={setOption}
					/>
				</div>
			</div>

			<hr className='border font-thin my-10 w-full' />

			<div className='-mt-3'>
				<p className='font-bold'>BEST SELLERS</p>
				<div className='border border-1 px-1 mt-3 py-3'>
					<DropDown
						title='BEST_SELLERS'
						arrayTitle={BEST_SELLERS}
						setLink={setOption}
					/>
				</div>
			</div>

			<hr className='border font-thin my-10 w-full' />

			<div className='flex flex-col'>
				<p className='font-bold'>BRANDS</p>
				<div className='flex flex-col space-y-3 mt-2'>
					{BRANDS.map((value, index) => (
						<div key={index}>
							<CheckBox textValue={value.name} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Filter;
