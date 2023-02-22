import MapDeckGL from './Map/MapDeckGL';

export default function Product() {
    return (
        <div className="product-container">
            <MapDeckGL
                connection={{
                    latitude: 52.1951,
                    longitude: 0.119167,
                    name: 'Test'
                }}
            />
        </div>
    );
}
