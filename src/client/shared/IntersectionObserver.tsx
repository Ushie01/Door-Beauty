import React, { useEffect, useRef, useState } from 'react';

type Props = {
	verticalTransition: string;
	intersection: JSX.Element;
};

const IntersectionComponent = ({ verticalTransition, intersection }: Props) => {
	const elementRef = useRef<HTMLDivElement>(null!);
	const [isVisible, setIsVisible] = useState<boolean>(false);

	useEffect(() => {
		const options = {
			root: null,
			rootMargin: '44px',
			threshold: 0.0,
		};
		const observer = new IntersectionObserver((entries) => {
			const entry = entries[0];
			setIsVisible(entry.isIntersecting);
		}, options);

		if (elementRef.current) {
			observer.observe(elementRef.current);
		} else {
			observer.unobserve(elementRef.current);
		}

	}, [elementRef, setIsVisible]);

    
	return (
		<div
			ref={elementRef}
			className={`${
				isVisible === true
					? 'opacity-95 transition-transform duration-1000'
					: `opacity-30 transform ${verticalTransition}  transition-transform duration-300`
			}`}>
			{intersection}
		</div>
	);
};

export default IntersectionComponent;
