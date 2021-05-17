import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelector } from '../../redux/auth/auth-selectors';

import './styles.scss'

const Login = () => {

    const dispatch = useDispatch()

    const { isAuthenticated } = useSelector(authSelector)

    return (
        <>
            {
                isAuthenticated
                    ?
                    <div className="login">
                        <form>
                            <label>Username</label>
                            <input type="text" />
                            <label>Password</label>
                            <input type="password" />
                        </form>
                    </div>
                    :
                    <div className="signUp">
                        <form className="signUp__form">
                            <label>Username</label>
                            <input type="text" />
                            <label>Email</label>
                            <input type="email" />
                            <label>Name</label>
                            <input type="text" />
                            <label>Password</label>
                            <input type="password" />
                        </form>
                    </div>
            }
        </>
    );
}

export default Login;