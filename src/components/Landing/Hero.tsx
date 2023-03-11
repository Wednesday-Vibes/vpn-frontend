import styled from 'styled-components';
import Globe from './Globe';
import { useAppDispatch } from '../../redux/hooks';
import { useAppSelector } from '../../redux/hooks';
import DeletingText from './DeletingText';

const Hero = styled.div`
    position: relative;
    background-color: var(--wf-base-200);

    .hero-floaty-container {
        width: 100%;
        padding: 0rem var(--landing-page-side-padding);

        .hero-floaty {
            top: 0;
            left: 0;
            right: 0;
            max-width: calc(var(--landing-page-max-width));
            margin: 0 auto;
            height: 100%;
            min-height: 50rem;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            z-index: 1;

            .hero__content {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                text-align: center;
                gap: 2rem;
                width: min(100%, 60rem);
                padding-block: 2rem;

                .hero__text {
                    @media (min-width: 769px) {
                        max-width: 70%;
                    }

                    h1 {
                        font-size: 28px;
                        margin-bottom: 1rem;
                    }
                    p {
                        font-size: 14px;
                        font-weight: 500;
                    }
                }
                .hero__buttons {
                    display: flex;
                    gap: 2rem;
                }
            }

            @media (min-width: 769px) {
                justify-content: flex-start;

                .hero__content {
                    align-items: flex-start;
                    text-align: left;

                    .hero__text {
                        max-width: none;
                    }
                }
            }
        }
    }
`;

export default () => {
    const dispatch = useAppDispatch();
    const value = useAppSelector((state) => state.global.value);
    return (
        <Hero className="hero">
            <Globe
                connections={[
                    {
                        fromCoords: [12.1234134, 142.2342342],
                        toCoords: [456.234234234, 234.6424323]
                    }
                ]}
            />
            <div className="hero-floaty-container">
                <div className="hero-floaty">
                    <div className="hero__content">
                        <div className="hero__text">
                            <h1>
                                Connect to your <DeletingText textOptions={['equiment', 'team', 'infrastructure', 'resources']} /> from
                                wherever you are. Whenever you need.
                            </h1>
                            <p>
                                Stay secure, stay private, stay connected - with our VPN service. Protect your online identity and surf the
                                web with peace of mind. Experience true online freedom and anonymity with our top-rated VPN service.
                                {value}
                            </p>
                        </div>
                        <div className="hero__buttons">
                            <button
                                onClick={() => {
                                    dispatch({ type: 'global/counterDecremented' });
                                }}
                            >
                                Try for Free
                            </button>
                            <button
                                className="button--secondary"
                                onClick={() => {
                                    dispatch({ type: 'global/counterIncremented' });
                                }}
                            >
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Hero>
    );
};
