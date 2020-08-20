//import react
import React from 'react';

//import browser router
import { HashRouter, Route } from 'react-router-dom'

//import components
import Home from '../containers/Home';
import Login from '../containers/Login'

const App = () => (
  <HashRouter basename='/'>
    <Route exact path='/' component={Home}/>
    <Route exact path='/login' component={Login}/>
  </HashRouter>
)

export default App;