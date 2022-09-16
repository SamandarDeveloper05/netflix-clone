import React from 'react';
import { signInWithGoogle } from '../firebase/config';
import logo from '../Components/assets/logo.png'
const Login = () => {
  return (
    <div className='login'>
        <img src={logo} alt="logo" loading='lazy'/> <br />
        <button className='loginBtn' onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  )
}

export default Login