import { Link } from 'react-router-dom';
import s from './HomePage/HomePage.module.css'
export const FilmList = ({ films }) => (
    <ul>
        {films.map(item => (       
            <li className={s.homePageItem}><Link to={`/movies/${item.id}`}>{item.title}</Link></li>
        ))}
    </ul>
    )
