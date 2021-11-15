import { Link , useLocation} from 'react-router-dom';
import s from '../FilmList/FilmList.module.css'
import PropTypes from 'prop-types';
export const FilmList = ({ films }) => {
    const location = useLocation();
    return(
        <ul className={ s.filmList}>
            {films.map(item => (
                <li key={ item.id} className={s.homePageItem}>
                <Link to={{
                        pathname: `/movie/${item.id}`,
                        state: { from: location }
                    }}>
                        <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} alt={ item.name} />
                    </Link></li>
            ))}
        </ul>)
        // )
}
FilmList.propTypes = {
  films: PropTypes.array,
};