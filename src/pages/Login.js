import React from 'react';
import { useContext } from 'react';
import { Context } from '..';
import firebase from 'firebase/compat/app';
import './Login.css'

const Login = () => {
    
    const {auth} = useContext(Context)
   
    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
        console.log(user)
    }

    return (
        <div className='parent'>
            <button className='login_btn' onClick={login}>Login with Google <img className='login_img' src="https://img.icons8.com/color/48/null/google-logo.png" alt='google'/></button>
        </div>
    );
};

export default Login;