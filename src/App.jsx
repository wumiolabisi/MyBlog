import './App.css';
import SearchBar from './components/SearchBar.jsx';
import Slider from './components/Slider.jsx';
import Post from './components/Post.jsx';
import { useFetch } from "./hooks/useFetch.jsx";

export default function MyApp() {

  const { loading, data, errors } = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=6&_delay=3000');
  const imgs = ['/pexels-noratopicals-7038224.jpg', '/pexels-saul-rivera-120059439-17605107.jpg', '/pexels-noratopicals-7038154.jpg', '/pexels-ds-stories-7256160.jpg', 'pexels-saul-rivera-120059439-17605107.jpg', '/pexels-pixabay-247287.jpg', '/pexels-minan1398-1079791.jpg'];
  // let randomNumber = Math.floor(Math.random() * imgs.length);

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
        {data &&
          data.map(post => (<Post key={post.id} title={post.title} img={imgs[post.id]} category={'Unwashed popular'} />))
        }
      </div>
    </div>
  );
}
