
import SignIn from '@/src/client/components/Auth/SignIn';
import type { NextPage } from 'next';

const SignInPage: NextPage = (props) => (
	<div>
		<SignIn {...props} />
	</div>
);

export default SignInPage;
