//import react
import React from 'react';

//import browser router
import { HashRouter, Route } from 'react-router-dom'
import Home from '../containers/Home';

const App = () => (
  <HashRouter basename='/'>
    <Route exact path='/' component={Home}/>
  </HashRouter>
)

export default App;
