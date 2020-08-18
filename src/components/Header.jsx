//import react
import React from 'react';

//functional component
export default function Header() {
    return (
        <header className="header">
            <img className="header__img" src="../assets/logo-platzi-video-BW2.png" alt="Video" />
            <div className="header__menu">
                <div className="header__menu--profile">
                    <img src="../assets/user-icon.png" alt="" />
                    <p>Profile</p>
                </div>
                <ul>
                    <li><a href="/">Account</a></li>
                    <li><a href="/">log out</a></li>
                </ul>
            </div>
        </header>
    )
}