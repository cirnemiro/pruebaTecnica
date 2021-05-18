import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'
import { authSelector } from '../../redux/auth/auth-selectors'
import { signOut } from '../../services/auth'

import './styles.scss'

const Header = () => {

    const { isAuthenticated } = useSelector(authSelector)
    const { email } = useSelector(store => store.user)

    const dispatch = useDispatch()

    const handleSignOut = () => {
        dispatch(signOut())
    }

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
            {
                isAuthenticated
                    ?
                    <div className="header__userInfo">
                        {email}
                        <button type="button" onClick={handleSignOut}>Sign Out</button>
                    </div>
                    :
                    <div className="header__login">
                        <Link to="/login">Login</Link>
                    </div>

            }
        </div>
    );
}

export default Header