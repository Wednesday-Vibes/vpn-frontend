import styled from 'styled-components';
import Globe from './Globe';

const Hero = styled.div`
    position: relative;
    background-color: #edf0f7;

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
                            <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita deleniti nobis enim dignissimos, eum
                                eveniet quod, quisquam voluptatibus sequi illo vel ea adipisci aliquam atque cum modi alias possimus
                                delectus.
                            </p>
                        </div>
                        <div className="hero__buttons">
                            <button>Large</button>
                            <button className="button--secondary">Large</button>
                        </div>
                    </div>
                </div>
            </div>
        </Hero>
    );
};
