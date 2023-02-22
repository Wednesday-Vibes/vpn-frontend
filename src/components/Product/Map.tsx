import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import { Product } from '../../logic/types';

interface Props {
    product: Product;
}

const Map: React.FC<Props> = ({ product }) => {
    const position: LatLngExpression = [product.latitude, product.longitude];

    return (
        <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: '100%', width: '100%' }}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position}>
                <Popup>{product.name}</Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;
