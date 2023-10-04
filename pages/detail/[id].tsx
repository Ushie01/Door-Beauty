import CosmeticDetail from '@/src/client/components/CosmeticDetails';
import type { NextPage } from 'next';

const Details: NextPage = (props) => (
	<div>
		<CosmeticDetail {...props} />
	</div>
);

export default Details;
