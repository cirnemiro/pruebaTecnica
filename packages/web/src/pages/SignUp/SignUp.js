import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import './styles.scss'
import { resetAuthState, signUpWithEmailRequest } from '../../redux/auth/auth-actions';

const SignUp = () => {

    const dispatch = useDispatch()

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        dispatch(resetAuthState())
    }, [dispatch])

    async function handleSubmit(e) {
        e.preventDefault()

        dispatch(
            signUpWithEmailRequest({
                username,
                email,
                password,
            })
        )

        setEmail('');
        setPassword('');
    }

    return (
        <div className="signUp">
            <form className="signUp__form" action="#" method="POST" onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    type="text"
                    onChange={e => setUsername(e.target.value)}
                    placeholder="Username"
                />
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
                    placeholder="Password"
                />
                <button>Sign Up</button>
            </form>
            <div className="signUp__login">
                <p>Already have an account?</p>
                <Link to="/login">Login</Link>
            </div>

        </div>
    );
}

export default SignUp;