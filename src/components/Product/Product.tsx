import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAppDispatch } from '../../redux/hooks';
import MapDeckGL from './Map/MapDeckGL';

const Product = styled.div`
    .logo-link {
        position: absolute;
        z-index: 1;
        top: 1rem;
        left: 1rem;
    }
`;

export default () => {
    const dispatch = useAppDispatch();

    return (
        <Product className="product-container">
            <Link className="logo-link" to="/logout">
                <button className="back button--small">logout</button>
            </Link>

            <MapDeckGL
                connection={{
                    latitude: 52.21438270370086,
                    longitude: 0.13696066558991374,
                    name: 'Test'
                }}
            />
        </Product>
    );
};
