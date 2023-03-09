import styled from 'styled-components';
import Globe from './Globe';

const Hero = styled.div`
    position: relative;
    background-color: #edf0f7;
    .hero-floaty {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        text-align: left;
        gap: 2rem;
        padding: 3rem;
        .hero__buttons {
            display: flex;
            gap: 2rem;
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
                <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita deleniti nobis enim dignissimos, eum eveniet quod,
                    quisquam voluptatibus sequi illo vel ea adipisci aliquam atque cum modi alias possimus delectus.
                </p>
                <div className="hero__buttons">
                    <button>Large</button>
                    <button className="button--secondary">Large</button>
                </div>
            </div>
        </Hero>
    );
};
