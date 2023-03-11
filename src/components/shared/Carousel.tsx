import { ReactElement } from 'react';
import styled from 'styled-components';

const Carousel = styled.div``;

type CarouselProps = {
    items: ReactElement[];
};

export default ({ items }: CarouselProps) => {
    return (
        <Carousel>
            {items.map((item) => (
                <div>{item}</div>
            ))}
        </Carousel>
    );
};
