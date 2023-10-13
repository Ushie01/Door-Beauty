import Image from 'next/image';
import React from 'react';
import Logo from '../../../assets/logo.png';
import { Button } from '@heathmont/moon-core-tw';
import FacebookIcon from '../Svg/facebook';
import GoogleIcon from '../Svg/google';
import LoginImg from '../../../assets/LoginImg.jpg';
import Link from 'next/link';

const SignIn = () => {
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-6 py-12 w-1/2'>
				<div>
					<Image
						className='mx-auto h-40 w-auto'
						src={Logo}
						alt='Logo alt'
					/>
					<h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
						Sign in to your account
					</h2>
				</div>

				<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
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
							<div className='flex items-center justify-between'>
								<label className='block text-sm font-medium leading-6 text-gray-900'>
									Password
								</label>
								<div className='text-sm'>
									<a
										href='#'
										className='font-semibold text-indigo-600 hover:text-indigo-500'>
										Forgot password?
									</a>
								</div>
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
							<Link href='/'>
								<Button
									type='submit'
									className='flex w-full justify-center  rounded-xl bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
									Sign in
								</Button>
							</Link>
						</div>
					</form>

					<div className='flex items-center justify-between mt-4'>
						<hr className='border w-1/4' />
						<p className='text-black w-2/4 text-center font-bold'>
							Or continue with
						</p>
						<hr className='border w-1/4' />
					</div>
					<div className='flex items-center mt-8 w-full'>
						<Button
							type='submit'
							className='flex justify-center w-full  mr-1 rounded-xl border-2 border-black'>
							<GoogleIcon
								width='27'
								height='27'
							/>
							<p>Google</p>
						</Button>
						<Button
							type='submit'
							className='flex w-full justify-center ml-1 rounded-xl bg-blue-600 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm '>
							<FacebookIcon
								width='27'
								height='27'
								color='white'
							/>
							<p>Facebook</p>
						</Button>
					</div>
					<p className='mt-10 text-center text-sm text-gray-500'>
						Don`t have an account?
						<Link
							href='/signup'
							className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'>
							{' '}
							Sign up
						</Link>
					</p>
				</div>
			</div>
			<div className='w-1/2'>
				<Image
					src={LoginImg}
					alt='login alt'
					className='w-full h-full'
				/>
			</div>
		</div>
	);
};

export default SignIn;
