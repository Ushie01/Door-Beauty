import InputText from '@/src/client/shared/Input/InputText';
import { Button } from '@heathmont/moon-core-tw';
import Link from 'next/link';
import React from 'react';

const Form = () => {
	return (
		<form
			className='space-y-6'
			action='#'
			method='POST'>
			<InputText
				label='Email address'
				name='email'
				type='email'
				autoComplete='email'
			/>

			<InputText
				label='First Name'
				name='firstName'
				type='text'
				autoComplete='text'
			/>

			<InputText
				label='	Last Name'
				name='lastName'
				type='text'
				autoComplete='text'
			/>

			<InputText
				label='Password'
				name='password'
				type='password'
				autoComplete='current-password'
			/>

			<InputText
				label='Comfirm Password'
				name='comfirmPassword'
				type='password'
				autoComplete='current-password'
			/>

			<Link href='/'>
				<Button
					type='submit'
					className='flex w-full justify-center  rounded-xl bg-lightOrange-50 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
					Sign Up
				</Button>
			</Link>
		</form>
	);
};

export default Form;
