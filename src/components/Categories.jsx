// import react
import React from 'react';

// create functional component
export default function Categories({ children }) {
  return (
    <React.Fragment>
      <h3 className='categories__title'>My list</h3>
      {children}
    </React.Fragment>
  )
}
