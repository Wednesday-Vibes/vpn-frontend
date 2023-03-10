import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Signup = styled.div`
    background-color: var(--wf-base-600);
    padding: 12rem;
    height: 100dvh;
    .content {
        background-color: var(--wf-base-white);
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
                <div>
                    Already have an account? <Link to="/login">Login</Link>
                </div>
            </div>
        </Signup>
    );
};
