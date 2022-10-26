import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { app } from '../components/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);
const UserContext = ({ children }) => {
    const createUserWithEmail = (email, password) => createUserWithEmailAndPassword(auth, email, password);
    const signInWithEmail = (email, password) => signInWithEmailAndPassword(auth, email, password);
    const authInfo = { createUserWithEmail, signInWithEmail };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;