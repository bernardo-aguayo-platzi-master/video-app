// import react
import React from 'react';

//functional component
export default function CarouselItem() {
  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src='' alt='' />
      <div className='carousel-item__details'>
        <div>
          <img className='carousel-item__details--img' src='' alt='' />
          <img className='carousel-item__details--img' src='' alt='' />
        </div>
        <p className='carousel-item__details--title'>Title</p>
        <p className='carousel-item__details--subtitle'>2019 16+ 114 minutes</p>
      </div>
    </div>
  )
}