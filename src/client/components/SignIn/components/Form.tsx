import { Button } from '@heathmont/moon-core-tw';
import Link from 'next/link';
import React from 'react';

const Form = ({ buttonMadeVisible }: { buttonMadeVisible: boolean }) => {
	return (
		<form
			className='space-y-6'
			action='#'
			method='POST'>
			<div>
				<label className='block text-sm font-medium leading-6 text-gray-900'>
					Email address
				</label>
				<div className='mt-2'>
					<input
						id='email'
						name='email'
						type='email'
						autoComplete='email'
						required
						className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
					/>
				</div>
			</div>

			<div>
				<label className='block text-sm font-medium leading-6 text-gray-900'>
					First Name
				</label>
				<div className='mt-2'>
					<input
						id='firstName'
						name='firstName'
						type='text'
						autoComplete='text'
						required
						className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
					/>
				</div>
			</div>

			<div>
				<label className='block text-sm font-medium leading-6 text-gray-900'>
					Last Name
				</label>
				<div className='mt-2'>
					<input
						id='lastName'
						name='lastName'
						type='text'
						autoComplete='text'
						required
						className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
					/>
				</div>
			</div>

			<div>
				<div className='flex items-center justify-between'>
					<label className='block text-sm font-medium leading-6 text-gray-900'>
						Password
					</label>
				</div>
				<div className='mt-2'>
					<input
						id='password'
						name='password'
						type='password'
						autoComplete='current-password'
						required
						className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
					/>
				</div>
			</div>

			<div>
				<div className='flex items-center justify-between'>
					<label className='block text-sm font-medium leading-6 text-gray-900'>
						Confirm Password
					</label>
				</div>
				<div className='mt-2'>
					<input
						id='confirmPassword'
						name='confirmPassword'
						type='confirmPassword'
						autoComplete='current-password'
						required
						className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
					/>
				</div>
			</div>

			<div>
				{buttonMadeVisible && (
					<Link href='/'>
						<Button
							type='submit'
							className='flex w-full justify-center  rounded-xl bg-lightOrange-50 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
							Sign Up
						</Button>
					</Link>
				)}
			</div>
		</form>
	);
};

export default Form;
