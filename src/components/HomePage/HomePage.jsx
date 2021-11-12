import React from 'react';
import { FilmList } from '../FilmList';
import PropTypes from 'prop-types';
import s from '../HomePage/HomePage.module.css'

const HomePage = ({  results }) => {
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