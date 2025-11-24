'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import { MapComponentProps } from '@/types';

// Fix for default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: '/images/icon-location.svg',
  iconRetinaUrl: '/images/icon-location.svg',
  shadowUrl: '',
  iconSize: [46, 56],
  iconAnchor: [23, 56],
});

function MapUpdater({ lat, lng }: MapComponentProps) {
  const map = useMap();
  
  useEffect(() => {
    map.flyTo([lat, lng], 13, {
      duration: 1.5,
    });
  }, [lat, lng, map]);
  
  return null;
}

export default function Map({ lat, lng }: MapComponentProps) {
  return (
    <div className="w-full h-full relative z-0">
      <MapContainer
        center={[lat, lng]}
        zoom={13}
        scrollWheelZoom={true}
        className="w-full h-full"
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]} />
        <MapUpdater lat={lat} lng={lng} />
      </MapContainer>
    </div>
  );
}