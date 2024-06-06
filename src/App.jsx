import { useState } from 'react';
import './App.css';

function SearchBar() {
  return (
    <form className="form-type">
      <div className="search-area rounded">
        <input className="input-search rounded" id="search" type="search" placeholder="Start small, start here." />
        <button type="submit" className="button-search"><i className="fa fa-search"></i></button>
      </div>
    </form>
  );
}

function Slider() {
  return (
    <div className="content">
      <div className="slider-container">
        <div className="slider-item">
          <img src="/pexels-noratopicals-7038154.jpg" />
          <div className="slider-content">
            <h2 className="color-white">Use your purchasing <span className="allura-regular">power</span> for <span className="allura-regular">positive</span> change</h2>
          </div>
        </div>
        <div className="slider-item">
          <img src="/pexels-saul-rivera-120059439-17605107.jpg" />
          <div className="slider-content">
            <h2 className="color-white">Use your purchasing <span className="allura-regular">power</span> for <span className="allura-regular">positive</span> change</h2>
          </div>
        </div>
        <div className="slider-item">
          <img src="/pexels-noratopicals-7038145.jpg" />
          <div className="slider-content">
            <h2 className="color-white">Use your purchasing <span className="allura-regular">power</span> for <span className="allura-regular">positive</span> change</h2>
          </div>
        </div>
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
      <Slider />
    </div>
  );
}
