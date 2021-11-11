import { Link } from 'react-router-dom';
import s from './HomePage/HomePage.module.css'
export const FilmList = ({ films }) => {
    // const MoviesPage = () => (
        //   const history = useHistory();
        //   const { url } = useRouteMatch();
    return(
        <ul>
            {films.map(item => (
                <li className={s.homePageItem}><Link to={`/movie/${item.id}`}>{item.title}</Link></li>
            ))}
        </ul>)
        // )
}
