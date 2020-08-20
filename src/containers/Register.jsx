//import react
import React from 'react';

//import styles
import './styles/Register.css'

const Register = () => (
  <section className='register'>
    <section className='register__container'>
      <h2>Register</h2>
      <form className='register__container--form'>
        <input className='input' type='text' placeholder='Name' />
        <input className='input' type='text' placeholder='Email' />
        <input className='input' type='password' placeholder='Password' />
        <button className='button'>Register me</button>
      </form>
      <a href=''>Log In</a>
    </section>
  </section>
)

export default Register;