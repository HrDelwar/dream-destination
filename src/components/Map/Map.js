import React from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from "react-google-maps";
import MEP_KEY from './mapKey';


const Map = () => {
    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: 25.045610, lng: 91.387138 }}
        >
            <Marker
                position={{ lat: 25.045610, lng: 91.387138 }}
            />
        </GoogleMap>
    ));


    return (
        <MapWithAMarker
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${MEP_KEY}&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />
    );
};

export default Map;