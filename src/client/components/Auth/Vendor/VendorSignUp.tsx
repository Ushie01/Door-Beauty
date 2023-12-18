import React, { useState } from 'react';
import { CARD_DATA_ARRAY } from '@/src/client/shared/Header/constants/data';
import InputText from '@/src/client/shared/Input/InputText';
import DropdownImg from '@/src/client/shared/DropDown/DropDownImage/DropdownImage';

const VendorSignUp = () => {
	const [agreeTerms, setAgreeTerms] = useState(false);

	const handleTermsChange = () => {
		setAgreeTerms(!agreeTerms);
	};
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
				autoComplete='text'
			/>

			<InputText
				label='Create Store'
				name='atpCode'
				type='text'
				autoComplete='text'
			/>

			<InputText
				label='Year of Vehicle'
				name='yearOfVehicle'
				type='date'
				autoComplete='date'
			/>

			<InputText
				label='Make of Vehicle'
				name='makeOfVehicle'
				type='text'
				autoComplete='text'
			/>

			<InputText
				label='License Image'
				name='licenseImage'
				type='file'
				autoComplete='file'
			/>

			<p className='mt-5'>Prepaid Card</p>
			<div className='border rounded-xl mt-1'>
				<DropdownImg arrayData={CARD_DATA_ARRAY} />
			</div>

			<div className='form-check mt-3'>
				<input
					className='form-check-input'
					type='checkbox'
					id='agreeTermsCheckbox'
					checked={agreeTerms}
					onChange={handleTermsChange}
				/>
				<label
					className='form-check-label'
					htmlFor='agreeTermsCheckbox'>
					{' '}
					I agree to the terms and conditions
				</label>
			</div>

			<hr className='w-full border mt-8' />
		</div>
	);
};

export default VendorSignUp;
