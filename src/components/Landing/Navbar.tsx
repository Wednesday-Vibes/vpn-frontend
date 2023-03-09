import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin: 0px;
        padding: 0 2rem;
        height: 60px;

        img {
            width: 150px;
        }

        button {
            padding: 0.6em 1.2em;
        }

        ul {
            display: flex;
            color: #fff;
            text-decoration: none;
            list-style: none;
            font-weight: 400;

            li {
                display: flex;
                list-style: none;
                color: #fff;
                text-decoration: none;
                font-weight: 400;
                align-items: center;
                padding: 0;

                &:hover {
                    background-color: rgba(0, 0, 0, 0.05);
                    border-radius: 4px;
                }
            }
        }

        &.nav-white {
            background-color: #242424;
            border-bottom: 1px solid #f1f1f1;
        }

        .nav-Link {
            color: white;
            text-decoration: none;
            font-weight: 400;
            font-size: 14px;
            align-items: center;
            margin: 20px;
        }

        .nav-p {
            align-items: center;
            font-size: 14px;
            margin-right: 5px;
            margin-left: 20px;
        }

        .ln {
            display: flex;
            align-items: center;
        }

        .dropdown-menu {
            background: white;
            width: 150px;
            padding: 0;
            position: absolute;
            top: 50px;
            list-style: none;
            text-align: start;
            display: flex;
            flex-direction: column;
            margin: 0;
            box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
            border-radius: 5px;
            border: 1px solid #f1f1f1;

            li {
                background: #ffffff;
                cursor: pointer;
                padding: 0;
                margin: 0;
                border-radius: 5px;

                &.dropdown-li {
                    height: 40px;
                    padding: 10px 10px;
                }

                &.nav-li {
                    height: 20px;
                    padding: 10px 0;
                }

                &:hover {
                    background: #e0efff;
                }
            }

            &.clicked {
                display: none;
            }

            .dropdown-link {
                display: flex;
                padding: 10px;
                color: black;
                text-decoration: none;
                font-weight: 400;
                font-size: 14px;
                align-items: center;
            }
        }
    }

    .nav-container {
        width: 100%;
        max-width: 1400px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
    }
`;
export default () => {
    return (
        <Navbar className="">
            <div className="nav-container">
                <Link to="/">
                    <button>Logo</button>
                </Link>

                <ul>
                    <li className="nav-li">
                        <Link className="nav-Link" to="/map">
                            Platform
                        </Link>
                    </li>
                    <li className="nav-li">
                        <Link className="nav-Link" to="/pricing">
                            Pricing
                        </Link>
                    </li>
                </ul>

                <div className="ln">
                    <ul>
                        <li className="nav-li">
                            <Link className="nav-Link" to="/login">
                                Log In
                            </Link>
                        </li>
                    </ul>
                    <Link to="/signup">
                        <button>Sign Up</button>
                    </Link>
                </div>
            </div>
        </Navbar>
    );
};
