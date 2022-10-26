import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Login.css';

const Login = () => {
    const { signInWithEmail } = useContext(AuthContext);
    const signIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signInWithEmail(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))
        console.log(email, password)
    }
    return (
        <div className='login-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={signIn}>
                <div className="form-control">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name='email' placeholder='Enter your email.' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name='password' placeholder='Enter your password.' required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p>New to Ema-John? <Link to='/register'>Create New Account</Link></p>
        </div>
    );
};

export default Login;