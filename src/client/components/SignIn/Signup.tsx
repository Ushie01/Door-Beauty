import Image from 'next/image';
import React from 'react';
import Logo from '../../../assets/logo.png';
import { Button } from '@heathmont/moon-core-tw';
import FacebookIcon from '../Svg/facebook';
import GoogleIcon from '../Svg/google';
import LoginImg from '../../../assets/LoginImg.jpg';
import Link from 'next/link';
import Form from './components/Form';
import Head from './components/Head';
import OrContinueWith from './components/OrContinueWith';
import SocialHandle from './components/SocialHandle';
import SideImage from './components/SideImage';

const SignUp = () => {
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-6 lg:w-1/2 w-full'>
				<Head title='Register to Continue' />
				<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
					<Form buttonMadeVisible={true} />
					<OrContinueWith/>
                    <SocialHandle />
				</div>
            </div>
            <SideImage />
		</div>
	);
};

export default SignUp;
