import { useEffect, useState } from "react";
import {  useRouteMatch } from "react-router";
import { getCasts } from '../../api'
import s from '../Cast/Cast.module.css'
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
          <ul className={ s.castList}>
                    {cast.cast.map((item) => (
                    <div>
                        <li key={item.id} className={s.actorProfile} > <p className={ s.actorName}>{item.name}</p>
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