/* eslint-disable no-unused-vars */
// import react from
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

// functional component
export default function Home() {
  // use state hook
  const [characters, setCharacters] = useState([]);

  //use effect hook
  useEffect(
    () => {
      const getCharacters = async () => {
        const results = await fetch('https://rickandmortyapi.com/api/character/')
          .then(response => response.json())
          .then(data => data.results);
        setCharacters(results);
      }
      getCharacters();
    }, [characters]
  );

  return (
    <React.Fragment>
      <Header />
      <Search />

      <Categories>
        <Carousel>
          {
            characters && (
              characters.map(
                item => <CarouselItem key={item.id} image={item.image} />
              )
            )
          }
        </Carousel>
      </Categories>

      <Footer />
    </React.Fragment>
  )
}
