import React from 'react';
import { FilmList } from '../FilmList';

const HomePage = ({  results }) => {
    console.log( results)
    return(
        <div>
            <h1>Trending today</h1>
            <FilmList films={results}/>
         </div>
    )
}
export default HomePage;