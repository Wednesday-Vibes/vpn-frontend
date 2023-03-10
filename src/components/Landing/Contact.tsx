import styled from 'styled-components';

const Contact = styled.div`
    background-color: var(--wf-base-600);
    padding: 12rem var(--landing-page-side-padding);
    .content {
        background-color: var(--wf-base-white);
        padding: 9rem 1rem;
        border-radius: 8px;
        max-width: var(--landing-page-max-width);
        margin: 0 auto;
    }
`;

export default () => {
    return (
        <Contact>
            <div className="content">Contact</div>
        </Contact>
    );
};
