//import react
import React from 'react';

//import browser router
import { HashRouter, Route, Switch } from 'react-router-dom'

//import components
import Home from '../containers/Home';
import Login from '../containers/Login'
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';

const App = () => (
  <HashRouter basename='/'>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </HashRouter>
)

export default App;
