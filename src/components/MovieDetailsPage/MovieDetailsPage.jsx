// import {  Link } from 'react-router-dom';
const MovieDetailsPage = ({  results }) => {
    return (
    <div>
        {results.map(item=>item.overview)}
        </div>
    )
}
export default MovieDetailsPage;