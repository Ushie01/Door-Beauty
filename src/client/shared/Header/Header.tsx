import React from 'react';
import useDeviceType from '../hooks/useDeviceType';
import MobileHeader from './MobileHeader';
import DeskTopHeader from './DeskTopHeader';
import useGeolocation from '../hooks/useGeolocation';

function Header() {
	const { isMobile } = useDeviceType();
	const { location, error } = useGeolocation();

	if (isMobile) {
		return <MobileHeader />;
	}
	return <DeskTopHeader />;
}

export default Header;
