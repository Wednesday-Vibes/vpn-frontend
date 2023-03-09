import styled from 'styled-components';
import Testimonial from './Testimonial';

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 5rem;
    padding: 10rem 10rem;
    > div:first-child {
        display: flex;
        flex-direction: column;
        align-items: center;
        p {
            max-width: 50rem;
        }
    }

    .testimonials {
        display: flex;
        justify-content: center;
        gap: 3rem;
    }

    .separator {
        height: 0.1rem;
        background-color: #2d3648;
    }

    > a button.call-to-action {
        align-self: center;
    }
`;

export default () => {
    return (
        <Info>
            <div className="">
                <h2>Header 2</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima libero harum quibusdam dolor in, accusamus animi
                    tempora quisquam enim porro! Quo reprehenderit atque amet veniam nemo quia adipisci deleniti voluptates? Lorem, ipsum
                    dolor sit amet consectetur adipisicing elit. Aspernatur hic quia natus, voluptates totam sed. Expedita, laboriosam porro
                    eos, quibusdam molestias maiores aut ipsa, nesciunt blanditiis ducimus perferendis alias a.
                </p>
            </div>

            <div className="testimonials">
                <Testimonial
                    imageSrc="/pexels-mariatheodora-andrikopoulou-14390223.jpg"
                    title="Karen. M"
                    textContent={"That's all she wrote"}
                />
                <Testimonial imageSrc="/pexels-mathilde-langevin-15823364.jpg" title="John. S" textContent={"That's all he wrote"} />
                <Testimonial
                    imageSrc="/pexels-matt-hardy-5327027.jpg"
                    title="Mason. M"
                    textContent={
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla perspiciatis voluptatibus voluptatem doloremque id, nostrum nihil pariatur consectetur, architecto ut quidem temporibus reiciendis non sed veniam inventore doloribus nobis dicta.'
                    }
                />
            </div>

            <div className="separator" />

            <a>
                <button className="call-to-action">Call to action</button>
            </a>
        </Info>
    );
};
