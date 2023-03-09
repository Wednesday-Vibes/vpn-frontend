import styled from 'styled-components';
import Globe from './Globe';

const Hero = styled.div`
    position: relative;
    background-color: #edf0f7;
    .hero-floaty {
        top: 0;
        left: 0;
        right: 0;
        width: min(100%, 144rem);
        height: 100%;
        min-height: 50rem;
        margin: 0 auto;
        padding: 3rem 2rem;
        display: flex;
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

            .hero__text {
                max-width: 70%;
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

            @media (min-width: 768px) {
                align-items: flex-start;
                text-align: left;

                .hero__text {
                    max-width: none;
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
            <div className="hero-floaty">
                <div className="hero__content">
                    <div className="hero__text">
                        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita deleniti nobis enim dignissimos, eum eveniet
                            quod, quisquam voluptatibus sequi illo vel ea adipisci aliquam atque cum modi alias possimus delectus.
                        </p>
                    </div>
                    <div className="hero__buttons">
                        <button>Large</button>
                        <button className="button--secondary">Large</button>
                    </div>
                </div>
            </div>
        </Hero>
    );
};
