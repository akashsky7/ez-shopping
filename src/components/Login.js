import React, { useState } from 'react'
import './Login.css'

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (event) => {
        event.preventDefault();
    }

    const register = (event) => {
        event.preventDefault();
    }

  return (
    <div className='login'>
        <div className='login__brand'>
            <img className='login__logo' src='https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG3.png' alt='' />
            <p className='login__brandName'>EzShopping</p>
        </div>
        <div className='login__container'>
            <h1>Sign In</h1>
            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                <button className='login__signInButton' type='submit' onClick={signIn}>Sign In</button>
            </form>
            <p>By continuing, you agree to EzShopping's Conditions of Use and Privacy Notice.</p>
            <button className='login__registerButton' onClick={register}>Create your EzShopping account</button>
        </div>
    </div>
  )
}

export default Login