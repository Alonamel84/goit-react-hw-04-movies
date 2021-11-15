import { useEffect, useState } from "react";
import { Route, Switch, useLocation, useRouteMatch } from "react-router";
import { Link, useHistory } from 'react-router-dom';
import { getMoviesDetails } from '../../api'
import Cast from '../../components/Cast'
import Reviews from '../../components/Reviews'
import s from '../MovieDetailsPage/MovieDetailPage.module.css'

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
            <div className={ s.container}>
                <h1 className={ s.titleMovie}>{ movie.original_title}</h1>
            <h2>Overview</h2>
            <div>{movie.overview}</div>
                <button onClick={handleGoBack} type="button" className={ s.buttonBack}> GoBack </button>
            <h3>Genres</h3>
                <ul className={ s.genres}>{movie.genres.map((item) => <li className={ s.listGenres}>{ item.name +' '}</li>)}</ul>

            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
            
                <div>
                <h4>Additional Information</h4>
                    <Link to={{
                        pathname: `/movie/${movieId}/cast`,
                        state: { from: state?.from },
                        search: search
                    }} className={ s.addInfoBtn}>Cast</Link>
                <Link to={{
                        pathname: `/movie/${movieId}/reviews`,
                        state: { from: state?.from },
                    search: search
                    }} className={ s.addInfoBtn}>Reviews</Link>

            </div>
            <Switch>
                <Route path="/movie/:movieId/reviews" component={Reviews} />
                <Route path="/movie/:movieId/cast" component={Cast} />
            </Switch>
                </div>) :("")
        
            
    )
}
export default MovieDetailsPage;