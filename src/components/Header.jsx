/* eslint-disable no-unused-vars */
// import react
import React from 'react';

import user from '../assets/user-icon.png'

//functional component
export default function Header() {
  return (
    <header className='header'>
      <img className='header__img' src='/' alt='' />
      <div className='header__menu'>
        <div className='header__menu--profile'>
          <img src={user} />
          <p>Profile</p>
        </div>
        <ul>
          <li><a href='/'>Account</a></li>
          <li><a href='/'>log out</a></li>
        </ul>
      </div>
    </header>
  )
}
