import React from 'react';
import SocialLogin from './components/SocialHandle';
import SideImage from './components/SideImage';
import OrContinueWith from './components/OrContinueWith';
import LoginButton from './components/Button';
import Head from './components/Head';


const SignIn = () => {
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-6 py-12 lg:w-1/2 w-full'>
				<Head title='Sign in to your account' />

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
										className='font-semibold text-lightOrange-50'>
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

						<LoginButton
							text='Sign In'
							link='/'
						/>
					</form>
					<OrContinueWith />
					<SocialLogin />
				</div>
			</div>
			<SideImage />
		</div>
	);
};

export default SignIn;
