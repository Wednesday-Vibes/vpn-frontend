import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav className="nav-white">
                <div className="nav-container">
                    <Link to="/">
                        <button>Logo</button>
                    </Link>

                    <ul>
                        <li className="nav-li">
                            <Link className="nav-Link" to="/platform">
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
            </nav>
        </>
    );
}

export default Navbar;
