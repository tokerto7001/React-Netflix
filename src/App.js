import './App.css';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import Cards from './components/Cards';
import { useEffect, useState } from 'react';

function App() {

  const [movies, setMovies] = useState([])

  const fetchFromAPI = () => {
    const options = {
      method: 'GET',
      url: 'https://streaming-availability.p.rapidapi.com/search/basic',
      params: {
        country: 'us',
        service: 'netflix',
        type: 'movie',
        genre: '18',
        page: '1',
        language: 'en'
      },
      headers: {
        'x-rapidapi-key': '73b9c671c3msh7e6990af8749c16p15dc5ajsn89b24cd29a7e',
        'x-rapidapi-host': 'streaming-availability.p.rapidapi.com'
      }
    };

    axios.request(options).then((response) => setMovies(response))

  }

  useEffect(() => {
    fetchFromAPI()
    // console.log(movies)
  }, [])

  return (
    <div className="App">
      <Header />
      <Cards movies={movies} />
      <Footer />
    </div>
  );
}

export default App;
