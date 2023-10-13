import React from 'react';
import useDeviceType from '@/src/client/shared/hooks/useDeviceType';
import { Props } from '../constant/data';
import MobileCardView from './MobileCardView';
import DeskTopCardView from './DeskTopCardView';

const Card = (props: Props) => {
	const { isMobile } = useDeviceType();

	const CardView = isMobile ? MobileCardView : DeskTopCardView;

	return <CardView {...props} />;
};

export default Card;
