import styled from 'styled-components';

const Signup = styled.div`
    background-color: #717d96;
    padding: 12rem;
    height: 100dvh;
    .content {
        background-color: #ffffff;
        padding: 9rem 1rem;
        border-radius: 8px;
    }
`;

export default () => {
    return (
        <Signup>
            <div className="content">
                <h2>
                    <strong>Sign Up</strong> to your account
                </h2>
            </div>
        </Signup>
    );
};
