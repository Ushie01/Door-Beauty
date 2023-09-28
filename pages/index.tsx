// import LandingPage from '@/client/components/LandingPage';
import Head from 'next/head';
import Image from 'next/image';
import Logo from '../src/assets/logo.png'
import LandingPage from './../src/client/components/LandingPage/index';


export default function Home() {
	return (
		<>
			<Head>
				<title>Door Beauty App</title>
				<meta
					name='description'
					content='Door Beauty'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					rel='icon'
					href='/favicon.ico'
				/>
			</Head>

			<LandingPage />
		</>
	);
}
