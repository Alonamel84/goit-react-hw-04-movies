import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Route, useRouteMatch } from "react-router";
import { getCasts } from '../../api'
const Cast = () => {
    const match = useRouteMatch()
    const [cast, setCasts] = useState(null);
    const movieId = match.params.movieId
    useEffect(() => {
        getCasts(movieId)
    .then(cast => {
      setCasts(cast)
    console.log(cast);
  })
  .catch(error => console.log('errorGetMoviesDetails'));
    }, [])
    console.log(cast)
    // <Link to={`/movie/${cast.id}`}>{cast.casts}</Link>
    return (
        
        <>
        {/* <h1>Cast</h1> */}
            {cast &&
                <>
                <ul>
                    {cast.cast.map((item) => (
                    <div>
                    <li key={item.id} >{item.name}
                          <img src={`https://image.tmdb.org/t/p/w200${item.profile_path}`} alt="" />
                                <p> Character: {item.character}</p>
                              <p> Popularity: { item.popularity}</p>
                            </li>
                            </div>
                ))}
                    </ul>
                </>
            }
            </>
    )
}
export default Cast;