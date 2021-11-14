import { useEffect, useState } from 'react';
import { Link,useLocation} from 'react-router-dom';
import { searchMovie } from '../../api';
import s from '../MoviesPage/MoviePage.module.css'
const MoviesPage = () => {
     const [inputText, setInputText] = useState('');
    const [query, setQuery] = useState('');
    const [searchFilm, setSearchFilm] = useState([]);
     const handleChange = e => {setInputText(e.target.value )};
    const handleSubmit = (e, query) => {
        e.preventDefault();
        setQuery(query)
        if (inputText === '') return alert('Please insert your query for search');
    setInputText("");
    };
    const location = useLocation();
    useEffect(() => {
    location.search !== '' && setQuery(location.search.replace(/^\?[a-z]*=/gi, ''))
    }, [])
    useEffect(() => {   
        query !== '' && searchMovie(query).then(({ results }) => setSearchFilm(results));
    }, [query]);
    return (
        <>
            <header className={s.Searchbar}>
                <form className={s.SearchForm} onSubmit={(e) => handleSubmit(e, inputText)}>
              
                    <button type="submit" className={s.SearchForm_button} >
                        <span className={s.SearchForm_button_label}>Search</span>
                </button>
                    <input
                        className={s.SearchForm_input}
                            type="text"
                            autoComplete="off"
                            autoFocus
                            placeholder="Search movies"
                            value={inputText}
                            onChange={handleChange}
                        />
                </form>
            </header>
            {searchFilm.map((item) => (
                <li className={ s.searchList}>
                    <Link to={{
                        pathname: `/movie/${item.id}`,
                        state: { from: '/movies' },
                        search: query,
                    }} className={ s.linksearchFilm}>{item.title}</Link>
                </li>))}
        </>
        
    )
}
export default MoviesPage;