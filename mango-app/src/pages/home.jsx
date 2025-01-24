import React from 'react';
import Header from '../components/header';
import Movie from '../components/movie';

const movies = [ 
  {
    img: 'https://images.photowall.com/products/51078/movie-poster-jaws.jpg?h=699&q=85',
    title: 'Jaws',
    desc: 'Shark movie'
  },
  { 
    img: 'https://marketplace.canva.com/EAFTl0ixW_k/1/0/1131w/canva-black-white-minimal-alone-movie-poster-YZ-0GJ13Nc8.jpg',
    title: 'Alone',
    desc: 'Survival movie'
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc35tyke0tV6bbmJKNG1spZyJaRO-w-vJecQ&s',
    title: 'Joker',
    desc: 'Superhero movie'
  }
];

export default function Home() {
  return (
    <div>
      <Header />
      {movies.map((movie, index) => (
        <Movie
          key={index}
          imageSrc={movie.img}
          title={movie.title}
          description={movie.desc}
        />
      ))}
    </div>
  );
}