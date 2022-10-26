import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Register.css';

const Register = () => {
    const [passwordError, setPasswordError] = useState(null);
    const { createUserWithEmail } = useContext(AuthContext);
    const createUser = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        if (password.length < 6) {
            showError('The password must contain at least 6 characters.')
            return;
        }
        if (password !== confirmPassword) {
            showError("The passwords didn't match.")
            return;
        }
        createUserWithEmail(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.log(error))
        console.log(email, typeof password.length, confirmPassword)
    }
    const showError = message => {
        setPasswordError(message);
        setTimeout(() => {
            setPasswordError(null)
        }, 2500);
    }
    return (
        <div className='login-container'>
            <h2 className='form-title'>Register</h2>
            <form onSubmit={createUser}>
                <div className="form-control">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name='email' placeholder='Enter your email.' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name='password' placeholder='Enter your password.' required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password" name='confirmPassword' placeholder='Confirm your password.' required />
                </div>
                <p className='password-error'>{passwordError}</p>
                <input className='btn-submit' type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to='/login'>Login</Link></p>
        </div>
    );
};

export default Register;