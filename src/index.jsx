// import react and react dom
import React from 'react';
import ReactDom from 'react-dom';

// import app
import App from './components/App'

// import global styles
import './index.css'

// creat root const
const root = document.getElementById('app');

ReactDom.render(<App />, root);
