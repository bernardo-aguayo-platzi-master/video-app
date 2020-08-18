/* eslint-disable no-unused-vars */
// import react from
import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

// functional component
export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Search />

      <Categories>
        <Carousel>
          <CarouselItem />
        </Carousel>
      </Categories>

    </React.Fragment>
  )
}
