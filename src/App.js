import './App.css';
import React from 'react';
import MoviesPage from './components/MoviesPage';
import MovieDetailsPage from './components/MovieDetailsPage';
// import { Route } from 'react-router-dom';
import { getTrandyMovies } from './api.js';
import { useEffect, useState } from 'react';
import HomePage from './components/HomePage';
function App() {
  const [media_type, setMediaType] = useState('movie');
  const [time_window, setTimeWindow] = useState('day');
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('movie');
  const [page, setPage] = useState(1);
  useEffect(() => {
    getTrandyMovies().then(results => {
      setResults(results);
      console.log(results);
    });
  }, [time_window]);

  const handleSubmit = query => {
    setQuery(query);
    setPage(1);
    setResults([]);
  };
  return (
    <div className="App">
      {/* <Nav /> */}
      <HomePage getMoviesDetails={getTrandyMovies} results={results} />
      <MoviesPage onSubmt={handleSubmit} />
      <MovieDetailsPage results={results} />
    </div>
  );
}

export default App;
