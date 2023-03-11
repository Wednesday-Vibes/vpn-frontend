import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Carousel from '../shared/Carousel';
import { useLoginMutation } from '../../api/api';
import { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';

const Login = styled.div`
    background-color: var(--wf-base-white);
    position: relative;
    height: 100dvh;
    display: flex;
    width: 100%;
    > * {
        flex: 1;
    }

    .logo-link {
        position: absolute;
        top: 1rem;
        left: 1rem;
    }

    .splash {
        display: none;
    }
    .form {
        display: flex;
        justify-content: center;
        align-items: center;
        .content {
            box-shadow: 0px 0px 10px blue;
            border-radius: 12px;
            padding: 4rem;
            display: flex;
            flex-direction: column;
            gap: 2rem;

            .email-password {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }

            .login-button {
                align-self: center;
            }
        }
    }

    @media (min-width: 769px) {
        .splash {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: var(--wf-base-600);
        }
        .form {
        }
    }
`;

const loginCarouselItems = [<h1>Hello World</h1>, <h2>Some large screen content</h2>];

export default () => {
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [attemptLogin] = useLoginMutation();

    return (
        <Login>
            <Link className="logo-link" to="/">
                <button className="back button--small button--secondary">back</button>
            </Link>
            <div className="splash">
                <Carousel items={loginCarouselItems} />
            </div>
            <div className="form">
                <div className="content">
                    <h2>
                        <strong>Login</strong> to your account
                    </h2>
                    <div className="email-password">
                        <input
                            type="email"
                            placeholder="Email Address"
                            value={emailAddress}
                            onChange={(e) => {
                                setEmailAddress(e.target.value);
                            }}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </div>
                    <button
                        className="login-button button--small"
                        onClick={async () => {
                            attemptLogin({ username: emailAddress, password })
                                .unwrap()
                                .then((loginResponse) => {
                                    dispatch({
                                        type: 'global/authTokenUpdated',
                                        payload: loginResponse.authToken
                                    });
                                    navigate('/');
                                })
                                // TODO: remove
                                .catch(() => {
                                    dispatch({
                                        type: 'global/authTokenUpdated',
                                        payload: 'my fake auth token'
                                    });
                                    navigate('/');
                                });
                        }}
                    >
                        Login
                    </button>
                    <div>
                        Don't have an account? <Link to="/signup">Sign up</Link>
                    </div>
                </div>
            </div>
        </Login>
    );
};
