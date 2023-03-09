import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 1rem 2rem;

    .nav-container {
        width: 100%;
        max-width: 1400px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        position: relative;

        .hamburger-menu {
            position: absolute;
            right: 0;

            @media (min-width: 768px) {
                display: none;
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
                background-color: #ffffff;
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
                gap: 1rem;
                justify-content: space-between;

                li {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;

                    .nav-link {
                        text-decoration: none;
                        color: inherit;
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

            @media (min-width: 768px) {
                display: flex;
                flex-direction: row;

                ul.links {
                    flex-direction: row;
                    align-items: center;
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
            if (w.innerWidth > 768) {
                setIsMenuOpen(false);
            }
        });
    });

    return (
        <Navbar className="">
            <div className="nav-container">
                <Link to="/">
                    <button>Logo</button>
                </Link>

                <button
                    className="hamburger-menu button--secondary"
                    onClick={() => {
                        setIsMenuOpen((prevState) => !prevState);
                    }}
                >
                    <i>Menu</i>
                </button>

                <div className="quick-links" aria-expanded={isMenuOpen}>
                    <ul className="links">
                        <li className="">
                            <i>icon</i>
                            <Link className="nav-link" to="/map">
                                Platform
                            </Link>
                        </li>
                        <li className="">
                            <i>icon</i>
                            <Link className="nav-link" to="/pricing">
                                Pricing
                            </Link>
                        </li>
                    </ul>

                    <div className="login-signup">
                        <Link to="/login">
                            <button className="button--secondary">Log In</button>
                        </Link>
                        <Link to="/signup">
                            <button>Sign Up</button>
                        </Link>
                    </div>
                </div>
            </div>
        </Navbar>
    );
};
