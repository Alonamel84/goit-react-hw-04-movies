import { useEffect, useState } from "react";
import {  useRouteMatch } from "react-router";
import { getCasts } from '../../api'
const Cast = () => {
  const [cast, setCasts] = useState(null);
    const match = useRouteMatch()
    const movieId = match.params.movieId
    useEffect(() => {
        getCasts(movieId)
    .then(cast => {
      setCasts(cast)
    
  })
  .catch(error => console.log('errorGetMoviesDetails'));
    }, [])
   
    return (
        
        <>
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