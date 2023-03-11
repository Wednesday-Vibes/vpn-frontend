import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const Logout = styled.div`
    /* width: 100%; */
    height: 100dvh;
    display: grid;
    place-items: center;
`;

export default () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const authToken = useAppSelector((state) => state.global.auth.token);

    useEffect(() => {
        setTimeout(
            () => {
                dispatch({
                    type: 'global/authTokenUpdated',
                    payload: ''
                });
                navigate('/');
            },
            authToken ? 1000 : 0
        );
    }, []);

    return <Logout>Logging out...</Logout>;
};
