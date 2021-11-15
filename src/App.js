import './App.css';
import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { getTrendyMovies, searchMovie } from './api.js';
import { useEffect, useStateбSuspense, Suspense, useState, lazy } from 'react';
import Nav from './components/Nav';

const HomePage = lazy(() => import('./Pages/HomePage' /* webpackChunkName: "home-page" */));
const MoviesPage = lazy(() => import('./Pages/MoviesPage' /* webpackChunkName: "movies-page" */));
const MovieDetailsPage = lazy(() =>
  import('./Pages/MovieDetailsPage' /* webpackChunkName: "MovieDetails-page" */),
);
function App() {
  const [query, setQuery] = useState('movie');
  const [page, setPage] = useState(1);
  return (
    <div className="App">
      <Nav />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/">
            <HomePage />
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
