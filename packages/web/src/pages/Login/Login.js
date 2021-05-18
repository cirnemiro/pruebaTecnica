import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector } from '../../redux/auth/auth-selectors';
import {
    resetAuthSatte,
    signInWithEmailRequest
} from '../../redux/auth/auth-actions'
import { Link } from 'react-router-dom'

import './styles.scss'

const Login = () => {

    const dispatch = useDispatch()

    const { isAuthenticated } = useSelector(authSelector)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault()

        dispatch(signInWithEmailRequest(email, password))

        setEmail('');
        setPassword('');
    }

    if (isAuthenticated) {
        return <Redirect to="/" />;
    }

    return (
        <div className="login">
            <form className="login__form">
                <label>Email</label>
                <input
                    type="text"
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <label>Password</label>
                <input
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                />
                <button>Log in</button>
            </form>
            <div className="login__signUp">
                <p>Don't you have any account?</p>
                <Link to="/signUp">Sign Up</Link>
            </div>
        </div>
    );
}

export default Login;