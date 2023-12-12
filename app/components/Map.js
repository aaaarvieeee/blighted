import { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


export default function Map(){
    const containerStyle = {
        width: '100%',
        height: '400px',
      };
    const center = {
        lat: 51.06392080779764,
        lng: -114.08851824494961,

      };
    return (
        <div>
            <LoadScript
            googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
            >
                <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={15}
                className="z-0 relative"
                >
                <Marker position={center} />
                { /* Child components, such as markers, info windows, etc. */ }
                <></>
                </GoogleMap>
            </LoadScript>
        </div>

    );
};

