type Props = {
	children: React.ReactNode;
};
const CartContainer = ({ children }: Props) => (
	<div className='bg-white'>{children}</div>
);

export default CartContainer;
