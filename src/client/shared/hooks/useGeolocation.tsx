import { useEffect, useState } from 'react';

type Coordinates = {
	latitude: number;
	longitude: number;
}

type GeolocationState = {
	location: Coordinates | null;
	error: string | null;
}

const useGeolocation = (): GeolocationState => {
	const [state, setState] = useState<GeolocationState>({
		location: null,
		error: null,
	});

	useEffect(() => {
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const { latitude, longitude } = position.coords;
					setState({ location: { latitude, longitude }, error: null });
				},
				(err) => {
					setState({ location: null, error: err.message });
				}
			);
		} else {
			setState({
				location: null,
				error: 'Geolocation is not supported by your browser',
			});
		}
	}, []); 

	return state;
};

export default useGeolocation;
