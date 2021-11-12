import { useEffect, useState } from 'react';
import { Link,useLocation} from 'react-router-dom';
import { searchMovie } from '../../api';
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
                <header className="Searchbar">
                <form className="SearchForm" onSubmit={(e) => handleSubmit(e, inputText)}>
              
                         <button type="submit" className="SearchForm-button" >
                    <span className="SearchForm-button-label">Search</span>
                </button>
                        <input
                            className="SearchForm-input"
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
                <li>
                    <Link to={{
                        pathname: `/movie/${item.id}`,
                        state: { from: '/movies' },
                    search: query,
                    }}>{item.title}</Link>
                </li>))}
        </>
        
    )
}
export default MoviesPage;