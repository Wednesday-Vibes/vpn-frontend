import styled from 'styled-components';

const Footer = styled.div`
    background-color: #1a202c;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 6.4rem 10.4rem;
    > div:first-child {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        p {
            color: #ffffff;
        }
    }
    .footer__links {
        display: flex;
        gap: 1rem;
    }
`;

export default () => {
    return (
        <Footer>
            <div>
                <button>Logo</button>
                <p>Copyright 2022 VPN Frontend</p>
            </div>
            <div className="footer__links">
                <a href="https://github.com/my-username/my-repo">Privacy Policy</a>
                <a href="https://github.com/my-username/my-repo">Terms and Conditions</a>
                <a href="https://github.com/my-username/my-repo">Cookie Policy</a>
                <a href="https://github.com/my-username/my-repo">Contact</a>
                <a href="https://github.com/my-username/my-repo">View on GitHub</a>
            </div>
        </Footer>
    );
};
