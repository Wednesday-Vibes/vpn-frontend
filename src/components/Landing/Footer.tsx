import styled from 'styled-components';

const Footer = styled.div`
    background-color: #1a202c;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 6.4rem 10.4rem;
    gap: 3.2rem;

    > div:first-child {
        display: flex;
        flex-direction: column;
        gap: 3.2rem;
        button {
            align-self: flex-start;
            padding-inline: 5rem;
        }
        p {
            color: #ffffff;
            font-size: 14px;
            text-align: left;
        }
    }
    .footer__links {
        display: flex;
        flex-direction: column;
        text-align: left;
        gap: 3.2rem;
        font-size: 14px;
        a {
            text-decoration: none;
            color: #a0abc0;
        }
    }

    @media (min-width: 768px) {
        flex-direction: row;
        align-items: flex-end;

        .footer__links {
            flex-direction: row;
            text-align: center;
        }
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
                <a href="https://github.com/Wednesday-Vibes/vpn-frontend/">Privacy Policy</a>
                <a href="https://github.com/Wednesday-Vibes/vpn-frontend/">Terms and Conditions</a>
                <a href="https://github.com/Wednesday-Vibes/vpn-frontend/">Cookie Policy</a>
                <a href="https://github.com/Wednesday-Vibes/vpn-frontend/">Contact</a>
                <a href="https://github.com/Wednesday-Vibes/vpn-frontend/">View on GitHub</a>
            </div>
        </Footer>
    );
};
