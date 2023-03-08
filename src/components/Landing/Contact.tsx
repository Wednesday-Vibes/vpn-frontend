import styled from 'styled-components';

const Contact = styled.div`
    background-color: #717d96;
    padding: 12rem;
    .content {
        background-color: #ffffff;
        padding: 9rem 1rem;
        border-radius: 8px;
    }
`;

export default () => {
    return (
        <Contact>
            <div className="content">Contact</div>
        </Contact>
    );
};
