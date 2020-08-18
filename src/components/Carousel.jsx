// import react
import React from 'react';

// functional component
export default function Carousel({ children }) {
  return (
    <section className='carousel'>
      <div className='carousel__container'>
        {children}
      </div>
    </section>
  );
}
