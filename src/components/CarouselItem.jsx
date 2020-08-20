// import react
import React from 'react';

import plusIcon from '../assets/plus-icon.png'
import playIcon from '../assets/play-icon.png'

//functional component
export default function CarouselItem({ image }) {
  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={image} alt='' />
      <div className='carousel-item__details'>
        <div>
          <img className='carousel-item__details--img' src={playIcon} alt='' />
          <img className='carousel-item__details--img' src={plusIcon} alt='' />
        </div>
        <p className='carousel-item__details--title'>Title</p>
        <p className='carousel-item__details--subtitle'>2019 16+ 114 minutes  </p>
      </div>
    </div>
  )
}