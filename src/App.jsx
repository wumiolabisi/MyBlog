import './App.css';
import SearchBar from './components/SearchBar.jsx';
import Slider from './components/Slider.jsx';
import Post from './components/Post.jsx';
import { useFetch } from "./hooks/useFetch.jsx";

export default function MyApp() {

  const { loading, data, errors } = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=10&_delay=3000');

  return (
    <div>
      <SearchBar />
      <div className="content">
        <div className="slider-container">
          <Slider img={{ filename: '/pexels-noratopicals-7038234.jpg' }} />
          <Slider img={{ filename: '/pexels-noratopicals-7038230.jpg' }} />
          <Slider img={{ filename: '/pexels-noratopicals-7038224.jpg' }} />
        </div>
      </div>
      <div className="columns-2">
        {loading && <div>Chargement...</div>}
        {errors && <div className="alert alert-danger">{errors.toString()}</div>}
        {data && <Post details={{ post }} />}
      </div>
    </div>
  );
}
