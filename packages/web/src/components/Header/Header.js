import React from 'react'

import { Link } from 'react-router-dom'

import './styles.scss'

const Header = () => {
    return (
        <div className="header">
            <nav className="header__nav">
                <ul>
                    <li>
                        <Link to="/" >Home</Link>
                    </li>
                    <li>
                        <Link to="/" >Other link</Link>
                    </li>
                </ul>
            </nav>
            <div className="header__userInfo">
                <Link to="/login">Login</Link>
            </div>
        </div>
    );
}

export default Header