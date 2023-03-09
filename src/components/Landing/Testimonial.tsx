import styled from 'styled-components';

const Testimonial = styled.div`
    border-radius: 5px;
    border: 1px var(--color-primary) solid;
    flex: 1;
    display: grid;
    grid-template-rows: 12rem minmax(12rem, 1fr);
    overflow: hidden;
    text-align: left;
    max-width: 55rem;
    .testimonial-image {
        img {
            object-fit: cover;
            max-height: 100%;
            width: 100%;
        }
        border: 0px var(--color-primary) solid;
        border-bottom-width: 1px;
    }
    .testimonial-content {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
`;

type TestimonialProps = {
    imageSrc: string;
    title: string;
    textContent: string;
};
export default ({ imageSrc, title, textContent }: TestimonialProps) => {
    return (
        <Testimonial>
            <div className="testimonial-image">
                <img src={imageSrc} />
            </div>
            <div className="testimonial-content">
                <h3>{title}</h3>
                <p>{textContent}</p>
            </div>
        </Testimonial>
    );
};
