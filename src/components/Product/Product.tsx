import MapDeckGL from './Map/MapDeckGL';

export default function Product() {
    return (
        <div className="product-container">
            <MapDeckGL
                connection={{
                    latitude: 52.21438270370086,
                    longitude: 0.13696066558991374,
                    name: 'Test'
                }}
            />
        </div>
    );
}
