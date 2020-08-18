// import react and react dom
import React from 'react';
import ReactDom from 'react-dom';

//import app
import App from './components/App'

//creat root const
const root = document.getElementById('app');

ReactDom.render(<App />, root);
