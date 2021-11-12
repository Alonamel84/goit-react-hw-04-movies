import './App.css';
import React from 'react';
import MoviesPage from './components/MoviesPage';
import MovieDetailsPage from './components/MovieDetailsPage';
import { Route, NavLink, Redirect } from 'react-router-dom';
import { getTrendyMovies, searchMovie } from './api.js';
import { useEffect, useState } from 'react';
import HomePage from './components/HomePage';

function App() {
  const [time_window, setTimeWindow] = useState('day');
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('movie');
  const [page, setPage] = useState(1);
  useEffect(() => {
    getTrendyMovies().then(results => {
      setResults(results);
    });
  }, [time_window]);

  return (
    <div className="App">
      <NavLink to="/" activenavlink="NavLink--active" className="nav">
        Home
      </NavLink>
      <NavLink to="/movies" className="nav">
        Movies
      </NavLink>

      <Route exact path="/">
        <HomePage getTrendyMovies={getTrendyMovies} results={results} />
      </Route>
      <Route exact path="/movies">
        <MoviesPage />
      </Route>
      <Route path="/movie/:movieId">
        <MovieDetailsPage />
      </Route>
      <Redirect to="/" />
    </div>
  );
}

export default App;
