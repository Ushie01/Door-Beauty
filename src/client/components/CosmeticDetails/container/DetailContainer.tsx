type Props = {
	children: React.ReactNode;
};
const DetailContainer = ({ children }: Props) => (
	<div className='bg-white'>{children}</div>
);

export default DetailContainer;
