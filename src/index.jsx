/* eslint-disable no-unused-vars */
// import react and react dom
import React from 'react';
import ReactDom from 'react-dom';

// import app
import Home from './containers/Home'

// import global styles
import './index.css'

// creat root const
const root = document.getElementById('app');

ReactDom.render(<Home />, root);
