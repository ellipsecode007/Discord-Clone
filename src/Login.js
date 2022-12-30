import React from 'react';
import { Button } from '@mui/material';
import './Login.css';
import { auth, provider } from './firebase';

function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }
  return (
    <div className='login'>
        <h2>Welcome to Valorant Chat Rooms</h2>
        <div className="login___logo">
            <img src="https://logos-world.net/wp-content/uploads/2020/12/Discord-Emblem.png" alt="" />
        </div>
        <Button onClick = {signIn}>Sign in</Button>

    </div>
  )
}

export default Login