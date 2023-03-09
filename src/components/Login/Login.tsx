import styled from 'styled-components';

const Login = styled.div`
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
        <Login>
            <div className="content">
                <h2>
                    <strong>Login</strong> to your account
                </h2>
            </div>
        </Login>
    );
};
