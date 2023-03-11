import styled from 'styled-components';

const Footer = styled.div`
    background-color: var(--wf-base-900);
    padding: 6.4rem var(--landing-page-side-padding);

    .footer__container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        gap: 3.2rem;
        max-width: var(--landing-page-max-width);
        margin: 0 auto;

        > div:first-child {
            display: flex;
            flex-direction: column;
            gap: 3.2rem;
            button {
                align-self: flex-start;
                padding-inline: 5rem;
            }
            p {
                color: var(--wf-base-white);
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
                color: var(--wf-base-500);
            }
        }

        @media (min-width: 769px) {
            flex-direction: row;
            align-items: flex-end;

            .footer__links {
                flex-direction: row;
                text-align: center;
            }
        }
    }
`;

export default () => {
    return (
        <Footer>
            <div className="footer__container">
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
            </div>
        </Footer>
    );
};
