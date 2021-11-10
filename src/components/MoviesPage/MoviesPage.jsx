import {  useState } from 'react';
const MoviesPage = (onSubmit) => {
     const [inputText, setInputText] = useState('');
   
    const handleChange = e => {
    setInputText(e.target.value );
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputText === '') return alert('Please insert your query for search');
        onSubmit(inputText)
    setInputText("");
  };
    return (
        <>
                <header className="Searchbar">
                    <form className="SearchForm" onSubmit={handleSubmit}>
              
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
            </>
    )
}
export default MoviesPage;