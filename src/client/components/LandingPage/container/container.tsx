type Props = {
	children: React.ReactNode;
};
const Container = ({ children }: Props) => (
    <div className='bg-white'>
		{children}
	</div>
);

export default Container;
