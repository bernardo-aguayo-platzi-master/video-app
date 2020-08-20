//import react
import React from 'react';

//insert styles
import './styles/Login.css'

//import google and twitter icons
import google from '../assets/google-icon.png'
import Twitter from '../assets/twitter-icon.png'

//functional component
const Login = () => (
  <section className='login' >
    <section className='login__container' >
      <h2>Log In</h2>
      <form className='login__container--form' >
        <input className='input' type='text' placeholder='Correo' />
        <input className='input' type='password' placeholder='Password' />
        <button className='button' > Log In</button >
        <div className='login__container--remember-me' >
          <label>
            <input type='checkbox' id='cbox1' value='first_checkbox' />
						Remember me
          </label>
          <a href='/' >Forget password</a >
        </div >
      </form >
      <section className='login__container--social-media' >
        <div>
          <img src={google} /> Log In with Google
        </div>
        <div>
          <img src={Twitter} /> Log In with Twitter
        </div>
      </section >
      <p className='login__container--register' >
        Do not have an account? < a href='' > REGISTER HERE NOW</a >
      </p >
    </section >
  </section >
)

export default Login;
