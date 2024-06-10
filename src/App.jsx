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
          <img src="/pexels-noratopicals-7038234.jpg" />
          <div className="slider-content">
            <h2 className="color-white">Use your purchasing <span className="allura-regular">power</span> for <span className="allura-regular">positive</span> change</h2>
            <a href="#" class="btn-primary rounded cabin-regular">More&nbsp;<i className="fa fa-arrow-right"></i></a>
          </div>
        </div>
        <div className="slider-item">
          <img src="/pexels-noratopicals-7038224.jpg" />
          <div className="slider-content">
            <h2 className="color-white">Use your purchasing <span className="allura-regular">power</span> for <span className="allura-regular">positive</span> change</h2>
            <a href="#" class="btn-primary rounded cabin-regular">More&nbsp;<i className="fa fa-arrow-right"></i></a>
          </div>
        </div>
        <div className="slider-item">
          <img src="/pexels-noratopicals-7038230.jpg" />
          <div className="slider-content">
            <h2 className="color-white">Use your purchasing <span className="allura-regular">power</span> for <span className="allura-regular">positive</span> change</h2>
            <a href="#" class="btn-primary rounded cabin-regular">More&nbsp;<i className="fa fa-arrow-right"></i></a>
          </div>
        </div>

      </div>
    </div>
  );
}

function Post() {
  return (
    <div className="columns-2">
      <div className="post-area">
        <div className="post-thumbnail">
          <img className="img-cover" src="/pexels-noratopicals-7038230.jpg" />
        </div>
        <a href="#" class="btn-primary btn-post-thumbnail rounded cabin-regular">More&nbsp;<i className="fa fa-arrow-right"></i></a>
        <p className="category-title">UNWASH SUPERSTARS</p>
        <h2>Personal Care Brand Haeckels Pushes Their <span className="allura-regular">Sustainability Efforts</span> Forward</h2>
      </div>
      <div className="post-area">
        <div className="post-thumbnail">
          <img className="img-cover" src="/pexels-noratopicals-7038230.jpg" />
        </div>
        <a href="#" class="btn-primary btn-post-thumbnail rounded cabin-regular">More&nbsp;<i className="fa fa-arrow-right"></i></a>
        <p className="category-title">UNWASH SUPERSTARS</p>
        <h2>Personal Care Brand Haeckels Pushes Their <span className="allura-regular">Sustainability Efforts</span> Forward</h2>
      </div>
    </div>
  );
}

export default function MyApp() {
  return (
    <div>
      <SearchBar />
      <Slider />
      <Post />
    </div>
  );
}
