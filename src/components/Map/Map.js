import MEP_KEY from './mapKey';
import React, { useState } from 'react'
import { DirectionsRenderer, DirectionsService, GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '600px'
};

const position = {
    lat: 25.068061,
    lng: 91.401615
};

function Map({ destinationInfo }) {
    const [directionRes, setDirectionRes] = useState(null);
    return (
        <LoadScript
            googleMapsApiKey={`${MEP_KEY}`}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={position}
                zoom={10}
            >
                {
                    destinationInfo.pickTo && destinationInfo.pickFrom && <DirectionsService
                        options={{
                            destination: destinationInfo.pickTo,
                            origin: destinationInfo.pickFrom,
                            travelMode: 'DRIVING'
                        }}
                        callback={res => {

                            setDirectionRes(res);

                        }}
                    />
                }
                {
                    directionRes !== null && <DirectionsRenderer
                        options={{
                            directions: directionRes
                        }}
                    />
                }

                <Marker
                    position={position}
                />
            </GoogleMap>
        </LoadScript>
    )
}

export default Map