import React from 'react';
import useDeviceType from '../hooks/useDeviceType';
import MobileHeader from './MobileHeader';
import DeskTopHeader from './DeskTopHeader';

function Header() {
	const { isMobile } = useDeviceType();
	console.log(isMobile);

	if (isMobile) {
		return <MobileHeader />;
	}
	return <DeskTopHeader />;
}

export default Header;
