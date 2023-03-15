import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1rem var(--landing-page-side-padding);

    .nav-container {
        width: 100%;
        max-width: var(--landing-page-max-width);
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        position: relative;

        .logo-link {
            opacity: 0;
            pointer-events: none;

            @media (min-width: 481px) {
                opacity: 1;
                pointer-events: all;
            }

            transition: opacity 0.3s;
            button.logo {
                padding-inline: 5rem;
            }
        }

        .hamburger-menu {
            position: absolute;
            right: 0;
            padding: 1.2rem 1.4rem;

            display: flex;
            align-items: center;
            gap: 0.5rem;

            @media (min-width: 1025px) {
                display: none;
                padding: inherit;
            }
        }

        .quick-links {
            position: absolute;
            z-index: 2;
            display: none;
            gap: 3rem;
            right: 0;

            &[aria-expanded='true'] {
                display: flex;
                flex-direction: column;
                top: 110%;
                background-color: var(--wf-base-white);
                border-radius: 8px;
                padding: 3rem;
                box-shadow: 0px 0px 10px #00000022;
            }

            ul.links {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                list-style: none;
                font-weight: 400;
                font-size: 20px;
                gap: 1rem;
                justify-content: space-between;

                li {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;

                    i {
                        display: none;
                    }

                    .nav-link {
                        text-decoration: none;
                        color: inherit;
                        font-weight: 400;
                    }
                }
            }

            .login-signup {
                display: flex;
                flex-direction: column;
                align-items: stretch;
                gap: 1rem;

                button {
                    width: 100%;
                }
            }

            @media (min-width: 1025px) {
                display: flex;
                flex-direction: row;

                ul.links {
                    flex-direction: row;
                    align-items: center;
                    gap: 2rem;

                    li i {
                        display: block;
                    }
                }

                .login-signup {
                    flex-direction: row;
                }
            }
        }
    }
`;
export default () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // close menu if resizing to be big enough not to show hamburger menu
    useEffect(() => {
        window.addEventListener('resize', (e) => {
            const w = e.target as Window;
            if (w.innerWidth >= 769) {
                setIsMenuOpen(false);
            }
        });
    });

    return (
        <Navbar className="">
            <div className="nav-container">
                <Link className="logo-link" to="/">
                    <button tabIndex={-1} className="logo">
                        Logo
                    </button>
                </Link>

                <button
                    className="hamburger-menu button--secondary"
                    onClick={() => {
                        setIsMenuOpen((prevState) => !prevState);
                    }}
                >
                    <i className="fa fa-bars" />
                </button>

                <div className="quick-links" aria-expanded={isMenuOpen}>
                    <ul className="links">
                        <li>
                            <Link className="nav-link" to="/help">
                                Help
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" to="/pricing">
                                Pricing
                            </Link>
                        </li>
                    </ul>

                    <div className="login-signup">
                        <Link to="/login">
                            <button tabIndex={-1} className="button--secondary">
                                Login
                            </button>
                        </Link>
                        <Link to="/signup">
                            <button tabIndex={-1}>Sign Up</button>
                        </Link>
                    </div>
                </div>
            </div>
        </Navbar>
    );
};
