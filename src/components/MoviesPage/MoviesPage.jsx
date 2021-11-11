import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { searchMovie } from '../../api';
const MoviesPage = () => {
     const [inputText, setInputText] = useState('');
    const [query, setQuery] = useState('');
    const [searchFilm, setSearchFilm] = useState([]);
     const handleChange = e => {setInputText(e.target.value )};
    const handleSubmit = (e, query) => {
        e.preventDefault();
        setQuery(query)
        // if (inputText === '') return alert('Please insert your query for search');
        // handleSubmit()
    setInputText("");
    };
    useEffect(() => {
         console.log('useefect!!!', query)
        query !== '' && searchMovie(query).then(({ results }) => setSearchFilm(results));
    }, [query]);
    console.log(searchFilm)

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
                <li>{item.title}
                <Link to={`/movie/${item.id}`}></Link>                
                </li>))}
        </>
        
    )
}
export default MoviesPage;