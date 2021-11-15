import React from 'react';
import { FilmList } from '../../components/FilmList/FilmList';
import PropTypes from 'prop-types';
import s from '../HomePage/HomePage.module.css'
import { useEffect, useState} from 'react';
import { getTrendyMovies } from '../../api';


const HomePage = () => {
    const [results, setResults] = useState([]);
  const [time_window, setTimeWindow] = useState('day');
  useEffect(() => {
    getTrendyMovies().then(results => {
      setResults(results);
    });
  }, [time_window]);

    return(
        <div >
        <h1 className={ s.title}>Trending today</h1>
            <FilmList films={results}/>
         </div>
    )
}
HomePage.propTypes = {
  results: PropTypes.array,
};
export default HomePage;