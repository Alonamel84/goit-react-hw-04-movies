import './App.css';
import React from 'react';
import MoviesPage from './components/MoviesPage';
import MovieDetailsPage from './components/MovieDetailsPage';
import { Route, NavLink } from 'react-router-dom';
import { getTrendyMovies, getMoviesDetails, searchMovie } from './api.js';
import { useEffect, useState } from 'react';
import HomePage from './components/HomePage';
// import { Route } from 'react-router';

getMoviesDetails(566525)
  .then(movie => {
    console.log(movie);
  })
  .catch(error => console.log('errorGetMoviesDetails'));

function App() {
  const [time_window, setTimeWindow] = useState('day');
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('movie');
  const [page, setPage] = useState(1);
  // useEffect(() => {
  //   getTrendyMovies().then(results => {
  //     setResults(results);
  //     console.log(results);
  //   });
  // }, [time_window]);

  return (
    <div className="App">
      <NavLink to="/" activenavlink="NavLink--active">
        Home
      </NavLink>
      <NavLink to="/movies">Movies</NavLink>

      <Route exact path="/">
        <HomePage getTrendyMovies={getTrendyMovies} results={results} />
      </Route>
      <Route exact path="/movies">
        <MoviesPage />
      </Route>
      <Route path="/movie/:movieId">
        <MovieDetailsPage />
      </Route>
    </div>
  );
}

export default App;
