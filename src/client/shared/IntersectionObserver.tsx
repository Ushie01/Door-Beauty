import { useEffect, useRef } from 'react';

const useIntersectionObserver = (callback) => {
	const intersectionRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						callback(); 
					}
				});
			},
			{
				root: null,
				rootMargin: '0px',
				threshold: 1.0,
			}
		);

		if (intersectionRef.current) {
			observer.observe(intersectionRef.current);
		}

		return () => {
			observer.disconnect();
		};
	}, [callback]); 

	return intersectionRef;
};

export default useIntersectionObserver;
