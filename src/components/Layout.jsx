//import react
import React from 'react';

//import header
import Header from './Header';

//import footer
import Footer from './Footer'

//functional component
const Layout = ({ children }) => (
  <div className='app'>
    <Header />
    {children}
    <Footer />
  </div>
)

export default Layout;
