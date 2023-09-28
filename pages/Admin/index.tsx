// // import DashBoard from "@/client/components/DashBoard";
// import Admin from '@/src/client/components/Auth/Admin';
// import type { NextPage } from 'next';

// const DashBoards: NextPage = (props) => (
// 	<div>
// 		<Admin {...props} />
// 	</div>
// );

// export default DashBoards;
import Admin from '../../src/client/components/Auth/Admin/index'
import React from 'react'

const Admins = () => {
  return (
	<Admin />
  )
}

export default Admins
