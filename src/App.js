import './App.css';
import React from 'react';
import MoviesPage from './components/MoviesPage';
import MovieDetailsPage from './components/MovieDetailsPage';
import { Route, NavLink, Redirect, Switch } from 'react-router-dom';
import { getTrendyMovies, searchMovie } from './api.js';
import { useEffect, useStateбSuspense, Suspense, useState, lazy } from 'react';
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
  const HomePage = lazy(() => import('./components/HomePage' /* webpackChunkName: "home-page" */));
  const MoviesPage = lazy(() =>
    import('./components/MoviesPage' /* webpackChunkName: "movies-page" */),
  );
  const MovieDetailsPage = lazy(() =>
    import('./components/MovieDetailsPage' /* webpackChunkName: "MovieDetails-page" */),
  );

  return (
    <div className="App">
      <NavLink to="/" activenavlink="NavLink--active" className="nav">
        Home
      </NavLink>
      <NavLink to="/movies" className="nav">
        Movies
      </NavLink>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
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
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
