import React from 'react';
import {Map} from '@googlemaps/react-wrapper'

export const Map = ({apiKey, zoom, lat, lng, customMapStyles}) => {
  return (
    <div>
        <Map 
         apiKey={apikey}
         defaultZoom={zoom}
         defaultCenter={{ lat: lat, lng: lng }}
         defaultOptions={{ styles: customMapStyles, disableDefaultUI: true }}
        />
    </div>
  )
}
