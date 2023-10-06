import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

interface Location {
	geometry: {
		location: {
			lat: () => number;
			lng: () => number;
		};
	};
	name: string;
	place_id: string;
}

interface GoogleMapComponentProps {
	apiKey: string;
}

const GoogleMapComponent: React.FC<GoogleMapComponentProps> = ({ apiKey }) => {
	const [searchText, setSearchText] = useState('');
	const [searchResults, setSearchResults] = useState<Location[]>([]);
	const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);


	const mapContainerStyle = {
		width: '100%',
		height: '400px',
	};

	const center = {
		lat: 0, 
		lng: 0, 
	};

	const handleSearch = () => {
		if (searchText.trim() === '') {
			return;
		}

		const service = new window.google.maps.places.PlacesService(
			new window.google.maps.Map(document.createElement('div'))
		);
		service.textSearch({ query: searchText }, (results, status) => {
			if (status === window.google.maps.places.PlacesServiceStatus.OK) {
				setSearchResults(results as Location[]);
			}
		});
	};

	return (
		<div>
			<div>
				<input
					type='text'
					value={searchText}
					onChange={(e) => setSearchText(e.target.value)}
					placeholder='Search for a location'
				/>
				<button onClick={handleSearch}>Search</button>
			</div>
			<div style={{ marginTop: '10px' }}>
				{searchResults.map((result) => (
					<div key={result.place_id}>
						<p>{result.name}</p>
						<button onClick={() => setSelectedLocation(result)}>
							Show on Map
						</button>
					</div>
				))}
			</div>

			<LoadScript googleMapsApiKey={apiKey}>
				<GoogleMap
					mapContainerStyle={mapContainerStyle}
					center={center}
					zoom={10}>
					{selectedLocation && (
						<Marker
							position={{
								lat: selectedLocation.geometry.location.lat(),
								lng: selectedLocation.geometry.location.lng(),
							}}
						/>
					)}
				</GoogleMap>
			</LoadScript>
		</div>
	);
};

export default GoogleMapComponent;
