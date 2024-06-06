import { useState } from 'react';
import './App.css';

function SearchBar() {
  return (
    <input type="search" placeholder='  Start small, start here.' />
  );
}

function Slider() {
  return (
    <div className='slider-container'>
      <div className='slider-item'>
        <img src='./public/img/pexels-noratopicals-7038154.jpg' />
      </div>

      <div className='slider-item'>
        <img src='./public/img/pexels-saul-rivera-120059439-17605107.jpg' />
      </div>

      <div className='slider-item'>
        <img src='./public/img/pexels-noratopicals-7038145.jpg' />
      </div>

      <div className='slider-controls'>
        <a className='slider-dot'>1</a>
        <a className='slider-dot'>2</a>
        <a className='slider-dot'>3</a>

      </div>
    </div>
  );
}

function Post() {
  return (<div><p>My post</p></div>
  );
}

export default function MyApp() {
  return (
    <div>
      <SearchBar />
    </div>
  );
}
