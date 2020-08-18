// import form react
import React from 'react';

//functional component
export default function Search() {
  return (
    <section className='main'>
      <h2 className='main__title'>What do you would to see today?</h2>
      <input type='text' className='input' placeholder='Search...' />
    </section>
  );
}
