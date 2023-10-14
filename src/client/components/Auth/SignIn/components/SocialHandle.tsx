import { Button } from '@heathmont/moon-core-tw';
import React from 'react';
import Link from 'next/link';
import GoogleIcon from '../../../Svg/google';
import FacebookIcon from '../../../Svg/facebook';

const SocialHandle = () => {
	return (
		<div>
			<div className='flex-col items-center mt-8 w-full'>
				<Button
					type='submit'
					className='flex justify-center w-full  rounded-xl border-2 border-[#E69732]'>
					<GoogleIcon
						width='27'
						height='27'
					/>
					<p>Google</p>
				</Button>
				<Button
					type='submit'
					className='flex w-full justify-center mt-6 rounded-xl bg-blue-600 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm '>
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
					className='font-semibold leading-6 text-lightOrange-50'>
					{' '}
					Sign up
				</Link>
			</p>
		</div>
	);
};

export default SocialHandle;
