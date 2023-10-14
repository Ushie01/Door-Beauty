import React from 'react';
import InputText from '@/src/client/shared/Input/InputText';

const DriverSignUp = () => {
	return (
		<div>
			<InputText
				label='Email Address'
				name='email'
				type='email'
				autoComplete='email'
			/>

			<InputText
				label='Phone Number'
				name='phoneNumber'
				type='number'
				autoComplete='number'
			/>

			<InputText
				label='Address'
				name='address'
				type='email'
				autoComplete='email'
			/>

			<InputText
				label='City'
				name='city'
				type='text'
				autoComplete='text'
			/>

			<InputText
				label='State'
				name='state'
				type='text'
				autoComplete='text'
			/>

			<InputText
				label='Zip Code'
				name='zipCode'
				type='number'
				autoComplete='number'
			/>

			<InputText
				label='Atp/Code'
				name='atpCode'
				type='text'
				autoComplete='tex'
			/>

      <InputText
				label='Create Store'
				name='atpCode'
				type='text'
				autoComplete='tex'
			/>
			{/* <div className='border rounded-xl mt-5'>
				<DropDownImage arrayData={CARD_DATA_ARRAY} />
			</div> */}
		</div>
	);
};

export default DriverSignUp;
