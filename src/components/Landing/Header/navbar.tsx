import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../static/logo.png';

function Navbar() {


    return (
        <>
            <nav className="nav-white">
                <div className="nav-container">
                    <Link to="/">
                        <img src={logob} alt="Logo" />
                    </Link>

                    <ul>

                        <li className="nav-li">
                            <Link className="nav-Link" to="/about">
                                About
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
                                <Link className="nav-Link" to="https://app.bootprint.com">
                                    Log In
                                </Link>
                            </li>
                        </ul>
                        <Link to="https://app.bootprint.com/sign_up">
                            <button>Sign Up</button>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;