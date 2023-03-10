import styled from 'styled-components';

const Login = styled.div`
    background-color: var(--wf-base-600);
    padding: 12rem;
    height: 100dvh;
    display: flex;
    .splash {
        display: none;
    }
    .form {
        .content {
            box-shadow: 0px 0px 10px blue;
            border-radius: 4px;
        }
    }
`;

export default () => {
    return (
        <Login>
            <div className="splash"></div>
            <div className="form">
                <div className="content">
                    <h2>
                        <strong>Login</strong> to your account
                    </h2>
                </div>
            </div>
        </Login>
    );
};
