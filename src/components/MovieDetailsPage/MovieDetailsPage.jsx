import { useEffect, useState } from "react";
import { Route, Switch, useLocation, useRouteMatch } from "react-router";
import { Link, useHistory } from 'react-router-dom';
import { getMoviesDetails } from '../../api'
import Cast from '../Cast'
import Reviews from '../Reviews'

const MovieDetailsPage = () => {
    const [movie, setMovie] = useState(null);
    const match = useRouteMatch()
    const movieId = match.params.movieId
    useEffect(() => {
        getMoviesDetails(movieId)
    .then(movie => {
      setMovie(movie)
  })
  .catch(error => console.log('errorGetMoviesDetails'));
    }, [])

    const  {pathname, state, search } = useLocation();
    const history = useHistory();
    const handleGoBack = () => history.push(
        state.from.pathname !== '/' ? `${state.from}?query=${search.substr(1)}` : '/');
        
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
                    <Link to={{
                        pathname: `/movie/${movieId}/cast`,
                        state: { from: state.from },
                        search: search
                 }}>Casts</Link>
                <Link to={{
                        pathname: `/movie/${movieId}/reviews`,
                        state: { from: state.from },
                    search: search
                    }}>Reviews</Link>

            </div>
            <Switch>
                <Route path="/movie/:movieId/reviews" component={Reviews} />
                <Route path="/movie/:movieId/cast" component={Cast} />
            </Switch>
                </>) :("")
        
            
    )
}
export default MovieDetailsPage;