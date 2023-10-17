// import DashBoard from "@/client/components/DashBoard";
import Admin from '@/src/client/components/Auth/Admin/MainDashboard';
import type { NextPage } from 'next';

const DashBoards: NextPage = (props) => (
	<div>
		<Admin {...props} />
	</div>
);

export default DashBoards;
