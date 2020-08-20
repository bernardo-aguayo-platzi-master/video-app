//import react
import React from 'react';

//insert styles
import './styles/Login.css'

//functional component
const Login = () => (
  <section className='login' >
    <section className='login__container' >
      <h2>Inicia sesión</h2>
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
          <img src='../assets/google-icon.png' /> Log In with Google
        </div>
        <div>
          <img src='../assets/twitter-icon.png' /> Log In with Twitter
        </div>
      </section >
      <p className='login__container--register' >
        Do not have an account? < a href='' > REGISTER HERE NOW</a >
      </p >
    </section >
  </section >
)

export default Login;
