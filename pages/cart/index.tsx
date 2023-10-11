
import Cart from '@/src/client/components/Cart';
import type { NextPage } from 'next';

const CartPage: NextPage = (props) => (
	<div>
		<Cart {...props} />
	</div>
);

export default CartPage;
