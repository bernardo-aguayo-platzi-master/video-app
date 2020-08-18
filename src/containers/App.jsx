/* eslint-disable no-unused-vars */
// import react from
import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

// functional component
export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Search />

      <Categories>
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>

      <Footer />
    </React.Fragment>
  )
}
