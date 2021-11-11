import { useEffect, useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import { Link, history, useHistory } from 'react-router-dom';
import { getMoviesDetails } from '../../api'
import Cast from '../Cast'
import { FilmList } from "../FilmList";
import Reviews from '../Reviews'

// import {  Link } from 'react-router-dom';
const MovieDetailsPage = () => {
    const match = useRouteMatch()
    const [movie, setMovie] = useState(null);
      const [locationToMoviePage, setLocationToMoviePage] = useState("/movies");
    const movieId = match.params.movieId
    useEffect(() => {
        getMoviesDetails(movieId)
    .then(movie => {
      setMovie(movie)
    console.log(movie);
  })
  .catch(error => console.log('errorGetMoviesDetails'));
    }, [])

    const history = useHistory();
    console.log(history)
    const handleGoBack = () => history.push('/');
//    useEffect(() => {
//     try {
//       const { movie, from: FilmList } = history.state;
//       setMovie(movie);
//       setLocationToMoviePage(FilmList);
//     } catch (e) {
//       history.push("/not-found");
//     }
//   }, []);
    return (
         movie ? (
            <>
            <h1>{ movie.original_title}</h1>
            <h2>Overview</h2>
            <div>{movie.overview}</div>
            <h3>Genres</h3>
          <button onClick={handleGoBack} type="button"> GoBack </button>
               <div>{movie.genres.map((item) =>  item.name +' ')}</div>

            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
            
                <div>
                <h4>Additional Information</h4>
                 <Link to={`/movie/${movieId}/cast`}>Casts</Link>
                <Link to={`/movie/${movieId}/reviews`}>Reviews</Link>

            </div>
            <Switch>
                <Route path="/movie/:movieId/reviews" component={Reviews} />
                <Route path="/movie/:movieId/cast" component={Cast} />
            </Switch>
                </>) :("")
        
            
    )
}
export default MovieDetailsPage;